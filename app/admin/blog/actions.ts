'use server';

import { createClient } from '@supabase/supabase-js';
import { revalidatePath } from 'next/cache';

// ── Service-role client (never sent to the browser) ──────────────────────────
function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceKey) {
    throw new Error('Missing Supabase admin env vars');
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

// ── Types ─────────────────────────────────────────────────────────────────────

export interface AdminBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  author: string;
  category: string;
  read_time: string | null;
  featured: boolean;
  published: boolean;
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
}

export type BlogPostInput = Omit<AdminBlogPost, 'id' | 'created_at' | 'updated_at'>;

// ── Server Actions ────────────────────────────────────────────────────────────

export async function serverGetAllPosts(): Promise<AdminBlogPost[]> {
  const sb = getAdminClient();
  const { data, error } = await sb
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw new Error(error.message);
  return data as AdminBlogPost[];
}

export async function serverGetPostById(id: string): Promise<AdminBlogPost | null> {
  const sb = getAdminClient();
  const { data, error } = await sb
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return null;
  return data as AdminBlogPost;
}

export async function serverCreatePost(input: BlogPostInput): Promise<AdminBlogPost> {
  const sb = getAdminClient();
  const { data, error } = await sb
    .from('blog_posts')
    .insert([input])
    .select()
    .single();

  if (error) throw new Error(error.message);
  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  return data as AdminBlogPost;
}

export async function serverUpdatePost(
  id: string,
  input: Partial<BlogPostInput>
): Promise<AdminBlogPost> {
  const sb = getAdminClient();
  const { data, error } = await sb
    .from('blog_posts')
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  return data as AdminBlogPost;
}

export async function serverDeletePost(id: string): Promise<void> {
  const sb = getAdminClient();
  const { error } = await sb
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);
  revalidatePath('/blog');
  revalidatePath('/admin/blog');
}

export async function serverGetUniqueCategories(): Promise<string[]> {
  const sb = getAdminClient();
  const { data, error } = await sb
    .from('blog_posts')
    .select('category');

  if (error) return [];
  const categories = Array.from(new Set(data.map(p => p.category))).filter((c): c is string => Boolean(c));
  return categories;
}

export async function serverUpdateCategoryName(oldName: string, newName: string): Promise<void> {
  const sb = getAdminClient();
  const { error } = await sb
    .from('blog_posts')
    .update({ category: newName })
    .eq('category', oldName);

  if (error) throw new Error(error.message);
  revalidatePath('/blog');
  revalidatePath('/admin/blog');
}

export async function serverDeleteCategoryName(name: string): Promise<void> {
  const sb = getAdminClient();
  // We don't delete the posts, we just reset their category to a default
  const { error } = await sb
    .from('blog_posts')
    .update({ category: 'Uncategorized' })
    .eq('category', name);

  if (error) throw new Error(error.message);
  revalidatePath('/blog');
  revalidatePath('/admin/blog');
}

// ── Image Upload via Server Action ────────────────────────────────────────────

export async function serverUploadImage(formData: FormData, folder: string = 'covers'): Promise<string> {
  const sb = getAdminClient();
  const file = formData.get('file') as File;
  if (!file) throw new Error('No file provided');

  const ext = file.name.split('.').pop();
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const path = `${folder}/${filename}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const { error: uploadError } = await sb.storage
    .from('blog-images')
    .upload(path, buffer, {
      contentType: file.type,
      cacheControl: '3600',
      upsert: false,
    });

  if (uploadError) throw new Error(uploadError.message);

  const { data } = sb.storage.from('blog-images').getPublicUrl(path);
  return data.publicUrl;
}



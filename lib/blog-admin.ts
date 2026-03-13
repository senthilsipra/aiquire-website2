import { supabase } from './supabase';

// ─────────────────────────────
// Types
// ─────────────────────────────

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

// ─────────────────────────────
// Read
// ─────────────────────────────

export async function adminGetAllPosts(): Promise<AdminBlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('adminGetAllPosts error:', error);
    throw new Error(error.message);
  }
  return data as AdminBlogPost[];
}

export async function adminGetPostById(id: string): Promise<AdminBlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('adminGetPostById error:', error);
    return null;
  }
  return data as AdminBlogPost;
}

// ─────────────────────────────
// Create
// ─────────────────────────────

export async function adminCreatePost(input: BlogPostInput): Promise<AdminBlogPost> {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([input])
    .select()
    .single();

  if (error) {
    console.error('adminCreatePost error:', error);
    throw new Error(error.message);
  }
  return data as AdminBlogPost;
}

// ─────────────────────────────
// Update
// ─────────────────────────────

export async function adminUpdatePost(id: string, input: Partial<BlogPostInput>): Promise<AdminBlogPost> {
  const { data, error } = await supabase
    .from('blog_posts')
    .update({ ...input, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('adminUpdatePost error:', error);
    throw new Error(error.message);
  }
  return data as AdminBlogPost;
}

// ─────────────────────────────
// Delete
// ─────────────────────────────

export async function adminDeletePost(id: string): Promise<void> {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('adminDeletePost error:', error);
    throw new Error(error.message);
  }
}

// ─────────────────────────────
// Image Upload
// ─────────────────────────────

export async function uploadBlogImage(file: File): Promise<string> {
  const ext = file.name.split('.').pop();
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const path = `covers/${filename}`;

  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(path, file, { cacheControl: '3600', upsert: false });

  if (uploadError) {
    console.error('uploadBlogImage error:', uploadError);
    throw new Error(uploadError.message);
  }

  const { data } = supabase.storage.from('blog-images').getPublicUrl(path);
  return data.publicUrl;
}

// ─────────────────────────────
// Helpers
// ─────────────────────────────

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const BLOG_CATEGORIES = [
  'AI Strategy',
  'Engineering',
  'Generative AI',
  'Industry Insights',
  'Tutorials',
  'Case Studies',
  'Announcements',
];

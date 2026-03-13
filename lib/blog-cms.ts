import { supabase } from './supabase';
import { type BlogPost } from './blog';
import { unstable_noStore as noStore } from 'next/cache';

export interface DbBlogPost {
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

export function mapDbPostToBlogPost(dbPost: DbBlogPost): BlogPost {
    return {
        slug: dbPost.slug,
        title: dbPost.title,
        description: dbPost.excerpt || dbPost.meta_description || '',
        date: dbPost.created_at,
        category: dbPost.category,
        author: dbPost.author,
        readTime: dbPost.read_time || '5 min read',
        featured: dbPost.featured,
        content: dbPost.content,
        coverImage: dbPost.cover_image,
    };
}

export async function getAllCmsPosts(): Promise<BlogPost[]> {
    noStore();
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }

    return (data as DbBlogPost[]).map(mapDbPostToBlogPost);
}

export async function getCmsPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

    if (error) {
        console.error('Error fetching blog post by slug:', error);
        return null;
    }

    return mapDbPostToBlogPost(data as DbBlogPost);
}

// Separate function for SEO needs
export async function getCmsPostMetadata(slug: string) {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('title, excerpt, meta_title, meta_description')
        .eq('slug', slug)
        .eq('published', true)
        .single();

    if (error) return null;
    return data as Pick<DbBlogPost, 'title' | 'excerpt' | 'meta_title' | 'meta_description'>;
}

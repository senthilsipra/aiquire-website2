const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const env = {};
try {
    const raw = fs.readFileSync('.env.local', 'utf-8');
    raw.split('\n').forEach(line => {
        const [k, ...v] = line.split('=');
        if (k && v) env[k.trim()] = v.join('=').trim();
    });
} catch (e) { }

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
    console.error('Missing SUPABASE_URL or SERVICE_ROLE_KEY');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey);

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

async function migrate() {
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));
    console.log(`Found ${files.length} posts to migrate.`);

    for (const filename of files) {
        const slug = filename.replace('.mdx', '');
        const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
        const { data, content } = matter(raw);

        const post = {
            slug,
            title: data.title,
            excerpt: data.description,
            content: content,
            author: data.author || 'Aiquire Team',
            category: data.category || 'General',
            read_time: data.readTime || '5 min read',
            featured: !!data.featured,
            published: true, // Auto-publish migrated posts
            meta_title: data.title,
            meta_description: data.description,
            created_at: data.date ? new Date(data.date).toISOString() : new Date().toISOString()
        };

        console.log(`Migrating: ${slug}...`);
        const { error } = await supabase
            .from('blog_posts')
            .upsert(post, { onConflict: 'slug' });

        if (error) {
            console.error(`Error migrating ${slug}:`, error.message);
        } else {
            console.log(`Successfully migrated ${slug}`);
        }
    }
}

migrate();

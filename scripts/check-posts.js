const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

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

const supabase = createClient(supabaseUrl, serviceKey);

async function checkPosts() {
    const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('slug, title, published, cover_image');
        
    if (error) {
        console.error('Error fetching posts:', error);
    } else {
        console.log("Posts from DB:");
        posts.forEach(p => console.log(`- ${p.title} (Published: ${p.published}) [Image: ${p.cover_image}]`));
    }
}

checkPosts();

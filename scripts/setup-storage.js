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

async function setupStorage() {
    console.log('Checking for blog-images bucket...');
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();
    
    if (listError) {
        console.error('Error listing buckets:', listError);
        return;
    }

    const bucketExists = buckets.find(b => b.name === 'blog-images');
    
    if (!bucketExists) {
        console.log('Bucket "blog-images" not found. Creating it...');
        const { data, error } = await supabase.storage.createBucket('blog-images', {
            public: true,
            allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
            fileSizeLimit: 5242880 // 5MB
        });

        if (error) {
            console.error('Error creating bucket:', error);
        } else {
            console.log('Successfully created "blog-images" bucket (Public).');
        }
    } else {
        console.log('Bucket "blog-images" already exists.');
    }
}

setupStorage();

const { createClient } = require('@supabase/supabase-js');

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if(!url || !key) {
  console.log('Missing env vars');
  process.exit(1);
}

const sb = createClient(url, key);

async function run() {
  const { data, error } = await sb.from('categories').select('*').limit(1);
  if (error) {
    if (error.code === '42P01') {
      console.log('NO_TABLE');
    } else {
      console.log('ERROR:', error);
    }
  } else {
    console.log('TABLE_EXISTS', data);
  }
}
run();

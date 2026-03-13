const { Client } = require('pg');

async function createTable() {
  const url = process.env.DATABASE_URL.replace('5432', '6543');
  const client = new Client({
    connectionString: url,
  });

  try {
    await client.connect();
    console.log('Connected to DB');

    // Create the categories table
    const query = `
      CREATE TABLE IF NOT EXISTS categories (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;
    
    await client.query(query);
    console.log('Categories table created or already exists');

    // Notify postgrest to reload schema cache
    await client.query('NOTIFY pgrst, \'reload schema\'');
    console.log('Reloaded PostgREST schema cache');
  } catch (err) {
    console.error('Error creating table:', err);
  } finally {
    await client.end();
  }
}

createTable();

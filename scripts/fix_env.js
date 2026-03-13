const fs = require('fs');

const envPath = '.env.local';
let envContent = fs.readFileSync(envPath, 'utf8');

envContent = envContent.replace(
  'DATABASE_URL=postgresql://postgres:Aiquire@2o26@db.mlgengtzqglimrtjqwcs.supabase.co:5432/postgres',
  'DATABASE_URL=postgresql://postgres:Aiquire%402o26@db.mlgengtzqglimrtjqwcs.supabase.co:5432/postgres'
);

fs.writeFileSync(envPath, envContent);
console.log('Fixed env connection string');

import pg from "pg";

const { Client } = pg;
const client = new Client({
  connectionString: "postgresql://postgres:Ecell%402025Polaris@db.saidjblbjceptjdmovnn.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

async function check() {
  await client.connect();
  const res = await client.query(`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
    ORDER BY table_name;
  `);

  console.log("--- ALL TABLES CURRENTLY IN SUPABASE DATABASE ---");
  for (const row of res.rows) {
    const countRes = await client.query(`SELECT count(*) FROM public."${row.table_name}"`);
    console.log(`  📊 ${row.table_name.padEnd(25)} : ${countRes.rows[0].count} rows`);
  }
  await client.end();
}

check();

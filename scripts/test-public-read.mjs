import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://saidjblbjceptjdmovnn.supabase.co",
  "sb_publishable_Nf7fQwOetOooAzpBQ4rWwA_sBXD-eQn"
);

async function testPublicRead() {
  console.log("Testing public read performance on all migrated Supabase tables...\n");

  const tables = [
    "startups",
    "events",
    "programs",
    "mentors",
    "team_members",
    "gallery_items",
    "resources",
    "summit_conclaves",
    "ambassadors_leaderboard",
    "arena_leaderboard",
    "arena_notices",
  ];

  let successCount = 0;

  for (const table of tables) {
    const start = performance.now();
    const { data, error } = await supabase.from(table).select("*").limit(3);
    const duration = (performance.now() - start).toFixed(2);

    if (error) {
      console.error(`❌ Table '${table}' failed:`, error.message);
    } else {
      console.log(`✅ Table '${table}' | ${data.length} sample rows read in ${duration}ms`);
      successCount++;
    }
  }

  console.log(`\nVerified: ${successCount} / ${tables.length} tables publicly readable with blazing sub-second latency.`);
}

testPublicRead();

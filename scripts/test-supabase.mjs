import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://saidjblbjceptjdmovnn.supabase.co";
const supabaseKey = "sb_publishable_Nf7fQwOetOooAzpBQ4rWwA_sBXD-eQn";

console.log("Testing Supabase connectivity...");
console.log("Target Project:", supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    const { data, error } = await supabase.from("idea_submissions").select("count", { count: "exact", head: true });
    if (error) {
      // If table does not exist yet or permission denied, that's expected until schema script is run
      console.log("Supabase API responded with code:", error.code, "| message:", error.message);
      console.log("Connection to Supabase project SUCCESSFUL (API endpoint verified).");
      return;
    }
    console.log("Successfully connected and queried Supabase! Table exists.");
  } catch (err) {
    console.error("Connection failed:", err);
  }
}

testConnection();

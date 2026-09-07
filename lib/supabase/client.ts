import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://saidjblbjceptjdmovnn.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_Nf7fQwOetOooAzpBQ4rWwA_sBXD-eQn";

/**
 * Client-side Supabase instance for browser components.
 * Configured with automatic token refresh and session persistence.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

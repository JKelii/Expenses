import { createClient } from "@supabase/supabase-js";
import { getEnv } from "@/utils";

const supabase = createClient(
  getEnv("VITE_SUPABASE_URL"),
  getEnv("VITE_ANON_KEY")
);

console.log("VITE2_ANON_KEY");

export default supabase;

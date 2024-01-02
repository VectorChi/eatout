import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xcroxddtjldjabwxqpgn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjcm94ZGR0amxkamFid3hxcGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyMjU1NjUsImV4cCI6MjAxOTgwMTU2NX0.vFGa6ppIyYrrk4g1-3NJxq8dnt6TZG0P-fQsnXWY8Lc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

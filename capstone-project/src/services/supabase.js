import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://perphseyivgmdllajivc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlcnBoc2V5aXZnbWRsbGFqaXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMzM1NzcsImV4cCI6MjAzODYwOTU3N30.AOaycgjS5WHHL55xV3msxRVmFu25nA5iVArB0WX-ljc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lyyrtoofnyfunnzhbgpd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5eXJ0b29mbnlmdW5uemhiZ3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0NDExNjIsImV4cCI6MjAzODAxNzE2Mn0.mdJf8yiV-az69p2crXu2CAORho4S8Vh9vyhKM7hMs_c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://thptodurfnyysatpbvmw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRocHRvZHVyZm55eXNhdHBidm13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4NjUwMjIsImV4cCI6MjAwODQ0MTAyMn0.L-xz68FhtSG0yJOcVVvAIxGGRDDJ0tffLIsBHyHETiQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

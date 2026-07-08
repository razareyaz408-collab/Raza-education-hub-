import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://kkldkdjuyfydrfvwogol.supabase.co";

const supabaseKey = "sb_publishable_Tgy7-sdCHWQpMD8qAUvc8A_o4OfjiJO";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

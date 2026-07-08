import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://kkldkdjuyfydrfvwogol.supabase.co";

const supabaseKey = "sb_publishable_MNQxLMEA-iiEzMo8lLZ0MA_EuKqTIC8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://uexbboybyakdspctavhu.supabase.co';
const supabaseKey = 'sb_publishable_n3M5SuNcekJKUsDK27Hvow_vjqAP2Zi';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
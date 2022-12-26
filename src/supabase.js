import {createClient} from "@supabase/supabase-js";

const supabaseUrl = 'https://emsqqabelbjtuiepnqek.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtc3FxYWJlbGJqdHVpZXBucWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEyODYzMjEsImV4cCI6MTk4Njg2MjMyMX0.-eu5SOK7xCfNR7hetvORaYDKZXVOtiqX-ojg-c4t0s4'

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
)
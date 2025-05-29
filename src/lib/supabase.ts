import { createClient } from '@supabase/supabase-js';

// Public client (using anon key)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate environment variables for public client
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required');
    }

    export const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Admin client (using service role key)
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    // Validate environment variable for admin client
    if (!supabaseServiceRoleKey) {
    throw new Error('Missing Supabase environment variable: SUPABASE_SERVICE_ROLE_KEY is required for admin client');
    }

    export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
});
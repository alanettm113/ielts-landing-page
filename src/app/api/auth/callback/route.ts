import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Define the configuration interface without explicit cookies type
interface SupabaseConfig {
  supabaseURL: string;
  supabaseKey: string;
  cookies: () => any; // Let TypeScript infer the type, or use `unknown` for safety
}

export async function GET(request: Request) {
  // Runtime check for environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables');
    return NextResponse.redirect(new URL('/auth/error?error=config', request.url));
  }

  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (code) {
    const supabase = createRouteHandlerClient({
      supabaseURL: supabaseUrl,
      supabaseKey: supabaseKey,
      cookies: () => cookies(),
    } as SupabaseConfig);

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error('Error exchanging code for session:', error);
      return NextResponse.redirect(new URL('/auth/error?error=auth', request.url));
    }
  }

  return NextResponse.redirect(new URL(next, request.url));
}
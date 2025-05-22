import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/auth-helpers-nextjs';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');
    const next = searchParams.get('next') ?? '/';

    if (code) {
        const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: () => ({ get: () => undefined, set: () => {}, remove: () => {} }) }
        );

        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!error) {
        return NextResponse.redirect(new URL(next, request.url));
        }
    }

    return NextResponse.redirect(new URL('/auth/error', request.url));
}
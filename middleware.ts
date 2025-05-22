import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req: Request) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient(
        { req, res },
        {
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
        supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        }
    );

    await supabase.auth.getSession();
    return res;
    }

    export const config = {
    matcher: ['/home', '/free-tests', '/courses', '/blog', '/contact'],
};
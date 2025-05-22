import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create Supabase client for middleware (without Database type)
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          res.cookies.set(name, value, options);
        },
        remove(name: string, options: any) {
          res.cookies.delete({ name, ...options });
        },
      },
    }
  );

  // Example: Check if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Example: Redirect unauthenticated users to login
  if (!user && req.nextUrl.pathname.startsWith('/test-portal')) {
    return NextResponse.redirect(new URL('/auth', req.url));
  }

  return res;
}

// Optional: Specify which routes the middleware applies to
export const config = {
  matcher: ['/test-portal/:path*', '/dashboard/:path*'],
};
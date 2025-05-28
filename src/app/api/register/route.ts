import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // Use service role key for admin access
    { auth: { autoRefreshToken: false, persistSession: false } }
    );

    const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

export async function POST(request: Request) {
    try {
        const { fullname, date_of_birth, gender, phone, email, password } = await request.json();

        // Validate required fields
        if (!fullname || !date_of_birth || !gender || !phone || !email || !password) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        // Validate phone number (9-10 digits)
        if (!/^[0-9]{9,10}$/.test(phone)) {
        return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 });
        }

        // Register user with Supabase Authentication
        const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        email_confirm: true, // Automatically confirm the email (for testing; remove in production if email confirmation is required)
        });

        if (authError || !authData.user) {
        console.error('Supabase auth error:', authError);
        return NextResponse.json({ error: `Failed to register user in auth: ${authError?.message || 'Unknown error'}` }, { status: 500 });
        }

        // Prepend +84 to phone number
        const formattedPhone = `+84${phone}`;

        // Insert user data into the register table
        const { error: insertError } = await supabase.from('register').insert([
        {
            fullname,
            date_of_birth,
            gender,
            phone: formattedPhone,
            email,
            password: password, // Store the plain password for now (we'll remove this later)
            created_at: new Date().toISOString(),
        },
        ]);

        if (insertError) {
        console.error('Supabase insert error:', insertError);
        // If insertion fails, delete the user from auth to maintain consistency
        await supabaseAdmin.auth.admin.deleteUser(authData.user.id);
        return NextResponse.json({ error: `Failed to register user: ${insertError.message}` }, { status: 500 });
        }

        return NextResponse.json({ user: { email, fullname } }, { status: 200 });
    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ error: 'An error occurred during registration' }, { status: 500 });
    }
}
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        // Log in user with Supabase Authentication
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
        });

        if (authError || !authData.user) {
        console.error('Supabase auth login error:', authError);
        if (authError?.message.includes('Invalid login credentials')) {
            const { data: userExists } = await supabase
            .from('register')
            .select('email')
            .eq('email', email)
            .single();

            if (!userExists) {
            return NextResponse.json({ error: 'User not found' }, { status: 401 });
            }
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }
        return NextResponse.json({ error: `Login failed: ${authError?.message || 'Unknown error'}` }, { status: 401 });
        }

        // Fetch user details from the register table
        const { data, error } = await supabase
        .from('register')
        .select('fullname, date_of_birth, gender, phone')
        .eq('email', email)
        .single();

        if (error || !data) {
        console.error('Supabase fetch error:', error);
        return NextResponse.json({ error: 'User not found in register table' }, { status: 401 });
        }

        // Insert login record with current timestamp and additional user details
        const { error: loginError } = await supabase.from('login').insert([
        {
            email,
            fullname: data.fullname,
            date_of_birth: data.date_of_birth,
            gender: data.gender,
            phone: data.phone,
            login_at: new Date().toISOString(),
        },
        ]);

        if (loginError) {
        console.error('Supabase login insert error:', loginError);
        return NextResponse.json({ error: `Failed to record login: ${loginError.message}` }, { status: 500 });
        }

        return NextResponse.json({ user: { email, fullname: data.fullname } }, { status: 200 });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'An error occurred during login' }, { status: 500 });
    }
    }
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Headphones, Pen, Mic, ArrowRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';

// Initialize Supabase client (consider moving this to a separate file for reuse)
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    export default function FreeTestsClient() {
    // Fix: Replace `any` with `User | null` for proper typing
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUser = async () => {
        const { data } = await supabase.auth.getUser();
        setUser(data.user);
        };
        getUser();
    }, [supabase.auth]); // Fix: Add `supabase.auth` to the dependency array

    return (
        <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="py-20 bg-amber-100 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Free IELTS Practice Tests for Every Section
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Experience the real IELTS with our mock tests and instant feedback.
            </p>
            {user ? (
                <Button asChild className="bg-amber-500 hover:bg-amber-600">
                <a href="/test-portal">Start Testing Now</a>
                </Button>
            ) : (
                <Button asChild className="bg-amber-500 hover:bg-amber-600">
                <a href="/auth">Sign In to Start Testing</a>
                </Button>
            )}
            </div>
        </section>

        {/* Test Categories Section */}
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Available Tests</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                    <Book className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Reading</h3>
                    <p className="text-gray-600">Practice with academic or general passages.</p>
                </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                    <Headphones className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Listening</h3>
                    <p className="text-gray-600">Audio-based tests with real-life scenarios.</p>
                </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                    <Pen className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Writing</h3>
                    <p className="text-gray-600">Task 1 and Task 2 prompts with sample answers.</p>
                </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                    <Mic className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Speaking</h3>
                    <p className="text-gray-600">Mock questions with tips for recording.</p>
                </CardContent>
                </Card>
            </div>
            </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-amber-500">1</span>
                <p className="text-gray-600">Sign up for free access.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-amber-500 hidden md:block" />
                <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-amber-500">2</span>
                <p className="text-gray-600">Choose a test section.</p>
                </div>
                <ArrowRight className="w-6 h-6 text-amber-500 hidden md:block" />
                <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-amber-500">3</span>
                <p className="text-gray-600">Get instant results.</p>
                </div>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Test Your Skills?</h2>
            <div className="flex justify-center space-x-4">
                {user ? (
                <Button asChild className="bg-amber-500 hover:bg-amber-600">
                    <a href="/test-portal">Take a Free Test</a>
                </Button>
                ) : (
                <Button asChild className="bg-amber-500 hover:bg-amber-600">
                    <a href="/auth">Sign In to Start</a>
                </Button>
                )}
                <Button asChild variant="outline">
                <a href="/contact">Need Help? Contact Us</a>
                </Button>
            </div>
            </div>
        </section>
        </div>
    );
}
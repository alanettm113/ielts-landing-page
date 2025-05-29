'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Headphones, Pen, Mic, ArrowRight, Search } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import Image from 'next/image'

// Initialize Supabase client (consider moving this to a separate file for reuse)
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function FreeTestsClient() {
    // Fix: Replace `any` with `User | null` for proper typing
    const [user, setUser] = useState<User | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await supabase.auth.getUser();
                setUser(data.user);
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
            }
        };
        getUser();
    }, []); // Fix: Add `supabase.auth` to the dependency array

    // Data for monthly stats
    const monthlyStats = [
        { month: 'January', tests: '5,146,172' },
        { month: 'February', tests: '2,031,243' },
        { month: 'March', tests: '959,650' },
        { month: 'April', tests: '500,136' },
        { month: 'May', tests: '340,808' },
        { month: 'June', tests: '531,518' },
        { month: 'July', tests: '226,235' },
        { month: 'August', tests: '161,169' },
        { month: 'September', tests: '149,663' },
        { month: 'October', tests: '18,464' },
    ];

    // Filter stats based on search term
    const filteredStats = monthlyStats.filter(stat =>
        stat.month.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                            <a href="/auth/login">Sign In to Start Testing</a>
                        </Button>
                    )}
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Test Type Tabs */}
                    <div className="flex justify-start space-x-4 mb-4">
                        <Button variant="ghost" className="text-gray-900 font-semibold border-b-2 border-blue-500">
                            ALL TESTS
                        </Button>
                        <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                            Academic Test
                        </Button>
                        <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                            General Training Test
                        </Button>
                    </div>

                    {/* Skill Buttons and Search */}
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <div className="flex space-x-2">
                            <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-full">
                                ALL SKILLS
                            </Button>
                            <Button variant="outline" className="rounded-full">
                                <Headphones className="w-4 h-4 mr-2" /> Listening
                            </Button>
                            <Button variant="outline" className="rounded-full">
                                <Book className="w-4 h-4 mr-2" /> Reading
                            </Button>
                            <Button variant="outline" className="rounded-full">
                                <Pen className="w-4 h-4 mr-2" /> Writing
                            </Button>
                            <Button variant="outline" className="rounded-full">
                                <Mic className="w-4 h-4 mr-2" /> Speaking
                            </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 border rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                            <select className="border rounded-full px-4 py-2 text-gray-600 focus:outline-none">
                                <option>Newest</option>
                                <option>Oldest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* IELTS Mock Test 2024 Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">IELTS Mock Test 2024</h2>
                    <Card className="flex flex-col md:flex-row items-center p-6 bg-white rounded-lg shadow-md">
                        {/* Cityscape Image */}
                        <div className="w-full md:w-1/4 mb-6 md:mb-0">
                            <Image
                                src="/images/background_1.jpg"
                                alt="IELTS Mock Test 2024"
                                width={400}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Monthly Stats */}
                        <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                            {filteredStats.length > 0 ? (
                                filteredStats.map((stat) => (
                                    <div key={stat.month} className="text-center">
                                        <h3 className="text-lg font-semibold text-gray-900">{stat.month.toUpperCase()}</h3>
                                        <p className="text-gray-600 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.5L2.5 7.5V16.5L12 21.5L21.5 16.5V7.5L12 2.5ZM12 5.5L18.5 8.5V15.5L12 18.5L5.5 15.5V8.5L12 5.5Z" />
                                            </svg>
                                            {stat.tests} tests taken
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center text-gray-600">
                                    No results found.
                                </div>
                            )}
                        </div>
                    </Card>
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
                                <a href="/auth/login">Sign In to Start</a>
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
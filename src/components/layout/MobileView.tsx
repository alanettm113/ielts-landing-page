'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { User } from '@supabase/supabase-js';

export default function MobileView() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFreeTestsOpen, setIsFreeTestsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        };
        getUser();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            authListener.subscription?.unsubscribe();
        };
    }, []);

    const signOut = async () => {
        await supabase.auth.signOut();
        router.push('/');
        setIsOpen(false);
    };

    const toggleFreeTests = () => {
        setIsFreeTestsOpen(!isFreeTestsOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Collapse the sheet after any link click
    };

    return (
        <nav
            className="bg-white sticky top-0 z-50 md:hidden"
            data-testid="mobile-nav"
        >
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="md:hidden flex items-center">
                        <Link href="/" className="text-4xl font-bold text-amber-500">
                            CARA IELTS
                        </Link>
                    </div>

                    {/* Sheet Trigger */}
                    <div className="md:hidden flex items-center">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button aria-label="Toggle menu">
                                    <Menu className="w-6 h-6 text-gray-900" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col space-y-2 mt-4">
                                    <Link
                                        href="/home"
                                        className="text-gray-900 hover:text-amber-500 px-3 py-2"
                                        onClick={handleLinkClick}
                                    >
                                        Home
                                    </Link>
                                    <div>
                                        <div className="flex items-center justify-between px-3 py-2">
                                            <Link
                                                href="/free-tests"
                                                className="text-gray-900 hover:text-amber-500"
                                                onClick={handleLinkClick}
                                            >
                                                Free Tests
                                            </Link>
                                            <button onClick={toggleFreeTests} className="focus:outline-none">
                                                {isFreeTestsOpen ? (
                                                    <ChevronUp className="w-4 h-4 text-gray-900" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4 text-gray-900" />
                                                )}
                                            </button>
                                        </div>
                                        {isFreeTestsOpen && (
                                            <div className="pl-6 space-y-1">
                                                <Link
                                                    href="/free-tests/reading"
                                                    className="block text-gray-900 hover:text-amber-500 px-3 py-2"
                                                    onClick={handleLinkClick}
                                                >
                                                    Reading
                                                </Link>
                                                <Link
                                                    href="/free-tests/listening"
                                                    className="block text-gray-900 hover:text-amber-500 px-3 py-2"
                                                    onClick={handleLinkClick}
                                                >
                                                    Listening
                                                </Link>
                                                <Link
                                                    href="/free-tests/speaking"
                                                    className="block text-gray-900 hover:text-amber-500 px-3 py-2"
                                                    onClick={handleLinkClick}
                                                >
                                                    Speaking
                                                </Link>
                                                <Link
                                                    href="/free-tests/writing"
                                                    className="block text-gray-900 hover:text-amber-500 px-3 py-2"
                                                    onClick={handleLinkClick}
                                                >
                                                    Writing
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <Link
                                        href="/courses"
                                        className="text-gray-900 hover:text-amber-500 px-3 py-2"
                                        onClick={handleLinkClick}
                                    >
                                        Courses
                                    </Link>
                                    <Link
                                        href="/blog"
                                        className="text-gray-900 hover:text-amber-500 px-3 py-2"
                                        onClick={handleLinkClick}
                                    >
                                        Blog
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="text-gray-900 hover:text-amber-500 px-3 py-2"
                                        onClick={handleLinkClick}
                                    >
                                        Contact
                                    </Link>
                                    {user ? (
                                        <button
                                            onClick={signOut}
                                            className="text-gray-900 hover:text-amber-500 px-3 py-2 text-left"
                                        >
                                            Sign Out
                                        </button>
                                    ) : (
                                        <Link
                                            href="/auth"
                                            className="text-gray-900 hover:text-amber-500 px-3 py-2"
                                            onClick={handleLinkClick}
                                        >
                                            Sign In
                                        </Link>
                                    )}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
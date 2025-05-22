'use client';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { User } from '@supabase/supabase-js';

export default function MainView() {
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

    const NavigationContent = () => (
        <>
            <Link
                href="/home"
                className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                onClick={handleLinkClick}
            >
                Trang Chủ
            </Link>
            <div>
                <div className="flex items-center justify-between px-3 py-2">
                    <Link
                        href="/free-tests"
                        className="text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                        onClick={handleLinkClick}
                    >
                        Bài Thi Thử
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
                            className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                            onClick={handleLinkClick}
                        >
                            Reading
                        </Link>
                        <Link
                            href="/free-tests/listening"
                            className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                            onClick={handleLinkClick}
                        >
                            Listening
                        </Link>
                        <Link
                            href="/free-tests/speaking"
                            className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                            onClick={handleLinkClick}
                        >
                            Speaking
                        </Link>
                        <Link
                            href="/free-tests/writing"
                            className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                            onClick={handleLinkClick}
                        >
                            Writing
                        </Link>
                    </div>
                )}
            </div>
            <Link
                href="/courses"
                className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                onClick={handleLinkClick}
            >
                Khoá Học
            </Link>
            <Link
                href="/blog"
                className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                onClick={handleLinkClick}
            >
                Blog
            </Link>
            <Link
                href="/contact"
                className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                onClick={handleLinkClick}
            >
                Liên Hệ
            </Link>
            {user ? (
                <button
                    onClick={signOut}
                    className="block text-gray-900 hover:bg-amber-500  px-3 py-2 w-full text-left rounded-md transition duration-300 ease-in-out"
                >
                    Đăng Xuất
                </button>
                ) : (
                    <button className ="rounded-full px-3 py-2 text-sm font-medium transition duration-300 ease-in-out left-0">
                    <Link
                    href="/auth"
                    className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out"
                    onClick={handleLinkClick}
                >
                    Đăng Nhập
                </Link>
                </button>
            )}
        </>
    );

    return (
        <nav className="inner bg-white rounded-full sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-4xl font-bold text-amber-500">
                            CARA IELTS
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center flex-1">
                        <NavigationMenu>
                            <NavigationMenuList className="flex space-x-6">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-gray-900 hover:bg-amber-500 px-3 py-2 text-sm font-medium rounded-md transition duration-300 ease-in-out">
                                        Bài Thi Thử
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="space-y-1">
                                            <li>
                                                <Link href="/free-tests">
                                                    <NavigationMenuLink className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out">
                                                        Overview
                                                    </NavigationMenuLink>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/free-tests/reading">
                                                    <NavigationMenuLink className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out">
                                                        Reading
                                                    </NavigationMenuLink>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/free-tests/listening">
                                                    <NavigationMenuLink className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out">
                                                        Listening
                                                    </NavigationMenuLink>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/free-tests/speaking">
                                                    <NavigationMenuLink className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out">
                                                        Speaking
                                                    </NavigationMenuLink>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/free-tests/writing">
                                                    <NavigationMenuLink className="block text-gray-900 hover:bg-amber-500 px-3 py-2 rounded-md transition duration-300 ease-in-out">
                                                        Writing
                                                    </NavigationMenuLink>
                                                </Link>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/home">
                                        <NavigationMenuLink className="text-gray-900 hover:bg-amber-500 px-3 py-2 text-sm font-medium rounded-md transition duration-300 ease-in-out">
                                            Trang Chủ
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/courses">
                                        <NavigationMenuLink className="text-gray-900 hover:bg-amber-500 px-3 py-2 text-sm font-medium rounded-md transition duration-300 ease-in-out">
                                            Khoá Học
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/blog">
                                        <NavigationMenuLink className="text-gray-900 hover:bg-amber-500 px-3 py-2 text-sm font-medium rounded-md transition duration-300 ease-in-out">
                                            Blog
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/contact">
                                        <NavigationMenuLink className="text-gray-900 hover:bg-amber-500 px-3 py-2 text-sm font-medium rounded-md transition duration-300 ease-in-out">
                                            Liên Hệ
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Desktop Sign In/Out */}
                    <div className="hidden lg:flex items-center">
                        {user ? (
                            <button
                                onClick={signOut}
                                className="text-gray-900 hover:bg-amber-500 px-3 py-2 text-sm font-medium border rounded-full transition duration-300 ease-in-out"
                            >
                                Đăng Xuất
                            </button>
                        ) : (
                            <button className =" rounded-full px-4 py-3 text-sm font-medium">
                            <Link
                                href="/auth"
                                className="text-gray-900 hover:bg-amber-300 rounded-md px-4 py-3 text-sm font-medium transition duration-300 ease-in-out"
                            >
                                Đăng Nhập
                            </Link>
                            </button>
                        )}
                    </div>

                    {/* Sheet Trigger for Mobile View */}
                    <div className="lg:hidden flex items-center">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <button aria-label="Toggle menu">
                                    <Menu className="w-6 h-6 text-gray-900" />
                                </button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col space-y-2 mt-4">
                                    <NavigationContent />
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
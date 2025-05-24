'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { User } from '@supabase/supabase-js';
import { AuthChangeEvent, Session, Subscription } from '@supabase/supabase-js';
import { NAV_LINKS } from '@/constant/constant';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function MainView() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFreeTestsOpen, setIsFreeTestsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      }
    };
    getUser();

    const { data: authListener }: { data: { subscription: Subscription } } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        setUser(session?.user ?? null);
      }
    );

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
    {NAV_LINKS.map((link) => (
      <div key={link.id}>
        {link.dropdown ? (
          <div>
            <div className="flex items-center justify-between px-3 py-2">
              <Link
                href={link.href}
                className="text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-1 py-3 transition duration-300 ease-in-out rounded-md w-full hover:scale-110"
                onClick={handleLinkClick}
              >
                {link.title}
              </Link>
              <button onClick={toggleFreeTests} className="ml-auto focus:outline-none">
                {isFreeTestsOpen ? (
                  <ChevronUp className="w-4 h-4 text-gray-900" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-900" />
                )}
              </button>
            </div>
            {isFreeTestsOpen && (
              <div className="pl-6 space-y-2">
                {link.dropdown.map((subLink) => (
                  <Link
                    key={subLink.id}
                    href={subLink.href}
                    className="block text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-3 py-3 transition duration-300 ease-in-out rounded-md hover:scale-105"
                    onClick={handleLinkClick}
                  >
                    {subLink.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            href={link.href}
            className="block text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-3 py-3 transition duration-300 ease-in-out rounded-md hover:scale-110"
            onClick={handleLinkClick}
          >
            {link.title}
          </Link>
        )}
      </div>
    ))}
    {user ? (
      <button
        onClick={signOut}
        className="block text-gray-900 hover:text-amber-500 px-3 py-4 w-full text-left transition duration-300 ease-in-out"
      >
        Đăng Xuất
      </button>
    ) : (
      <Link
        href="/auth"
        className="inline-flex justify-center px-3 py-4 "
        onClick={handleLinkClick}
      >
  <div className="relative inline-flex justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-full shadow-2xl group bg-emerald-500">
    <span
      className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"
    ></span>
    {/* Top glass gradient */}
    <span
      className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"
    ></span>
    {/* Bottom gradient */}
    <span
      className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"
    ></span>
    {/* Left gradient */}
    <span
      className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"
    ></span>
    {/* Right gradient */}
    <span
      className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"
    ></span>
    <span
      className="absolute inset-0 w-full h-full border border-white rounded-full opacity-10"
    ></span>
    <span
      className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"
    ></span>
    <span className="relative px-3 py-1">Đăng Nhập</span>
  </div>
      </Link>
    )}
  </>
);

  return (
    <nav className="bg-amber-50 rounded sticky top-0 z-50">
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
            <div className="flex space-x-6">
              {NAV_LINKS.map((link) => (
                <div key={link.id}>
                  {link.dropdown ? (
                    <div className="relative group">
                      <Link
                        href={link.href}
                        className="text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-3 py-2 text-sm font-medium rounded-md 
                        transition duration-300 ease-in-out hover:scale-150"
                      >
                        {link.title}
                      </Link>
                      <div className="absolute flex flex-col top-full left-0 mt-6 min-w-[120px] bg-white 
                      shadow-lg rounded-lg opacity-0 transform scale-95 group-hover:opacity-100 
                      group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100 
                      transition-all duration-300 ease-in-out 
                      group-hover:delay-0 group-[.group-not-hovered]:delay-200">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.id}
                            href={subLink.href}
                            className="block text-gray-900 hover:bg-amber-100 hover:text-amber-500 
                            px-4 py-2.5 text-sm font-medium rounded-lg transition duration-300 ease-in-out 
                            hover:scale-105"
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-3 py-2 text-sm font-medium rounded-md 
                      transition duration-300 ease-in-out hover:scale-150"
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Sign In/Out */}
          <div className="hidden lg:flex items-center">
            {user ? (
              <button
                onClick={signOut}
                className="text-gray-900 hover:text-amber-500 px-3 py-2 text-sm font-medium border rounded-full transition duration-300 ease-in-out"
              >
                Đăng Xuất
              </button>
            ) : (
              <Link
            href="/auth"
            className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-full shadow-2xl group bg-emerald-500"
          >
            <span
              className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"
            ></span>
            {/* Top glass gradient */}
            <span
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"
            ></span>
            {/* Bottom gradient */}
            <span
              className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"
            ></span>
            {/* Left gradient */}
            <span
              className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"
            ></span>
            {/* Right gradient */}
            <span
              className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"
            ></span>
            <span
              className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"
            ></span>
            <span
              className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"
            ></span>
            <span className="relative">Đăng Nhập</span>
          </Link>
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
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-amber-50">
                <nav className="flex flex-col space-y-2 mt-8 ">
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
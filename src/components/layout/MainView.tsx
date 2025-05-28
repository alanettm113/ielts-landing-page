'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

import { NAV_LINKS } from '@/constant/constant';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function MainView() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFreeTestsOpen, setIsFreeTestsOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; fullname: string } | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [pathname]);

  const signOut = async () => {
    try {
      // Sign out from Supabase Authentication
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Supabase sign-out error:', error);
      }
    } catch (error) {
      console.error('Error during sign-out:', error);
    } finally {
      // Clear localStorage and redirect
      localStorage.removeItem('user');
      setUser(null);
      router.push('/');
      setIsOpen(false);
    }
  };

  const toggleFreeTests = () => {
    setIsFreeTestsOpen(!isFreeTestsOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const getInitials = (fullname: string) => {
    const names = fullname.split(' ');
    const initials = names.map((name) => name.charAt(0)).join('');
    return initials.toUpperCase();
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
                  className="text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-1 py-3 transition duration-300 ease-in-out rounded-md w-full hover:scale-100"
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
                      className="block text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-2 py-3 transition duration-300 ease-in-out rounded-md hover:scale-105"
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
              className="block text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-3 py-3 transition duration-300 ease-in-out rounded-md hover:scale-105"
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
          href="/auth/login"
          className="inline-flex justify-center px-3 py-4"
          onClick={handleLinkClick}
        >
          <div className="relative inline-flex justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-full shadow-2xl group bg-emerald-500">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
            <span className="absolute inset-0 w-full h-full border border-white rounded-full opacity-10"></span>
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
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
          <div className="flex items-center">
            <Link href="/" className="text-4xl font-bold text-amber-500">
              CARA IELTS
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex space-x-2">
              {NAV_LINKS.map((link) => (
                <div key={link.id}>
                  {link.dropdown ? (
                    <div className="relative group">
                      <Link
                        href={link.href}
                        className="text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-3 py-2 text-md font-medium rounded-md transition duration-300 ease-in-out hover:scale-150"
                      >
                        {link.title}
                      </Link>
                      <div className="absolute top-full left-0 mt-6 min-w-[120px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.id}
                            href={subLink.href}
                            className="block text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-4 py-2.5 text-sm font-medium rounded-lg transition duration-300 ease-in-out hover:scale-105"
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-3 py-2 text-md font-medium rounded-md transition duration-300 ease-in-out hover:scale-150"
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            {user ? (
              <div className="relative group">
                <div className="flex items-center space-x-3 cursor-pointer">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="" alt={user.fullname} />
                    <AvatarFallback className="bg-indigo-600 text-white font-bold">
                      {getInitials(user.fullname)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-gray-900 text-sm font-medium">{user.fullname}</span>
                </div>
                <div className="absolute top-full right-0 mt-2 min-w-[120px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                  <button
                    onClick={signOut}
                    className="block text-gray-900 hover:bg-amber-100 hover:text-amber-500 px-4 py-2.5 text-sm font-medium rounded-lg transition duration-300 ease-in-out w-full text-left"
                  >
                    Đăng Xuất
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-full shadow-2xl group bg-emerald-500"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span className="relative">Đăng Nhập</span>
              </Link>
            )}
          </div>
          <div className="lg:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button aria-label="Toggle menu">
                  <Menu className="w-6 h-6 text-gray-900" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-amber-50">
                <div className="mt-8">
                  {user && (
                    <div className="flex items-center space-x-3 mb-6 px-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src="" alt={user.fullname} />
                        <AvatarFallback className="bg-indigo-600 text-white font-bold">
                          {getInitials(user.fullname)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-gray-900 text-sm font-medium">{user.fullname}</span>
                    </div>
                  )}
                  <nav className="flex flex-col space-y-2">
                    <NavigationContent />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Simulate form submission (e.g., API call to register email)
        console.log('Submitted email:', email);
        setSubmitted(true);
        setEmail('');
        setTimeout(() => setSubmitted(false), 3000); // Reset message after 3s
    };

    return (
        <footer className="bg-slate-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
                <div className="space-y-2">
                <p className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-amber-500" />
                    Email: <a href="mailto:support@caraielts.com" className="ml-1 hover:underline">support@caraielts.com</a>
                </p>
                <p className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-amber-500" />
                    Số điện thoại: <a href="tel:+842471234567" className="ml-1 hover:underline">+84 247 123 4567</a>
                </p>
                <div className="flex space-x-4 mt-4">
                    <a
                    href="https://facebook.com/caraielts"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                    >
                    <Facebook className="w-6 h-6 text-amber-500 hover:text-amber-400 transition-colors" />
                    </a>
                    <a
                    href="https://instagram.com/caraielts"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram page"
                    >
                    <Instagram className="w-6 h-6 text-amber-500 hover:text-amber-400 transition-colors" />
                    </a>
                    <a
                    href="https://youtube.com/caraielts"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our YouTube channel"
                    >
                    <Youtube className="w-6 h-6 text-amber-500 hover:text-amber-400 transition-colors" />
                    </a>
                </div>
                </div>
            </div>

            {/* Policies */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Chính sách</h3>
                <div className="space-y-2">
                <p>
                    <a href="/privacy-policy" className="hover:underline">Chính sách bảo mật</a>
                </p>
                <p>
                    <a href="/terms-of-use" className="hover:underline">Điều khoản sử dụng</a>
                </p>
                </div>
            </div>

            {/* Registration Form */}
            <div>
                <h3 className="text-lg font-semibold mb-4">Đăng ký nhận tài liệu miễn phí</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    type="email"
                    placeholder="Nhập email của bạn"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="text-gray-900"
                />
                <Button type="submit" className="bg-amber-500 hover:bg-amber-600 w-full">
                    Đăng ký
                </Button>
                {submitted && (
                    <p className="text-amber-400 text-sm">Đăng ký thành công! Vui lòng kiểm tra email.</p>
                )}
                </form>
            </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} CARAIELTS. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
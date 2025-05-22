'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission (e.g., send to Supabase or Formspree)
        alert('Form submitted: ' + JSON.stringify(formData));
    };

    return (
        <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="py-20 bg-amber-100 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Contact CARAIELTS
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Questions about tests or courses? We’re here to help.
            </p>
            </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
            <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 p-8 rounded-lg shadow-md">
                <div>
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                    Name
                </label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                </div>
                <div>
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                    Email
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                </div>
                <div>
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                    Message
                </label>
                <Textarea
                    id="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                />
                </div>
                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600">
                Send Message
                </Button>
            </form>
            </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center space-x-4">
                <Mail className="w-6 h-6 text-amber-500" />
                <p className="text-gray-600">support@caraielts.com</p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                <Phone className="w-6 h-6 text-amber-500" />
                <p className="text-gray-600">+84-916-145-112</p>
                </div>
                <div className="flex items-center justify-center space-x-4">
                <MessageCircle className="w-6 h-6 text-amber-500" />
                <a href="https://m.me/alanettm0627" className="text-amber-500 hover:text-amber-600">
                    Chat with Us on Messenger
                </a>
                </div>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Not Sure Where to Start?</h2>
            <div className="flex justify-center space-x-4">
                <Button asChild className="bg-amber-500 hover:bg-amber-600">
                <a href="/free-tests">Start a Free Test</a>
                </Button>
                <Button asChild variant="outline">
                <a href="/courses">Explore Courses</a>
                </Button>
            </div>
            </div>
        </section>
        </div>
    );
}
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Pen, Mic, Star } from 'lucide-react';

export default function Courses() {
    return (
        <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="py-20 bg-amber-100 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Expert-Led IELTS Courses to Boost Your Score
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Personalized coaching tailored to your goals.
            </p>
            <Button asChild className="bg-amber-500 hover:bg-amber-600">
                <a href="/contact">Contact Us to Enroll</a>
            </Button>
            </div>
        </section>

        {/* Course Offerings Section */}
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                    <Clock className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Intensive Course</h3>
                    <p className="text-gray-600">4-week program with weekly feedback on all sections.</p>
                </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                    <Pen className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Writing Mastery</h3>
                    <p className="text-gray-600">Focused training for Task 1 and Task 2.</p>
                </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                    <Mic className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900">Speaking Prep</h3>
                    <p className="text-gray-600">Mock interviews with native speakers.</p>
                </CardContent>
                </Card>
            </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Courses?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center space-x-4">
                <Star className="w-8 h-8 text-amber-500" />
                <p className="text-gray-600">Certified IELTS instructors.</p>
                </div>
                <div className="flex items-center space-x-4">
                <Star className="w-8 h-8 text-amber-500" />
                <p className="text-gray-600">Flexible online schedules.</p>
                </div>
                <div className="flex items-center space-x-4">
                <Star className="w-8 h-8 text-amber-500" />
                <p className="text-gray-600">Proven results: 80% of students improve by 1 band.</p>
                </div>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Take Your Prep to the Next Level?</h2>
            <Button asChild className="bg-amber-500 hover:bg-amber-600">
                <a href="/contact">Get Started with a Course</a>
            </Button>
            </div>
        </section>
        </div>
    );
}
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Blog() {
    return (
        <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="py-20 bg-amber-100 animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                IELTS Tips, Tricks, and Strategies
            </h1>
            <p className="text-xl text-gray-600 mb-8">
                Free resources to help you succeed on test day.
            </p>
            <Button asChild className="bg-amber-500 hover:bg-amber-600">
                <a href="/free-tests">Try Our Free Tests</a>
            </Button>
            </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                    <div className="w-full h-48 bg-gray-200 mb-4 rounded-lg" /> {/* Placeholder for image */}
                    <h3 className="text-lg font-semibold text-gray-900">5 Common IELTS Writing Mistakes to Avoid</h3>
                    <p className="text-gray-600 mt-2">
                    Learn the top mistakes that could lower your writing score and how to fix them.
                    </p>
                    <a href="#" className="text-amber-500 hover:text-amber-600 mt-4 inline-block">Read More</a>
                </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                    <div className="w-full h-48 bg-gray-200 mb-4 rounded-lg" />
                    <h3 className="text-lg font-semibold text-gray-900">How to Improve Your Listening Score</h3>
                    <p className="text-gray-600 mt-2">
                    Tips and strategies to ace the IELTS Listening section with confidence.
                    </p>
                    <a href="#" className="text-amber-500 hover:text-amber-600 mt-4 inline-block">Read More</a>
                </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                    <div className="w-full h-48 bg-gray-200 mb-4 rounded-lg" />
                    <h3 className="text-lg font-semibold text-gray-900">Sample Speaking Answers for Band 7+</h3>
                    <p className="text-gray-600 mt-2">
                    Practice with high-scoring speaking responses to boost your fluency.
                    </p>
                    <a href="#" className="text-amber-500 hover:text-amber-600 mt-4 inline-block">Read More</a>
                </CardContent>
                </Card>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Want Personalized Help?</h2>
            <Button asChild className="bg-amber-500 hover:bg-amber-600">
                <a href="/contact">Contact Us for Expert Coaching</a>
            </Button>
            </div>
        </section>
        </div>
    );
}
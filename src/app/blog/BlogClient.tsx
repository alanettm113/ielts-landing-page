'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image'

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

            {/* Instructors Section */}
            <section
                className="py-16 bg-gray-100 bg-cover bg-center relative "
                style={{ backgroundImage: 'url(/images/background_20.jpg)' }}
            >
                <div className="absolute inset-0 bg-gray-100 opacity-90 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2
                        className="text-3xl font-bold text-gray-900 text-center mb-12 font-poppins"
                        data-aos="fade-up"
                    >
                        Giáo Viên Của Bạn Tại Nha Trang
                    </h2>
                    <div className="flex justify-center">
                        <Card className="bg-white border border-amber-400 shadow-lg max-w-lg" data-aos="fade-up" data-aos-delay="100">
                            <CardContent className="p-8 text-center">
                                <div className="image-zoom-container">
                                    <Image
                                        src="/images/background_20.jpg"
                                        alt="NGUYỄN THỊ NGỌC NHƯ"
                                        width={96}
                                        height={96}
                                        className="w-24 h-24 rounded-full mx-auto mb-4"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 font-poppins flex items-center justify-center">
                                    NGUYỄN THỊ NGỌC NHƯ
                                    <span className="ml-2 text-amber-500 text-sm">✔ 8.0 IELTS</span>
                                </h3>
                                <p className="text-gray-600 font-light font-poppins">Đạt 8.0 IELTS, có nhiều năm kinh nghiệm giảng dạy và tự thiết kế website thi thử computer-based độc quyền, giúp học viên làm quen format thi hiện đại. Cô chuyên dạy lớp nhỏ và kèm 1-1 tại Nha Trang.</p>
                                <div className="image-zoom-container mt-4">
                                    <Image
                                        src="/images/background_20.jpg"
                                        alt="Classroom Setting"
                                        width={400}
                                        height={200}
                                        className="w-full h-40 object-cover rounded-lg"
                                    />
                                </div>
                                <Button asChild className="bg-orange-500 hover:bg-amber-400 text-white mt-4 font-poppins">
                                    <a href="/teaching-method">Khám Phá Phương Pháp Giảng Dạy</a>
                                </Button>
                                <p className="mt-2 text-amber-500 font-poppins">
                                    <a href="/test-platform" className="underline">Truy cập website thi thử</a>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
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
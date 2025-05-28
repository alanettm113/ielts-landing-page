'use client';
import AnimatedTestimonialsDemo from '@/components/animated-testimonials-demo'; // Added import
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Share2} from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    // Initialize AOS for fade-in-up animations
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-custom-conic font-poppins">
            {/* Hero Section */}
            <section
                className="pt-20 py-80 bg-cover bg-center bg-custom-amber relative"
                /*</div>style={{ backgroundImage: 'url(/images/background_1.jpg)'}}*/
            >
                <div className="absolute inset-0 opacity-70 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">
                    <div className="lg:w-4/5 text-center lg:text-left">
                        <h1
                            className="text-4xl md:text-5xl font-bold text-neutral-900 mt-10 mb-10 font-poppins"
                            data-aos="fade-right"
                        >
                            Chinh Phục IELTS tại Nha Trang
                        </h1>
                        <p
                            className="text-2xl text-neutral-900 mb-8 font-poppins font-bold"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            Khóa học IELTS cá nhân hóa, luyện thi computer-based cho học sinh, sinh viên, người đi làm.
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4" data-aos="fade-right" data-aos-delay="200">
                            <a
                                href="/register"
                                className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-amber-600 border-2 border-amber-600 rounded-full hover:text-white group hover:bg-gray-50"
                            >
                                <span className="absolute left-0 block w-full h-0 transition-all bg-amber-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                                <span className="relative">Bắt Đầu Ngay</span>
                            </a>
                        </div>
                        <div className="text-lg mt-6 text-neutral-900 flex items-center justify-center lg:justify-start" data-aos="fade-right" data-aos-delay="300">
                            <Laptop className="w-9 h-9 mr-1" />
                            <p>Giáo viên đạt 8.0 IELTS thiết kế website thi thử chuẩn computer-based.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="400">
                        <div className="image-zoom-container">
                            <Image
                                src="/images/background_1.jpg"
                                alt="IELTS Success Portrait"
                                width={400}
                                height={500}
                                className="rounded-md shadow-lg object-cover aspect-square mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="pt-15 py-30 bg-cover bg-center relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                className="text-3xl font-bold text-gray-900 text-center mb-5 font-poppins"
                data-aos="fade-up"
                >
                Tại Sao Chọn CARA IELTS Nha Trang?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Card 1 */}
                <Card
                    className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <CardContent className="flex flex-col items-start p-6">
                    <div className="mb-4">
                        <span className="text-3xl">📚</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">
                        Chuẩn bị IELTS Toàn diện
                    </h3>
                    <p className="text-gray-600 font-normal font-poppins mt-2 text-justify">
                        CARA IELTS cung cấp kế hoạch học tập và tài liệu cá nhân hóa để giúp bạn đạt điểm IELTS mục tiêu một cách hiệu quả.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center text-gray-600 font-poppins text-justify">
                        <span className="text-amber-500 mr-2">✓</span> Mô-đun Luyện tập Định hướng
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins text-justify">
                        <span className="text-amber-500 mr-2">✓</span> Hướng dẫn và Mẹo từ Chuyên gia
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins text-justify">
                        <span className="text-amber-500 mr-2">✓</span> Lịch học Linh hoạt
                        </li>
                    </ul>
                    </CardContent>
                </Card>

                {/* Card 2 */}
                <Card
                    className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <CardContent className="flex flex-col items-start p-6">
                    <div className="mb-4">
                        <span className="text-3xl">🎓</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">
                        Hướng dẫn Chất lượng Cao
                    </h3>
                    <p className="text-gray-600 font-normal font-poppins mt-2 text-justify">
                        Nhận kiến thức từ các giảng viên giàu kinh nghiệm với chiến lược đã được kiểm chứng để nâng cao điểm số IELTS ở mọi kỹ năng.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center text-gray-600 font-poppins text-justify">
                        <span className="text-amber-500 mr-2">✓</span> Bài học Tương tác
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins text-justify">
                        <span className="text-amber-500 mr-2">✓</span> Phản hồi Chi tiết
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins text-justify">
                        <span className="text-amber-500 mr-2">✓</span> Tập trung vào Điểm yếu
                        </li>
                    </ul>
                    </CardContent>
                </Card>

                {/* Card 3 */}
                <Card
                    className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <CardContent className="flex flex-col items-start p-6">
                    <div className="mb-4">
                        <span className="text-3xl">🏆</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">
                        Kết quả Đã được Chứng minh
                    </h3>
                    <p className="text-gray-600 font-normal font-poppins mt-2 text-justify">
                        Tham gia cùng hàng ngàn học viên đã đạt mục tiêu IELTS với phương pháp học tập hiệu quả và có cấu trúc của CARA.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center text-gray-600 font-poppins text-justify">
                        <span className="text-amber-500 mr-2">✓</span> Câu chuyện Thành công Thực tế
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins text-justify">
                        <span className="text-amber-500 mr-2">✓</span> Theo dõi Tiến độ
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins text-justify">
                        <span className="text-amber-500 mr-2">✓</span> Hỗ trợ Liên tục
                        </li>
                    </ul>
                    </CardContent>
                </Card>
                </div>
            </div>
            </section>

            {/* Course Previews Section */}
            <section className="pt-15 py-30 bg-cover bg-center relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                className="text-3xl font-bold text-gray-900 text-center mb-5 font-poppins"
                data-aos="fade-up"
                >
                Tổng Quan Khóa Học
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Card 1 */}
                <Card
                    className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <CardContent className="flex flex-col items-start p-6">
                    <div className="mb-4">
                        <span className="text-3xl">📘</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">
                        Khóa IELTS Cơ Bản (4.0+)
                    </h3>
                    <p className="text-2xl font-bold text-amber-600 mt-2 font-poppins">
                        1.5M VNĐ
                    </p>
                    <p className="text-gray-600 font-normal font-poppins mt-2 text-justify">
                        Khóa học nền tảng cho người mới bắt đầu, giúp học viên làm quen với IELTS, xây dựng nền tảng vững chắc để đạt band 4.0+ thông qua phương pháp học hiệu quả.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center text-gray-600 font-poppins">
                        <span className="text-amber-500 mr-2">✓</span> Lộ trình học 3 lần/tháng
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins">
                        <span className="text-amber-500 mr-2">✓</span> Hướng dẫn chi tiết từng kỹ năng
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins">
                        <span className="text-amber-500 mr-2">✓</span> Thi thử computer-based miễn phí
                        </li>
                    </ul>
                    <a
                        href="/contact"
                        className="mt-6 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-amber-600 border-2 border-amber-600 rounded-full hover:text-white group hover:bg-gray-50"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all bg-amber-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                        </span>
                    <span className="relative">Liên Hệ</span>
                    </a>
                    </CardContent>
                </Card>

                {/* Card 2 */}
                <Card
                    className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    <CardContent className="flex flex-col items-start p-6">
                    <div className="mb-4">
                        <span className="text-3xl">📚</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">
                        Khóa IELTS Nâng Cao (6.0+)
                    </h3>
                    <p className="text-2xl font-bold text-amber-600 mt-2 font-poppins">
                        2.5M VNĐ
                    </p>
                    <p className="text-gray-600 font-normal font-poppins mt-2 text-justify">
                        Khóa học tập trung cải thiện kỹ năng nâng cao, giúp học viên đạt band 6.0+ để đáp ứng mục tiêu học tập và công việc.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center text-gray-600 font-poppins">
                        <span className="text-amber-500 mr-2">✓</span> Lộ trình học 5 lần/tháng
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins">
                        <span className="text-amber-500 mr-2">✓</span> Phản hồi cá nhân hóa
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins">
                        <span className="text-amber-500 mr-2">✓</span> Tài liệu độc quyền
                        </li>
                    </ul>
                    <a
                        href="/contact"
                        className="mt-6 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-amber-600 border-2 border-amber-600 rounded-full hover:text-white group hover:bg-gray-50"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all bg-amber-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                        </span>
                    <span className="relative">Liên Hệ</span>
                    </a>
                    </CardContent>
                </Card>

                {/* Card 3 */}
                <Card
                    className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <CardContent className="flex flex-col items-start p-6">
                    <div className="mb-4">
                        <span className="text-3xl">🎓</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">
                        Khóa IELTS 1-1/1-2 Cao Cấp
                    </h3>
                    <p className="text-2xl font-bold text-amber-600 mt-2 font-poppins">
                        4.5M VNĐ
                    </p>
                    <p className="text-gray-600 font-normal font-poppins mt-2 text-justify">
                        Khóa học cá nhân hóa hoàn toàn, hỗ trợ sát sao từng học viên để đạt band điểm mong muốn mà không giới hạn.
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-center text-gray-600 font-poppins">
                        <span className="text-amber-500 mr-2">✓</span> Lịch học tùy chỉnh
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins">
                        <span className="text-amber-500 mr-2">✓</span> Hỗ trợ 1-1/1-2 chuyên sâu
                        </li>
                        <li className="flex items-center text-gray-600 font-poppins">
                        <span className="text-amber-500 mr-2">✓</span> Đánh giá tiến độ liên tục
                        </li>
                    </ul>
                    <a
                        href="/contact"
                        className="mt-6 relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-amber-600 border-2 border-amber-600 rounded-full hover:text-white group hover:bg-gray-50"
                    >
                        <span className="absolute left-0 block w-full h-0 transition-all bg-amber-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                        </span>
                    <span className="relative">Liên Hệ</span>
                    </a>
                    </CardContent>
                </Card>
                </div>
            </div>
            </section>

            {/* Testimonials Section */}
            <section className="pt-15 py-30 bg-cover bg-center relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                className="text-3xl font-bold text-gray-900 text-center mb-5 font-poppins"
                data-aos="fade-up"
                >
                Cảm Nhận Học Viên
                </h2>
                <AnimatedTestimonialsDemo />
            </div>
            </section>

            {/* Blog Tips Section */}
            <section className="pt-15 py-30 bg-cover bg-center relative bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-3xl font-bold text-gray-900 text-center mb-12 font-poppins"
                        data-aos="fade-up"
                    >
                        Mẹo Học IELTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                            <CardContent className="p-6">
                                <div className="image-zoom-container rounded-t-lg mb-4">
                                    <Image
                                        src="/images/background_20.jpg"
                                        alt="Computer-Based Tips"
                                        width={1080}
                                        height={1080}
                                        className="w-full h-40 object-cover rounded-t-lg"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-amber-500 font-poppins">5 Mẹo Đạt Band Cao Trong Thi IELTS Computer-Based</h3>
                                <p className="text-gray-600 font-poppins">Học cách làm bài hiệu quả trên máy tính với các mẹo thực tế.</p>
                                <div className="flex justify-between items-center mt-4">
                                    <Button asChild variant="link" className="text-orange-500 p-0 font-poppins">
                                        <a href="/blog/computer-based-tips">Đọc Thêm</a>
                                    </Button>
                                    <Button variant="ghost" className="text-amber-500 p-0">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
                            <CardContent className="p-6">
                                <div className="image-zoom-container rounded-t-lg mb-4">
                                    <Image
                                        src="/images/background_18.jpg"
                                        alt="Speaking Tips"
                                        width={1080}
                                        height={1080}
                                        className="w-full h-40 object-cover rounded-t-lg"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-amber-500 font-poppins">Cách Luyện IELTS Speaking Hiệu Quả Tại Nhà</h3>
                                <p className="text-gray-600 font-poppins">Cải thiện kỹ năng nói với các bài tập đơn giản tại nhà.</p>
                                <div className="flex justify-between items-center mt-4">
                                    <Button asChild variant="link" className="text-orange-500 p-0 font-poppins">
                                        <a href="/blog/speaking-tips">Đọc Thêm</a>
                                    </Button>
                                    <Button variant="ghost" className="text-amber-500 p-0">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
                            <CardContent className="p-6">
                                <div className="image-zoom-container rounded-t-lg mb-4">
                                    <Image
                                        src="/images/background_19.jpg"
                                        alt="Listening Tips"
                                        width={1080}
                                        height={1080}
                                        className="w-full h-40 object-cover rounded-t-lg"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-amber-500 font-poppins">Tránh Lỗi Thường Gặp Khi Thi Listening Trên Máy</h3>
                                <p className="text-gray-600 font-poppins">Mẹo tránh mất điểm trong phần nghe khi thi computer-based.</p>
                                <div className="flex justify-between items-center mt-4">
                                    <Button asChild variant="link" className="text-orange-500 p-0 font-poppins">
                                        <a href="/blog/listening-tips">Đọc Thêm</a>
                                    </Button>
                                    <Button variant="ghost" className="text-amber-500 p-0">
                                        <Share2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="400">
                        <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white font-poppins">
                            <a href="/blog">Khám Phá Thêm Mẹo Tại Blog</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-16 bg-blue-900 text-center bg-cover bg-center relative"
                style={{ backgroundImage: 'url(/images/background_20.jpg)' }}
            >
                <div className="absolute inset-0 bg-blue-900 opacity-80 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex justify-center mb-6" data-aos="fade-up">
                        <Image
                            src="/images/background_20.jpg"
                            alt="IELTS Certificate"
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                    </div>
                    <h2
                        className="text-3xl font-bold text-amber-400 mb-8 font-poppins"
                        data-aos="fade-up"
                    >
                        Sẵn Sàng Chinh Phục IELTS Computer-Based?
                    </h2>
                    <p
                        className="text-xl text-white mb-8 font-light font-poppins"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Tham gia khóa học tại Nha Trang cùng giáo viên 8.0 IELTS và luyện thi miễn phí trên website độc quyền.
                    </p>
                    <div className="flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="200">
                        <Button asChild className="bg-orange-500 hover:bg-amber-400 text-white text-xl px-8 py-4 shadow-lg font-poppins">
                            <a href="/register">Đăng Ký Ngay</a>
                        </Button>
                        <Button asChild variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-poppins">
                            <a href="/test-platform">Xem Bài Thi Thử Miễn Phí</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
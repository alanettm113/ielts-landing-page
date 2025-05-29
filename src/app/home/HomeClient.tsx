'use client';
import AnimatedTestimonialsDemo from '@/components/animated-testimonials-demo';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Share2 } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Custom component for blur text animation
const BlurText = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  // Ensure children is a string and normalize it to handle Unicode spaces
    const text = typeof children === 'string' ? children.normalize('NFC') : '';
    const words = text.split(/\s+/).filter(word => word.length > 0); // Split on any whitespace and filter out empty strings

    return (
        <>
        {words.map((word, index) => (
            <motion.span
            key={index}
            initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: delay + index * 0.1 }}
            className="inline-block"
            >
            {word}
            {index < words.length - 1 && <span>&nbsp;</span>} {/* Add a space after each word except the last */}
            </motion.span>
        ))}
        </>
    );
    };

    // Custom component for scroll reveal animation
    const ScrollRevealText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={className}
        >
        {children}
        </motion.div>
    );
    };

export default function Home() {
    // Initialize AOS for fade-in-up animations
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-custom-conic ">
        {/* Hero Section */}
        <section
            className="pt-20 py-80 bg-cover bg-center bg-custom-amber relative"
        >
            <div className="absolute inset-0 opacity-70 z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">
            <div className="lg:w-4/5 text-center lg:text-left">
                <h1
                className="text-4xl md:text-5xl font-bold text-neutral-900 mt-10 mb-10"
                data-aos="fade-right"
                >
                <BlurText delay={0.2}>Chinh Phục IELTS tại Nha Trang</BlurText>
                </h1>
                <p
                className="text-2xl text-neutral-900 mb-8 font-bold"
                data-aos="fade-right"
                data-aos-delay="100"
                >
                <BlurText delay={0.2}>Khóa học IELTS cá nhân hóa, luyện thi computer-based cho học sinh, sinh viên, người đi làm.</BlurText>
                </p>
                <div className="flex justify-center lg:justify-start space-x-4" data-aos="fade-right" data-aos-delay="200">
                <a
                    href="/auth/login"
                    className="relative inline-flex items-center px-10 py-1 overflow-hidden text-lg bg-emerald-500
                    font-medium text-white border-2 border-gray-200 rounded-full hover:text-white group hover:bg-gray-50 animate-pulse"
                >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-emerald-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    </span>
                    <span className="relative">Bắt Đầu Ngay</span>
                </a>
                </div>
                <div className="text-lg mt-6 text-neutral-900 flex items-center justify-center lg:justify-start" data-aos="fade-right" data-aos-delay="300">
                <Laptop className="w-7 h-7 mr-1" />
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
                className="text-3xl font-bold text-gray-900 text-center mb-10"
                data-aos="fade-up"
            >
                <ScrollRevealText>Tại Sao Chọn CARA IELTS Nha Trang?</ScrollRevealText>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Card 1 */}
                <Card
                className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                data-aos="fade-up"
                data-aos-delay="100"
                >
                <CardContent className="flex flex-col items-center p-6">
                    <div className="image-zoom-container mb-4">
                    <Image
                        src="/images/background_20.jpg"
                        alt="IELTS Basic Course"
                        width={500}
                        height={160}
                        className="w-70 h-40 object-cover rounded-lg mx-auto"
                    />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                    <ScrollRevealText>Chuẩn bị IELTS Toàn diện</ScrollRevealText>
                    </h3>
                    <p className="text-gray-600 font-normal mt-2 text-justify">
                    <ScrollRevealText>CARA IELTS cung cấp kế hoạch học tập và tài liệu cá nhân hóa để giúp bạn đạt điểm IELTS mục tiêu một cách hiệu quả.</ScrollRevealText>
                    </p>
                </CardContent>
                <ul className="space-y-2 ml-5 -mt-9">
                    <li className="flex items-center text-gray-600 text-justify">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Mô-đun Luyện tập Định hướng</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600 text-justify">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Hướng dẫn và Mẹo từ Chuyên gia</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600 text-justify">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Lịch học Linh hoạt</ScrollRevealText>
                    </li>
                </ul>
                </Card>

                {/* Card 2 */}
                <Card
                className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                data-aos="fade-up"
                data-aos-delay="150"
                >
                <CardContent className="flex flex-col items-center p-6">
                    <div className="image-zoom-container mb-4">
                    <Image
                        src="/images/background_20.jpg"
                        alt="IELTS Basic Course"
                        width={500}
                        height={160}
                        className="w-70 h-40 object-cover rounded-lg mx-auto"
                    />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                    <ScrollRevealText>Hướng dẫn Chất lượng Cao</ScrollRevealText>
                    </h3>
                    <p className="text-gray-600 font-normal mt-2 text-justify">
                    <ScrollRevealText>Nhận kiến thức từ các giảng viên giàu kinh nghiệm với chiến lược đã được kiểm chứng để nâng cao điểm số IELTS ở mọi kỹ năng.</ScrollRevealText>
                    </p>
                </CardContent>
                <ul className="space-y-2 ml-5 -mt-9">
                    <li className="flex items-center text-gray-600 text-justify">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Bài học Tương tác</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600 text-justify">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Phản hồi Chi tiết</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600 text-justify">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Tập trung vào Điểm yếu</ScrollRevealText>
                    </li>
                </ul>
                </Card>

                {/* Card 3 */}
                <Card
                className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <CardContent className="flex flex-col items-center p-6">
                    <div className="image-zoom-container mb-4">
                    <Image
                        src="/images/background_20.jpg"
                        alt="IELTS Basic Course"
                        width={500}
                        height={160}
                        className="w-70 h-40 object-cover rounded-lg mx-auto"
                    />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                    <ScrollRevealText>Kết quả Đã được Chứng minh</ScrollRevealText>
                    </h3>
                    <p className="text-gray-600 font-normal mt-2 text-justify">
                    <ScrollRevealText>Tham gia cùng hàng ngàn học viên đã đạt mục tiêu IELTS với phương pháp học tập hiệu quả và có cấu trúc của CARA.</ScrollRevealText>
                    </p>
                </CardContent>
                <ul className="space-y-2 ml-5 -mt-9">
                    <li className="flex items-center text-gray-600 text-justify">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Câu chuyện Thành công Thực tế</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600 text-justify">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Theo dõi Tiến độ</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600 text-justify">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Hỗ trợ Liên tục</ScrollRevealText>
                    </li>
                </ul>
                </Card>
            </div>
            </div>
        </section>

        {/* Course Previews Section */}
        <section className="pt-5 py-20 bg-cover bg-center relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
                className="text-3xl font-bold text-gray-900 text-center mb-10"
                data-aos="fade-up"
            >
                <ScrollRevealText>Tổng Quan Khóa Học</ScrollRevealText>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Card 1 */}
                <Card
                className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                data-aos="fade-up"
                data-aos-delay="100"
                >
                <CardContent className="flex flex-col items-center p-6">
                    <div className="image-zoom-container mb-4">
                    <Image
                        src="/images/background_20.jpg"
                        alt="IELTS Basic Course"
                        width={500}
                        height={160}
                        className="w-70 h-40 object-cover rounded-lg mx-auto"
                    />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                    <ScrollRevealText>Khóa IELTS Cơ Bản (4.0+)</ScrollRevealText>
                    </h3>
                    <p className="text-2xl font-bold text-amber-600 mt-2 text-center">
                    <ScrollRevealText>1,500,000đ/tháng</ScrollRevealText>
                    </p>
                    <a
                    href="/contact"
                    className="mt-6 relative inline-flex items-center justify-center w-full px-12 py-2 
                    overflow-hidden text-lg font-medium text-gray-600 border-2 border-gray-200 
                    rounded-full hover:text-white group hover:bg-gray-50"
                    >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-emerald-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="relative font-bold">
                        <ScrollRevealText>Liên Hệ</ScrollRevealText>
                    </span>
                    </a>
                    <p className="text-gray-600 font-normal mt-2 text-justify">
                    <ScrollRevealText>Khóa học nền tảng cho người mới bắt đầu, giúp học viên làm quen với IELTS, xây dựng nền tảng vững chắc để đạt band 4.0+ thông qua phương pháp học hiệu quả.</ScrollRevealText>
                    </p>
                </CardContent>
                <ul className="space-y-2 ml-5 -mt-9">
                    <li className="flex items-center text-gray-600">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Lộ trình học 3 lần/tháng</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Hướng dẫn chi tiết từng kỹ năng</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Thi thử computer-based miễn phí</ScrollRevealText>
                    </li>
                </ul>
                </Card>

                {/* Card 2 */}
                <Card
                className="bg-white border border-amber-400 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                data-aos="fade-up"
                data-aos-delay="150"
                >
                <CardContent className="flex flex-col items-center p-6">
                    <div className="image-zoom-container mb-4">
                    <Image
                        src="/images/background_20.jpg"
                        alt="IELTS Basic Course"
                        width={500}
                        height={160}
                        className="w-70 h-40 object-cover rounded-lg mx-auto"
                    />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                    <ScrollRevealText>Khóa IELTS Nâng Cao (6.0+)</ScrollRevealText>
                    </h3>
                    <p className="text-2xl font-bold text-amber-600 mt-2">
                    <ScrollRevealText>2,500,000đ/tháng</ScrollRevealText>
                    </p>
                    <a
                    href="/contact"
                    className="mt-6 relative inline-flex items-center justify-center w-full px-12 py-2 
                    overflow-hidden text-lg font-medium text-gray-600 border-2 border-gray-200 
                    rounded-full hover:text-white group hover:bg-gray-50"
                    >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-emerald-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="relative font-bold">
                        <ScrollRevealText>Liên Hệ</ScrollRevealText>
                    </span>
                    </a>
                    <p className="text-gray-600 font-normal mt-2 text-justify">
                    <ScrollRevealText>Khóa học tập trung cải thiện kỹ năng nâng cao, giúp học viên đạt band 6.0+ để đáp ứng mục tiêu học tập và công việc.</ScrollRevealText>
                    </p>
                </CardContent>
                <ul className="space-y-2 ml-5 -mt-9">
                    <li className="flex items-center text-gray-600">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Lộ trình học 5 lần/tháng</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Phản hồi cá nhân hóa</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Tài liệu độc quyền</ScrollRevealText>
                    </li>
                </ul>
                </Card>

                {/* Card 3 */}
                <Card
                className="bg-white border border-amber-300 rounded-lg hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors"
                data-aos="fade-up"
                data-aos-delay="200"
                >
                <CardContent className="flex flex-col items-center p-6">
                    <div className="image-zoom-container mb-4">
                    <Image
                        src="/images/background_20.jpg"
                        alt="IELTS Basic Course"
                        width={500}
                        height={160}
                        className="w-70 h-40 object-cover rounded-lg mx-auto"
                    />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                    <ScrollRevealText>Khóa IELTS 1-1/1-2 Cao Cấp</ScrollRevealText>
                    </h3>
                    <p className="text-2xl font-bold text-amber-600 mt-2 text-center">
                    <ScrollRevealText>4,500,000đ/tháng</ScrollRevealText>
                    </p>
                    <a
                    href="/contact"
                    className="mt-6 relative inline-flex items-center justify-center w-full px-12 py-2 
                    overflow-hidden text-lg font-medium text-gray-600 border-2 border-gray-200 
                    rounded-full hover:text-white group hover:bg-gray-50"
                    >
                    <span className="absolute left-0 block w-full h-0 transition-all bg-emerald-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="relative font-bold">
                        <ScrollRevealText>Liên Hệ</ScrollRevealText>
                    </span>
                    </a>
                    <p className="text-gray-600 font-normal mt-2 text-justify">
                    <ScrollRevealText>Khóa học cá nhân hóa hoàn toàn, hỗ trợ sát sao từng học viên để đạt band điểm mong muốn mà không giới hạn.</ScrollRevealText>
                    </p>
                </CardContent>
                <ul className="space-y-2 ml-5 -mt-9">
                    <li className="flex items-center text-gray-600">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Lịch học tùy chỉnh</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Hỗ trợ 1-1/1-2 chuyên sâu</ScrollRevealText>
                    </li>
                    <li className="flex items-center text-gray-600">
                    <span className="text-amber-500 mr-2">✓</span>
                    <ScrollRevealText>Đánh giá tiến độ liên tục</ScrollRevealText>
                    </li>
                </ul>
                </Card>
            </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-cover bg-center relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
                className="text-3xl font-bold text-gray-900 text-center"
                data-aos="fade-up"
            >
                <ScrollRevealText>Cảm Nhận Học Viên</ScrollRevealText>
            </h2>
            <div data-aos="zoom-out">
                <AnimatedTestimonialsDemo />
            </div>
            </div>
        </section>

        {/* Blog Tips Section */}
        <section className="pt-15 py-20 bg-cover bg-center relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
                className="text-3xl font-bold text-gray-900 text-center mb-12"
                data-aos="fade-up"
            >
                <ScrollRevealText>Mẹo Học IELTS</ScrollRevealText>
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
                    <h3 className="text-lg font-bold text-amber-500">
                    <ScrollRevealText>5 Mẹo Đạt Band Cao Trong Thi IELTS Computer-Based</ScrollRevealText>
                    </h3>
                    <p className="text-gray-600">
                    <ScrollRevealText>Học cách làm bài hiệu quả trên máy tính với các mẹo thực tế.</ScrollRevealText>
                    </p>
                    <div className="flex justify-between items-center mt-4">
                    <Button asChild variant="link" className="text-orange-500 p-0">
                        <a href="/blog/computer-based-tips">
                        <ScrollRevealText>Đọc Thêm</ScrollRevealText>
                        </a>
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
                    <h3 className="text-lg font-bold text-amber-500">
                    <ScrollRevealText>Cách Luyện IELTS Speaking Hiệu Quả Tại Nhà</ScrollRevealText>
                    </h3>
                    <p className="text-gray-600">
                    <ScrollRevealText>Cải thiện kỹ năng nói với các bài tập đơn giản tại nhà.</ScrollRevealText>
                    </p>
                    <div className="flex justify-between items-center mt-4">
                    <Button asChild variant="link" className="text-orange-500 p-0">
                        <a href="/blog/speaking-tips">
                        <ScrollRevealText>Đọc Thêm</ScrollRevealText>
                        </a>
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
                    <h3 className="text-lg font-bold text-amber-500">
                    <ScrollRevealText>Tránh Lỗi Thường Gặp Khi Thi Listening Trên Máy</ScrollRevealText>
                    </h3>
                    <p className="text-gray-600">
                    <ScrollRevealText>Mẹo tránh mất điểm trong phần nghe khi thi computer-based.</ScrollRevealText>
                    </p>
                    <div className="flex justify-between items-center mt-4">
                    <Button asChild variant="link" className="text-orange-500 p-0">
                        <a href="/blog/listening-tips">
                        <ScrollRevealText>Đọc Thêm</ScrollRevealText>
                        </a>
                    </Button>
                    <Button variant="ghost" className="text-amber-500 p-0">
                        <Share2 className="w-5 h-5" />
                    </Button>
                    </div>
                </CardContent>
                </Card>
            </div>
            <div className="text-center mt-8" data-aos="fade-up" data-aos-delay="400">
                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
                <a href="/blog">
                    <ScrollRevealText>Khám Phá Thêm Mẹo Tại Blog</ScrollRevealText>
                </a>
                </Button>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section
            className="py-16 text-center bg-cover bg-center relative"
            style={{ backgroundImage: 'url(/images/background_20.jpg)' }}
        >
            <div className="absolute inset-0 opacity-80 z-0"></div>
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
                className="text-3xl font-bold text-amber-400 mb-8"
                data-aos="fade-up"
            >
                <ScrollRevealText>Sẵn Sàng Chinh Phục IELTS Computer-Based?</ScrollRevealText>
            </h2>
            <p
                className="text-xl text-white mb-8 font-light"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <ScrollRevealText>Tham gia khóa học tại Nha Trang cùng giáo viên 8.0 IELTS và luyện thi miễn phí trên website độc quyền.</ScrollRevealText>
            </p>
            <div className="flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="200">
                <Button asChild className="bg-orange-500 hover:bg-amber-400 text-white text-xl px-8 py-4 shadow-lg">
                <a href="/register">
                    <ScrollRevealText>Đăng Ký Ngay</ScrollRevealText>
                </a>
                </Button>
                <Button asChild variant="outline" className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white">
                <a href="/test-platform">
                    <ScrollRevealText>Xem Bài Thi Thử Miễn Phí</ScrollRevealText>
                </a>
                </Button>
            </div>
            </div>
        </section>
        </div>
    );
}
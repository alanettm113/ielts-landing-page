'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Laptop, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
        <div className="min-h-screen bg-gray-50 font-poppins">
            {/* Hero Section */}
 <section
                className="pt-15 py-20 bg-cover bg-center relative"
                style={{ backgroundImage: 'url(/images/background_15.jpg)' }}
            >
                <div className="absolute inset-0 bg-amber-50 opacity-70 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1
                            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-poppins"
                            data-aos="fade-right"
                        >
                            Chinh Phục IELTS Cùng Giáo Viên 8.0 tại Nha Trang
                        </h1>
                        <p
                            className="text-2xl text-neutral-900 mb-8 font-poppins fomt-bold"
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            Khóa học IELTS cá nhân hóa, luyện thi computer-based cho học sinh, sinh viên, người đi làm. Lớp nhỏ 8-12 người hoặc kèm 1-1, với bài thi thử miễn phí trên website độc quyền.
                        </p>
                        <div className="flex justify-center lg:justify-start space-x-4" data-aos="fade-right" data-aos-delay="200">
                            <Button asChild className="bg-orange-500 hover:bg-amber-400 text-white font-poppins animate-pulse">
                                <a href="/register">Bắt Đầu Ngay Hôm Nay</a>
                            </Button>
                        </div>
                        <div className="text-lg mt-6 text-neutral-900 flex items-center justify-center lg:justify-start" data-aos="fade-right" data-aos-delay="300">
                            <Laptop className="w-9 h-9 mr-1" />
                            <p>Giáo viên đạt 8.0 IELTS thiết kế website thi thử chuẩn computer-based, giúp bạn luyện thi hiệu quả.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="400">
                        <div className="image-zoom-container">
                            <Image
                                src="/images/background_1.jpg"
                                alt="IELTS Success Portrait"
                                width={400}
                                height={500}
                                className="rounded-full shadow-lg object-cover aspect-square mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-3xl font-bold text-gray-900 text-center mb-5 font-poppins"
                        data-aos="fade-up"
                    >
                        Tại Sao Chọn [Tên Bạn] IELTS Nha Trang?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        <Card className="bg-white border border-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors" data-aos="fade-up" data-aos-delay="100">
                            <CardContent className="flex flex-col items-center p-4">
                                <div className="image-zoom-container mb-4">
                                    <Image
                                        src="/images/background_20.jpg"
                                        alt="Computer-Based Test"
                                        width={200}
                                        height={128}
                                        className="w-full h-32 object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-amber-500 font-poppins text-center">Luyện Thi Computer-Based Miễn Phí</h3>
                                <p className="text-blue-900 text-center font-normal font-poppins">Trải nghiệm thi thử định kỳ trên website độc quyền, mô phỏng chuẩn IELTS.</p>
                                <Button asChild variant="link" className="text-orange-500 mt-4 font-poppins">
                                    <a href="/test-platform">Tìm Hiểu Thêm</a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-white border border-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors" data-aos="fade-up" data-aos-delay="150">
                            <CardContent className="flex flex-col items-center p-4">
                                <div className="image-zoom-container mb-4">
                                    <Image
                                        src="/images/background_20.jpg"
                                        alt="Teacher 8.0 IELTS"
                                        width={200}
                                        height={128}
                                        className="w-full h-32 object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-amber-500 font-poppins text-center">Học Cùng Giáo Viên 8.0 IELTS</h3>
                                <p className="text-blue-900 text-center font-normal font-poppins">Hướng dẫn bởi chuyên gia đạt điểm cao, đảm bảo chất lượng.</p>
                                <Button asChild variant="link" className="text-orange-500 mt-4 font-poppins">
                                    <a href="/teacher-profile">Tìm Hiểu Thêm</a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-white border border-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors" data-aos="fade-up" data-aos-delay="200">
                            <CardContent className="flex flex-col items-center p-4">
                                <div className="image-zoom-container mb-4">
                                    <Image
                                        src="/images/background_20.jpg"
                                        alt="Small Class"
                                        width={200}
                                        height={128}
                                        className="w-full h-32 object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-amber-500 font-poppins text-center">Lớp Nhỏ, Cá Nhân Hóa</h3>
                                <p className="text-blue-900 text-center font-normal font-poppins">Chỉ 8-12 học viên/lớp, hỗ trợ sát sao từng cá nhân.</p>
                                <Button asChild variant="link" className="text-orange-500 mt-4 font-poppins">
                                    <a href="/class-details">Tìm Hiểu Thêm</a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-white border border-amber-400 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 transition-colors" data-aos="fade-up" data-aos-delay="250">
                            <CardContent className="flex flex-col items-center p-4">
                                <div className="image-zoom-container mb-4">
                                    <Image
                                        src="/images/background_20.jpg"
                                        alt="Breakthrough Results"
                                        width={200}
                                        height={128}
                                        className="w-full h-32 object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-amber-500 font-poppins text-center">Kết Quả Đột Phá</h3>
                                <p className="text-blue-900 text-center font-normal font-poppins">Đạt điểm IELTS cần thiết cho đại học, du học, hoặc công việc.</p>
                                <Button asChild variant="link" className="text-orange-500 mt-4 font-poppins">
                                    <a href="/success-stories">Tìm Hiểu Thêm</a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Course Previews Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-3xl font-bold text-gray-900 text-center mb-12 font-poppins"
                        data-aos="fade-up"
                    >
                        Tổng Quan Khóa Học
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                        <Card className="bg-white shadow-md hover:scale-110 transition-transform" data-aos="fade-up" data-aos-delay="100">
                            <CardContent className="p-8 text-center">
                                <div className="image-zoom-container mb-4">
                                    <Image
                                        src="/images/background_20.jpg"
                                        alt="IELTS Basic Course"
                                        width={300}
                                        height={160}
                                        className="w-full h-40 object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 font-poppins">Khóa IELTS Cơ Bản (4.0+)</h3>
                                <p className="text-gray-600 font-poppins">1.5M VND</p>
                                <p className="text-gray-600 mb-4 font-poppins">Dành cho người mới, tập trung kỹ năng nền, bao gồm thi thử computer-based miễn phí.</p>
                                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white font-poppins">
                                    <a href="/courses/basic">Đăng Ký</a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-white shadow-md hover:scale-110 transition-transform" data-aos="fade-up" data-aos-delay="200">
                            <CardContent className="p-8 text-center">
                                <div className="image-zoom-container mb-4">
                                    <Image
                                        src="/images/background_20.jpg"
                                        alt="IELTS Advanced Course"
                                        width={300}
                                        height={160}
                                        className="w-full h-40 object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 font-poppins">Khóa IELTS Nâng Cao (6.0+)</h3>
                                <p className="text-gray-600 font-poppins">2.5M VND</p>
                                <p className="text-gray-600 mb-4 font-poppins">Cho học viên trung cấp, hướng đến đại học/du học, với bài thi thử định kỳ.</p>
                                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white font-poppins">
                                    <a href="/courses/advanced">Đăng Ký</a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-white shadow-md hover:scale-110 transition-transform" data-aos="fade-up" data-aos-delay="300">
                            <CardContent className="p-8 text-center">
                                <div className="image-zoom-container mb-4">
                                    <Image
                                        src="/images/background_20.jpg"
                                        alt="IELTS Premium Course"
                                        width={300}
                                        height={160}
                                        className="w-full h-40 object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 font-poppins">Khóa IELTS 1-1/1-2 Cao Cấp</h3>
                                <p className="text-gray-600 font-poppins">4.5M VND</p>
                                <p className="text-gray-600 mb-4 font-poppins">Học cá nhân hóa, tối ưu điểm số, truy cập không giới hạn bài thi thử.</p>
                                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white font-poppins">
                                    <a href="/courses/premium">Đăng Ký</a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    {/* Comparison Table */}
                    <div className="mt-12 overflow-x-auto">
                        <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-200 px-6 py-3 text-left font-poppins font-bold text-sm">Khóa Học</th>
                                    <th className="border border-gray-200 px-6 py-3 text-left font-poppins font-bold text-sm">Giá</th>
                                    <th className="border border-gray-200 px-6 py-3 text-left font-poppins font-bold text-sm">Band Mục Tiêu</th>
                                    <th className="border border-gray-200 px-6 py-3 text-left font-poppins font-bold text-sm">Số Lần Thi Thử</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">Khóa IELTS Cơ Bản</td>
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">1.5M VND</td>
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">4.0+</td>
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">3 lần/tháng</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">Khóa IELTS Nâng Cao</td>
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">2.5M VND</td>
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">6.0+</td>
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">5 lần/tháng</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">Khóa IELTS 1-1/1-2 Cao Cấp</td>
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">4.5M VND</td>
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">Tùy chỉnh</td>
                                    <td className="border border-gray-200 px-6 py-3 font-poppins text-sm">Không giới hạn</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gradient-to-r from-amber-50 to-amber-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-3xl font-bold text-gray-900 text-center mb-5 font-poppins"
                        data-aos="fade-up"
                    >
                        Cảm Nhận Học Viên
                    </h2>
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={32}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 32 },
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        loop={true}
                        navigation = {{
                                prevEl:'.prev-btn',
                                nextEl:'.next-btn'
                                    }}
                        pagination={{
                                clickable: true,
                            }}
                        className="md:mt-12"
                    >
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Nguyễn Anh"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Nguyễn Anh 1, 7.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Nguyễn Anh"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Nguyễn Anh 2, 7.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Nguyễn Anh"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Nguyễn Anh 3, 7.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Nguyễn Anh"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Nguyễn Anh 4, 7.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Nguyễn Anh"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Nguyễn Anh 5, 7.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Nguyễn Anh"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Nguyễn Anh 6, 7.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Nguyễn Anh"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Nguyễn Anh 7, 7.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Nguyễn Anh"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Nguyễn Anh 8, 7.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Nguyễn Anh"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Nguyễn Anh 9, 7.0 IELTS</p>
                                </CardContent> 
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Trần Minh"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Khóa 6.0+ và thi thử định kỳ là combo hoàn hảo cho hồ sơ du học. Hãy thử ngay trên <a href='/test-platform' className='text-amber-500 underline'>website thi thử</a>!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Trần Minh, 6.5 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="border border-gray-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
                                <CardContent className="p-4 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Lê Thị Hoa"
                                            width={96}
                                            height={96}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-6 h-6 text-amber-500 fill-current hover:scale-110 transition-transform" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-light font-poppins">
                                        “Học 1-1 và luyện thi trên website giúp tôi tự tin tuyệt đối.”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Lê Thị Hoa, 8.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>

                            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-6 max-md:hidden">
                <button className='bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors h-12 w-12 prev-btn'>
                    <ChevronLeft size={30} />
                </button>
                <button className='bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors h-12 w-12 next-btn'>
                    <ChevronRight size={30} />
                </button>
            </div>
                        {/* Pagination */}
            <div className="swiper-pagination mt-15 flex justify-center space-x-2">
                <style jsx>{`
                    .swiper-pagination-bullet {
                        background: #d1d5db; /* Gray for inactive dots */
                        width: 10px;
                        height: 10px;
                        opacity: 0.7;
                        transition: all 0.3s ease;
                    }
                    .swiper-pagination-bullet-active {
                        background: #f59e0b; /* Amber for active dot */
                        opacity: 1;
                        width: 12px;
                        height: 12px;
                    }
                `}</style>
            </div>
            </section>

            {/* Instructors Section */}
            <section
                className="py-16 bg-gray-100 bg-cover bg-center relative"
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

            {/* Blog Tips Section */}
            <section className="py-16 bg-white">
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
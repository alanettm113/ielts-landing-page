'use client';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Star, Clock, ChevronLeft, ChevronRight, Laptop, Award, Users, Trophy, Book, User, Share2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image'
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
                className="py-20 bg-cover bg-center relative"
                style={{ backgroundImage: 'url(/images/background_20.jpg)' }}
            >
                <div className="absolute inset-0 bg-blue-900 opacity-70 z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center relative z-10">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1
                            className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 font-poppins"
                            data-aos="fade-right"
                        >
                            Đạt Band IELTS Cao Cùng Giáo Viên 8.0 Tại Nha Trang
                        </h1>
                        <p
                            className="text-xl text-white mb-8 font-poppins"
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
                        <div className="mt-6 text-white flex items-center justify-center lg:justify-start" data-aos="fade-right" data-aos-delay="300">
                            <Laptop className="w-5 h-5 mr-2" />
                            <p>Giáo viên đạt 8.0 IELTS, thiết kế website thi thử chuẩn computer-based.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0" data-aos="fade-left" data-aos-delay="400">
                        <div className="image-zoom-container">
                            <Image
                                src="/images/background_1.jpg"
                                alt="IELTS Success Portrait"
                                width={400}
                                height={500}
                                className="rounded-lg shadow-lg mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-3xl font-bold text-gray-900 text-center mb-12 font-poppins"
                        data-aos="fade-up"
                    >
                        Tại Sao Chọn [Tên Bạn] IELTS Nha Trang?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card className="bg-white border border-amber-400 hover:bg-amber-50 transition-colors" data-aos="fade-up" data-aos-delay="100">
                            <CardContent className="flex flex-col items-center p-6">
                                <Laptop className="w-8 h-8 text-amber-500 mb-4" />
                                <h3 className="text-lg font-bold text-amber-500 font-poppins">Luyện Thi Computer-Based Miễn Phí</h3>
                                <p className="text-blue-900 text-center font-poppins">Trải nghiệm thi thử định kỳ trên website độc quyền, mô phỏng chuẩn IELTS.</p>
                                <Button asChild variant="link" className="text-orange-500 mt-4 font-poppins">
                                    <a href="/test-platform">Tìm Hiểu Thêm</a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-white border border-amber-400 hover:bg-amber-50 transition-colors" data-aos="fade-up" data-aos-delay="200">
                            <CardContent className="flex flex-col items-center p-6">
                                <Award className="w-8 h-8 text-amber-500 mb-4" />
                                <h3 className="text-lg font-bold text-amber-500 font-poppins">Học Cùng Giáo Viên 8.0 IELTS</h3>
                                <p className="text-blue-900 text-center font-poppins">Hướng dẫn bởi chuyên gia đạt điểm cao, đảm bảo chất lượng.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white border border-amber-400 hover:bg-amber-50 transition-colors" data-aos="fade-up" data-aos-delay="300">
                            <CardContent className="flex flex-col items-center p-6">
                                <Users className="w-8 h-8 text-amber-500 mb-4" />
                                <h3 className="text-lg font-bold text-amber-500 font-poppins">Lớp Nhỏ, Cá Nhân Hóa</h3>
                                <p className="text-blue-900 text-center font-poppins">Chỉ 8-12 học viên/lớp, hỗ trợ sát sao từng cá nhân.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-white border border-amber-400 hover:bg-amber-50 transition-colors" data-aos="fade-up" data-aos-delay="400">
                            <CardContent className="flex flex-col items-center p-6">
                                <Trophy className="w-8 h-8 text-amber-500 mb-4" />
                                <h3 className="text-lg font-bold text-amber-500 font-poppins">Kết Quả Đột Phá</h3>
                                <p className="text-blue-900 text-center font-poppins">Đạt điểm IELTS cần thiết cho đại học, du học, hoặc công việc.</p>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="bg-gray-100 hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="100">
                            <CardContent className="p-6 text-center">
                                <Book className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 font-poppins">Khóa IELTS Cơ Bản (4.0+)</h3>
                                <p className="text-gray-600 font-poppins">1.5M VND</p>
                                <p className="text-gray-600 mb-4 font-poppins">Dành cho người mới, tập trung kỹ năng nền, bao gồm thi thử computer-based miễn phí.</p>
                                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white font-poppins">
                                    <a href="/courses/basic">Đăng Ký</a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-white hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="200">
                            <CardContent className="p-6 text-center">
                                <Book className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 font-poppins">Khóa IELTS Nâng Cao (6.0+)</h3>
                                <p className="text-gray-600 font-poppins">2.5M VND</p>
                                <p className="text-gray-600 mb-4 font-poppins">Cho học viên trung cấp, hướng đến đại học/du học, với bài thi thử định kỳ.</p>
                                <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white font-poppins">
                                    <a href="/courses/advanced">Đăng Ký</a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="bg-gray-100 hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="300">
                            <CardContent className="p-6 text-center">
                                <User className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 font-poppins">Khóa IELTS 1-1/1-2 Cao Cấp</h3>
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
                        <table className="min-w-full border-collapse border border-gray-200">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border border-gray-200 px-4 py-2 text-left font-poppins font-bold">Khóa Học</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left font-poppins font-bold">Giá</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left font-poppins font-bold">Band Mục Tiêu</th>
                                    <th className="border border-gray-200 px-4 py-2 text-left font-poppins font-bold">Số Lần Thi Thử</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">Khóa IELTS Cơ Bản</td>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">1.5M VND</td>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">4.0+</td>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">3 lần/tháng</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">Khóa IELTS Nâng Cao</td>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">2.5M VND</td>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">6.0+</td>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">5 lần/tháng</td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">Khóa IELTS 1-1/1-2 Cao Cấp</td>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">4.5M VND</td>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">Tùy chỉnh</td>
                                    <td className="border border-gray-200 px-4 py-2 font-poppins">Không giới hạn</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

{/* Testimonials Section */}
            <section className="py-16 bg-gradient-to-r from-gray-100 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-3xl font-bold text-gray-900 text-center mb-12 font-poppins"
                        data-aos="fade-up"
                    >
                        Cảm Nhận Học Viên
                    </h2>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={32}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 32 },
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        loop={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Card className="hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
                                <CardContent className="p-6 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_20.jpg"
                                            alt="Nguyễn Anh"
                                            width={1080}
                                            height={1080}
                                            className="w-20 h-20 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-poppins">
                                        “Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Nguyễn Anh, 7.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
                                <CardContent className="p-6 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_21.jpg"
                                            alt="Trần Minh"
                                            width={1080}
                                            height={80}
                                            className="w-20 h-20 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-poppins">
                                        “Khóa 6.0+ và thi thử định kỳ là combo hoàn hảo cho hồ sơ du học. Hãy thử ngay trên <a href='/test-platform' className='text-amber-500 underline'>website thi thử</a>!”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Trần Minh, 6.5 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className="hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
                                <CardContent className="p-6 text-center">
                                    <div className="image-zoom-container">
                                        <Image
                                            src="/images/background_22.jpg"
                                            alt="Lê Thị Hoa"
                                            width={1080}
                                            height={1080}
                                            className="w-20 h-20 rounded-full mx-auto mb-4"
                                        />
                                    </div>
                                    <div className="flex justify-center mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic font-poppins">
                                        “Học 1-1 và luyện thi trên website giúp tôi tự tin tuyệt đối.”
                                    </p>
                                    <p className="mt-4 font-bold text-blue-900 font-poppins">- Lê Thị Hoa, 8.0 IELTS</p>
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            {/* Instructors Section */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-3xl font-bold text-gray-900 text-center mb-12 font-poppins"
                        data-aos="fade-up"
                    >
                        Giáo Viên Của Bạn Tại Nha Trang
                    </h2>
                    <div className="flex justify-center">
                        <Card className="bg-white border border-amber-400 shadow-lg max-w-md" data-aos="fade-up" data-aos-delay="100">
                            <CardContent className="p-6 text-center">
                                <div className="relative image-zoom-container">
                                    <Image
                                        src="/images/background_16.jpg"
                                        alt="NGUYỄN THỊ NGỌC NHƯ"
                                        width={96}
                                        height={96}
                                        className="w-24 h-24 rounded-full mx-auto mb-4"
                                    />
                                    <Laptop className="w-6 h-6 text-amber-500 absolute bottom-4 right-1/3" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 font-poppins">NGUYỄN THỊ NGỌC NHƯ</h3>
                                <p className="text-gray-600 font-poppins">Đạt 8.0 IELTS, có nhiều năm kinh nghiệm giảng dạy và tự thiết kế website thi thử computer-based độc quyền, giúp học viên làm quen format thi hiện đại. Cô chuyên dạy lớp nhỏ và kèm 1-1 tại Nha Trang.</p>
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
                                        src="/images/background_17.jpg"
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
            <section className="py-16 bg-blue-900 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2
                        className="text-3xl font-bold text-amber-400 mb-8 font-poppins"
                        data-aos="fade-up"
                    >
                        Sẵn Sàng Chinh Phục IELTS Computer-Based?
                    </h2>
                    <p
                        className="text-xl text-white mb-8 font-poppins"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Tham gia khóa học tại Nha Trang cùng giáo viên 8.0 IELTS và luyện thi miễn phí trên website độc quyền.
                    </p>
                    <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
                        <Button asChild className="bg-orange-500 hover:bg-amber-400 text-white text-lg font-poppins">
                            <a href="/register">Đăng Ký Ngay</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
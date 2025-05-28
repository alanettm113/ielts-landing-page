import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
        quote: "Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!",
        name: "Nguyễn Anh 1",
        designation: "7.0 IELTS",
        src: "/images/background_20.jpg",
        },
        {
        quote: "Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!",
        name: "Nguyễn Anh 2",
        designation: "7.0 IELTS",
        src: "/images/background_20.jpg",
        },
        {
        quote: "Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!",
        name: "Nguyễn Anh 3",
        designation: "7.0 IELTS",
        src: "/images/background_20.jpg",
        },
        {
        quote: "Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!",
        name: "Nguyễn Anh 4",
        designation: "7.0 IELTS",
        src: "/images/background_20.jpg",
        },
        {
        quote: "Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!",
        name: "Nguyễn Anh 5",
        designation: "7.0 IELTS",
        src: "/images/background_20.jpg",
        },
        {
        quote: "Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!",
        name: "Nguyễn Anh 6",
        designation: "7.0 IELTS",
        src: "/images/background_20.jpg",
        },
        {
        quote: "Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!",
        name: "Nguyễn Anh 7",
        designation: "7.0 IELTS",
        src: "/images/background_20.jpg",
        },
        {
        quote: "Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!",
        name: "Nguyễn Anh 8",
        designation: "7.0 IELTS",
        src: "/images/background_20.jpg",
        },
        {
        quote: "Bài thi thử computer-based giúp tôi quen format, đạt điểm đúng mục tiêu!",
        name: "Nguyễn Anh 9",
        designation: "7.0 IELTS",
        src: "/images/background_20.jpg",
        },
        {
        quote: "Khóa 6.0+ và thi thử định kỳ là combo hoàn hảo cho hồ sơ du học. Hãy thử ngay trên website thi thử!",
        name: "Trần Minh",
        designation: "6.5 IELTS",
        src: "/images/background_20.jpg",
        },
        {
        quote: "Học 1-1 và luyện thi trên website giúp tôi tự tin tuyệt đối.",
        name: "Lê Thị Hoa",
        designation: "8.0 IELTS",
        src: "/images/background_20.jpg",
        },
    ];

    return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
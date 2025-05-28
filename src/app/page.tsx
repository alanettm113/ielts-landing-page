import HomeClient from './home/HomeClient';

// Export metadata for SEO
export const metadata = {
    title: 'CARAIELTS - Free IELTS Practice Tests',
    description: 'Prepare for IELTS with free online tests and expert courses.',
};

export default function Home() {
    return <HomeClient />;
}
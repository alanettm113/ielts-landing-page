import { redirect } from 'next/navigation';

// Export metadata for SEO (optional, since it redirects)
export const metadata = {
    title: 'CARAIELTS - Free IELTS Practice Tests',
    description: 'Prepare for IELTS with free online tests and expert courses.',
};

export default function HomeRedirect() {
    redirect('/');
}
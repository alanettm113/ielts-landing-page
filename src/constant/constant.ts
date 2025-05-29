export const NAV_LINKS = [
    {
        id: 'home',
        title: 'Trang Chủ',
        href: '/home',
    },
    {
        id: 'free-tests',
        title: 'Bài Thi Thử',
        href: '/free-tests',
        dropdown: [
        //{ id: 'free-tests-overview', title: 'Overview', href: '/free-tests' },
        { id: 'free-tests-reading', title: 'Reading', href: '/free-tests/reading' },
        { id: 'free-tests-listening', title: 'Listening', href: '/free-tests/listening' },
        { id: 'free-tests-speaking', title: 'Speaking', href: '/free-tests/speaking' },
        { id: 'free-tests-writing', title: 'Writing', href: '/free-tests/writing' },
        ],
    },
    {
        id: 'courses',
        title: 'Khoá Học',
        href: '/courses',
    },
    {
        id: 'blog',
        title: 'Blog',
        href: '/blog',
    },
    /*{
        id: 'contact',
        title: 'Liên Hệ',
        href: '/contact',
    },*/
];
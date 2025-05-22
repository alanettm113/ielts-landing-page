'use client';

import { useEffect, useState } from 'react';

const MessengerButton: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    // Ensure client-side rendering to avoid hydration mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className="fixed bottom-5 right-5 z-50 flex items-center space-x-2 group">
        <div className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-50 text-amber-700 text-sm px-3 py-1 rounded-lg shadow-md hidden md:block whitespace-nowrap">
            Liên hệ qua Messenger
        </div>
        <a
            href="https://m.me/alanettm0627" // Replace with your Facebook Page ID or username
            className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-vibrate"
            style={{
            background: 'radial-gradient(circle at 30% 30%, #D84097, #00C6FF)',
            }}
            aria-label="Chat with us on Messenger"
            target="_blank"
            rel="noopener noreferrer"
        >
            {/* Official Messenger Logo SVG with Gradient */}
            <svg
            className="w-6 h-6 md:w-8 md:h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* Define the radial gradient */}
            <defs>
                <radialGradient
                id="messengerGradient"
                cx="30%"
                cy="30%"
                r="70%"
                fx="30%"
                fy="30%"
                >
                <stop offset="0%" style={{ stopColor: '#D84097', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#00C6FF', stopOpacity: 1 }} />
                </radialGradient>
            </defs>
            {/* Speech bubble with tail */}
            <path
                d="M12.025 1C5.814 1 1 5.54 1 11.671c0 3.207 1.318 5.978 3.463 7.893.37.333.294.526.357 2.583a.883.883 0 0 0 1.237.78c2.347-1.034 2.377-1.116 2.775-1.008 6.8 1.872 14.17-2.48 14.17-10.248C23.001 5.54 18.236 1 12.024 1m6.62 8.212-3.238 5.126a1.657 1.657 0 0 1-2.392.44L10.44 12.85a.67.67 0 0 0-.798 0l-3.476 2.637c-.464.352-1.072-.204-.76-.695l3.239-5.126a1.657 1.657 0 0 1 2.39-.44l2.576 1.927a.665.665 0 0 0 .799 0l3.478-2.634c.463-.354 1.07.201.758.693"
                fill="url(#messengerGradient)"
            />
            {/* White lightning bolt inside */}
            <path
                d="M12.025 1C5.814 1 1 5.54 1 11.671c0 3.207 1.318 5.978 3.463 7.893.37.333.294.526.357 2.583a.883.883 0 0 0 1.237.78c2.347-1.034 2.377-1.116 2.775-1.008 6.8 1.872 14.17-2.48 14.17-10.248C23.001 5.54 18.236 1 12.024 1m6.62 8.212-3.238 5.126a1.657 1.657 0 0 1-2.392.44L10.44 12.85a.67.67 0 0 0-.798 0l-3.476 2.637c-.464.352-1.072-.204-.76-.695l3.239-5.126a1.657 1.657 0 0 1 2.39-.44l2.576 1.927a.665.665 0 0 0 .799 0l3.478-2.634c.463-.354 1.07.201.758.693"
                fill="#fff"
            />
            </svg>
        </a>

        {/* Custom CSS for Vibrate Animation */}
        <style jsx>{`
            @keyframes vibrate {
            0% { transform: translateX(0); }
            10% { transform: translateX(-2px); }
            20% { transform: translateX(2px); }
            30% { transform: translateX(-2px); }
            40% { transform: translateX(2px); }
            50% { transform: translateX(0); }
            100% { transform: translateX(0); }
            }

            .animate-vibrate {
            animation: vibrate 2s infinite;
            }
        `}</style>
        </div>
    );
};

export default MessengerButton;
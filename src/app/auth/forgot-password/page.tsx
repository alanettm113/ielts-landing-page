'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    setIsLoading(true);

    if (!email.trim()) {
      setError('Email is required');
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    try {
      // Send the password reset email
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`, // Updated path
      });

      if (resetError) {
        console.error('Supabase reset password error:', resetError);
        setError(resetError.message || 'Failed to send reset email');
        setIsLoading(false);
        return;
      }

      // Log the password reset request in the password_resets table
      const { error: logError } = await supabase.from('password_resets').insert([
        {
          email,
          requested_at: new Date().toISOString(), // 2025-05-27T13:07:00+00:00 for 08:07 PM +07
        },
      ]);

      if (logError) {
        console.error('Supabase password reset log error:', logError);
        // We don't fail the reset request if logging fails, but log the error for debugging
      }

      setMessage('Password reset email sent! Please check your inbox (and spam/junk folder).');
    } catch (err) {
      console.error('Error sending reset email:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">CARA IELTS</h2>
        <h3 className="text-xl font-semibold text-center mb-4">Forgot Password</h3>
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-500 text-sm">{message}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Sending...' : 'Send Reset Email'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Remember your password?{' '}
          <a href="/auth/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
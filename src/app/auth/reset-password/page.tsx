'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract the reset token and error parameters from the URL
  const token = searchParams.get('token');
  const errorParam = searchParams.get('error');
  const errorCode = searchParams.get('error_code');
  const errorDescription = searchParams.get('error_description');

  useEffect(() => {
  const verifyToken = async () => {
    if (errorParam || errorCode || errorDescription) {
      const decodedError = errorDescription
        ? decodeURIComponent(errorDescription)
        : 'An error occurred with the reset link.';
      setError(`${decodedError} Redirecting to request a new link...`);
      setTimeout(() => {
        router.push('/auth/forgot-password');
      }, 3000);
      return;
    }

    if (!token) {
      setError('No reset token found. Redirecting to forgot password page...');
      setTimeout(() => {
        router.push('/auth/forgot-password');
      }, 3000);
      return;
    }

    // Skip verifyOtp and proceed to form
    setIsTokenValid(true);
    setIsLoading(false);
  };

  verifyToken();
}, [token, router, errorParam, errorCode, errorDescription]);

const handleResetPassword = async (e: React.FormEvent) => {
  e.preventDefault();
  setMessage(null);
  setError(null);

  if (!newPassword.trim() || !confirmPassword.trim()) {
    setError('Both password fields are required');
    return;
  }

  if (newPassword !== confirmPassword) {
    setError('Passwords do not match');
    return;
  }

  if (newPassword.length < 8 || !/[A-Za-z]/.test(newPassword) || !/\d/.test(newPassword)) {
    setError('Password must be at least 8 characters long and include letters and numbers');
    return;
  }

  try {
    setIsLoading(true);
    // Use the token directly to update the password
    const { data, error } = await supabase.auth.api.updateUser(token, { password: newPassword });

    if (error) {
      console.error('Supabase update password error:', error);
      setError(error.message || 'Failed to reset password');
      return;
    }

    setMessage('Password reset successfully! Redirecting to login...');
    setTimeout(() => {
      router.push('/login');
    }, 2000);
  } catch (err) {
    console.error('Error resetting password:', err);
    setError('An error occurred. Please try again later.');
  } finally {
    setIsLoading(false);
  }
};

  if (isLoading && !error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">CARA IELTS</h2>
          <p className="text-center text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">CARA IELTS</h2>
        {isTokenValid ? (
          <>
            <h3 className="text-xl font-semibold text-center mb-4">Reset Password</h3>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your new password"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Confirm your new password"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {message && <p className="text-green-500 text-sm">{message}</p>}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <p className="text-red-500 text-sm">{error}</p>
            <p className="mt-4 text-sm text-gray-600">
              <a href="/auth/forgot-password" className="text-indigo-600 hover:underline">
                Request a new password reset email
              </a>
            </p>
          </div>
        )}
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
'use client';
import React, { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async () => {
    // Basic email validation
    if (!email) {
      setMessage('Please enter your email address');
      setStatus('error');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    try {
      setStatus('loading');
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      setStatus('success');
      setMessage(
        data.message || 'Thank you for subscribing to our newsletter!'
      );
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Failed to subscribe. Please try again later.'
      );
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="flex flex-col md:flex-row md:mb-24 mb-12">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold mb-2">
            Weekly Newsletter
          </h2>
          <p className="text-gray-300 mb-4">
            Stay updated with our latest news and insights
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full md:w-1/2 gap-2">
          <input
            type="email"
            placeholder="Enter Your Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 w-full py-2 sm:py-0 rounded text-gray-800"
          />
          <button
            onClick={handleSubscribe}
            disabled={status === 'loading'}
            className={`w-full sm:w-auto ${
              status === 'loading'
                ? 'bg-gray-400'
                : 'bg-orange-400 hover:bg-orange-600'
            } px-6 py-2 sm:py-0 rounded whitespace-nowrap transition-colors`}
          >
            {status === 'loading' ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
          </button>
        </div>
      </div>
      {message && (
        <div
          className={`text-center mt-2 ${
            status === 'success' ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}

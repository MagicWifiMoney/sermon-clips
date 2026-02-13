'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'sermon-clips-email-popup-dismissed';
const DISMISS_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

export default function EmailCapturePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if popup was recently dismissed
    const dismissedAt = localStorage.getItem(STORAGE_KEY);
    if (dismissedAt) {
      const timeSinceDismissed = Date.now() - parseInt(dismissedAt, 10);
      if (timeSinceDismissed < DISMISS_DURATION) {
        return; // Don't show popup
      }
    }

    // Show popup after delay or on scroll
    const showPopup = () => setIsVisible(true);
    
    // Show after 7 seconds
    const timer = setTimeout(showPopup, 7000);

    // Or show on scroll past 30% of page
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 30) {
        showPopup();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Check your email! Your first 3 clips are waiting 🎉');
        setEmail('');
        
        // Auto-dismiss after 3 seconds on success
        setTimeout(() => {
          handleDismiss();
        }, 3000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#2D2D2D]/90 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative bg-[#F5F1EB] border-2 border-[#2D2D2D] rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slideUp">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-[#2D2D2D] mb-2">
            Get Your First 3 Clips Free
          </h3>
          <p className="text-[#5c5c5c] text-sm">
            See what AI can do with your sermon — no credit card required
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="pastor@church.com"
              required
              disabled={status === 'loading' || status === 'success'}
              className="w-full px-4 py-3 bg-white border-2 border-[#2D2D2D]/20 rounded-lg text-[#2D2D2D] placeholder:text-[#5c5c5c] focus:outline-none focus:ring-2 focus:ring-[#E8725A] focus:border-transparent transition-all disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="w-full bg-[#E8725A] hover:bg-[#d4654f] text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#E8725A]/30"
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent! ✓' : 'Get Free Clips'}
          </button>

          {message && (
            <p className={`text-sm text-center font-medium ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              {message}
            </p>
          )}
        </form>

        {/* Trust indicators */}
        <div className="mt-6 pt-6 border-t border-[#2D2D2D]/10">
          <p className="text-xs text-[#5c5c5c] text-center">
            ✓ No spam, ever &nbsp;•&nbsp; ✓ Cancel anytime &nbsp;•&nbsp; ✓ Used by 100+ churches
          </p>
        </div>
      </div>
    </div>
  );
}

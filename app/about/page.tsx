import type { Metadata } from 'next';

// 1. Static SEO Metadata
// Because of the template we set in layout.tsx, this will automatically become "About Us | Wealth & Wisdom"
export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Wealth & Wisdom and our mission to help you achieve financial independence.',
};

// 2. The Page Component
export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      
      {/* Header */}
      <header className="mb-12 border-b border-gray-200 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-finance-green leading-tight mb-6">
          About Wealth & Wisdom
        </h1>
        <p className="text-lg text-gray-600">
          Demystifying personal finance so you can live a richer life.
        </p>
      </header>

      {/* Content Body */}
      <div className="prose prose-lg prose-p:text-gray-600 prose-headings:font-serif prose-headings:text-finance-green mx-auto">
        <h2>Our Mission</h2>
        <p>
          At Wealth & Wisdom, we believe that financial literacy shouldn&apos;t be locked behind confusing jargon or expensive advisors. Our mission is simple: to provide actionable, honest, and accessible financial education to everyone.
        </p>
        
        <h2>Why We Started</h2>
        <p>
          Navigating the world of money can feel overwhelming. From budgeting basics to complex investment strategies, the internet is full of noise. We built this platform to cut through that noise and deliver clear, step-by-step guidance to help you pay off debt, build wealth, and design the life you truly want.
        </p>

        <h2>Our Philosophy</h2>
        <ul>
          <li><strong>Simplicity:</strong> We break down complex financial concepts into easy-to-understand, bite-sized guides.</li>
          <li><strong>Transparency:</strong> No hidden agendas, no get-rich-quick schemes. Just time-tested, honest advice.</li>
          <li><strong>Actionability:</strong> Every article is designed to give you concrete, practical steps you can take today.</li>
        </ul>

        <h2>Join the Journey</h2>
        <p>
          Whether you are trying to escape living paycheck to paycheck, saving for your first home, or optimizing your retirement portfolio, you are in the right place. Thank you for letting us be a part of your financial journey. Let&apos;s build wealth, together.
        </p>
      </div>
      
    </div>
  );
}
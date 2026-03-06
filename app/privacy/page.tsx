import type { Metadata } from 'next';

// 1. Static SEO Metadata
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Wealth & Wisdom collects, uses, and protects your personal information.',
};

// 2. The Page Component
export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      
      {/* Header */}
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-finance-green leading-tight mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 text-center uppercase tracking-wider font-medium">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </header>

      {/* Content Body (Using Tailwind Typography for automatic, beautiful formatting) */}
      <div className="prose prose-lg prose-p:text-gray-600 prose-headings:font-serif prose-headings:text-finance-green prose-a:text-blue-600 hover:prose-a:text-blue-500 mx-auto">
        
        <p>
          At Wealth & Wisdom, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <ul>
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name and email address, that you voluntarily give to us when you subscribe to a newsletter or contact us.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, and your access times.</li>
        </ul>

        <h2>2. Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Deliver targeted advertising, newsletters, and other information regarding our website to you.</li>
          <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
        </ul>

        <h2>3. Use of Cookies</h2>
        <p>
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology.
        </p>

        <h2>4. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@wealthandwisdom.com">privacy@wealthandwisdom.com</a>.
        </p>

      </div>
    </div>
  );
}
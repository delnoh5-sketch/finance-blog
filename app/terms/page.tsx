import type { Metadata } from 'next';

// 1. Static SEO Metadata
export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the Terms of Service and legal disclaimers for using Wealth & Wisdom.',
};

// 2. The Page Component
export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      
      {/* Header */}
      <header className="mb-12 border-b border-gray-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-finance-green leading-tight mb-4 text-center">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 text-center uppercase tracking-wider font-medium">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
      </header>

      {/* Content Body */}
      <div className="prose prose-lg prose-p:text-gray-600 prose-headings:font-serif prose-headings:text-finance-green prose-a:text-blue-600 hover:prose-a:text-blue-500 mx-auto">
        
        <p>
          Welcome to Wealth & Wisdom. By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>

        <h2>1. Financial Disclaimer (Crucial)</h2>
        <p>
          <strong>No Financial Advice:</strong> The information provided on Wealth & Wisdom is for educational and informational purposes only. It does not constitute financial, investment, legal, or tax advice. 
        </p>
        <p>
          You should consult with a licensed professional before making any financial decisions. We are not responsible for any financial losses or damages you may incur as a result of using this website. All investments carry risk, and past performance is not indicative of future results.
        </p>

        <h2>2. Use License</h2>
        <p>
          Permission is granted to temporarily download one copy of the materials (information or software) on Wealth & Wisdom&apos;s website for personal, non-commercial transitory viewing only. You may not:
        </p>
        <ul>
          <li>Modify or copy the materials.</li>
          <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial).</li>
          <li>Remove any copyright or other proprietary notations from the materials.</li>
        </ul>

        <h2>3. Accuracy of Materials</h2>
        <p>
          The materials appearing on Wealth & Wisdom&apos;s website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2>4. Links</h2>
        <p>
          Wealth & Wisdom has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Wealth & Wisdom of the site. Use of any such linked website is at the user&apos;s own risk.
        </p>

        <h2>5. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at: <a href="mailto:legal@wealthandwisdom.com">legal@wealthandwisdom.com</a>.
        </p>

      </div>
    </div>
  );
}
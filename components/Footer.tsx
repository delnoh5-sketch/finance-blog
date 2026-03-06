import Link from 'next/link';

export default function Footer() {
  // This automatically updates the copyright year so you never have to change it manually.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-serif font-bold text-[var(--color-finance-green)] mb-4 inline-block">
              Wealth & Wisdom
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed pr-4">
              Actionable, jargon-free personal finance advice to help you build wealth, eliminate debt, and achieve financial independence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-[var(--color-finance-green)] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-[var(--color-finance-green)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-1">
            <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-[var(--color-finance-green)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-[var(--color-finance-green)] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} Wealth & Wisdom. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-400 max-w-xl text-right">
            Disclaimer: The information provided on this website does not, and is not intended to, constitute financial advice. All information, content, and materials available on this site are for general informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
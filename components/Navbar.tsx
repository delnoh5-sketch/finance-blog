import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="text-2xl font-serif font-bold text-finance-green tracking-tight hover:opacity-90 transition-opacity"
        >
          Wealth & Wisdom
        </Link>
        
        {/* Main Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
          <Link href="/" className="hover:text-finance-green transition-colors">Home</Link>
          <Link href="/about" className="hover:text-finance-green transition-colors">About</Link>
          <Link href="/contact" className="hover:text-finance-green transition-colors">Contact</Link>
        </div>

        {/* Admin Login / Secondary Action */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/studio" 
            className="text-xs font-medium text-gray-400 hover:text-blue-600 transition-colors"
          >
            Admin Login
          </Link>
        </div>

      </nav>
    </header>
  );
}
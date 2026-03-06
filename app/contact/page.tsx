import type { Metadata } from 'next';

// 1. Static SEO Metadata
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Have a question about personal finance or want to partner with us? Get in touch with the Wealth & Wisdom team.',
};

// 2. The Page Component
export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      
      {/* Header */}
      <header className="mb-12 border-b border-gray-200 pb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-finance-green leading-tight mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you have a question about a recent article, want to share your debt-free journey, or are interested in a partnership, we would love to hear from you.
        </p>
      </header>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl border border-gray-100 shadow-sm">
        
        {/* Left Side: Contact Info */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-finance-green mb-6">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form, and we will do our best to get back to you within 48 hours. Alternatively, you can reach us directly via email.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Email</h3>
              <a href="mailto:hello@wealthandwisdom.com" className="text-blue-600 hover:text-blue-500 transition-colors">
                hello@wealthandwisdom.com
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Social Media</h3>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-500 hover:text-finance-green transition-colors">Twitter (X)</a>
                <a href="#" className="text-gray-500 hover:text-finance-green transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-500 hover:text-finance-green transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form UI */}
        <div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-finance-green focus:border-transparent outline-none transition-all text-gray-800"
                placeholder="Jane Doe"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-finance-green focus:border-transparent outline-none transition-all text-gray-800"
                placeholder="jane@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-finance-green focus:border-transparent outline-none transition-all text-gray-800 resize-none"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-finance-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
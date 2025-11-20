import { Icon } from '@iconify/react';

const footerLinks = {
  Product: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Security', href: '#' },
    { name: 'Roadmap', href: '#' },
    { name: 'Changelog', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  Resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Status', href: '#' },
  ],
  Legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Licenses', href: '#' },
  ],
};

const socialLinks = [
  { icon: 'solar:logo-twitter-bold-duotone', href: '#', label: 'Twitter' },
  { icon: 'solar:logo-github-bold-duotone', href: '#', label: 'GitHub' },
  { icon: 'solar:logo-linkedin-bold-duotone', href: '#', label: 'LinkedIn' },
  { icon: 'solar:letter-bold-duotone', href: '#', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand column - spans 2 columns */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg" />
              <span className="text-xl text-white">Infinitely</span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs mb-6">
              The productivity app that transforms how you work. Simple, elegant, and incredibly powerful.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-300"
                >
                  <Icon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-12 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 max-w-md">
              <h3 className="text-white mb-2">Stay up to date</h3>
              <p className="text-sm text-gray-400 mb-4">
                Get the latest updates, articles, and resources delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2">
                  Subscribe
                  <Icon icon="solar:arrow-right-bold-duotone" className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Icon icon="logos:apple-app-store" className="w-32 h-10" />
              <Icon icon="logos:google-play-icon" className="w-10 h-10" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Infinitely. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

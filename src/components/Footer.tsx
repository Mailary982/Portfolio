import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mailary-meti-b62911261',
      label: 'LinkedIn',
      color: 'hover:text-blue-500',
    },
    {
      icon: Github,
      href: 'https://github.com/Mailary982',
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      icon: Mail,
      href: 'mailto:mailarymeti@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold mb-4 hover:text-blue-400 transition-colors"
            >
              MAILARALINGAPPA
            </button>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Motivated Data Scientist with hands-on experience in data analytics, machine learning, and AI deployment. I create solutions that drive real business impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 text-gray-400 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:mailarymeti@gmail.com"
                  className="hover:text-white transition-colors block"
                >
                  mailarymeti@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Phone:</span>
                <a 
                  href="tel:+919880143972" 
                  className="hover:text-white transition-colors block"
                >
                  +91 9880143972
                </a>
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Location:</span><br />
                Bangalore, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Mailaralingappa. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;

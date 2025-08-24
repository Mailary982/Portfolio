import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mailarymeti@gmail.com',
      href: 'mailto:mailarymeti@gmail.com',
      color: 'text-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9880143972',
      href: 'tel:+919880143972',
      color: 'text-teal-600',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
      color: 'text-orange-600',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mailary-meti-b62911261',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: Github,
      href: 'https://github.com/Mailary982',
      label: 'GitHub',
      color: 'hover:text-gray-900',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just chatting about technology.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello,
                I'd love to hear from you. I respond to emails quickly.
              </p>
            </div>
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div
                    className={`p-3 ${info.color} bg-gray-50 rounded-lg mr-4 group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-medium">{info.label}</div>
                    <div className="text-gray-900 font-semibold">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-full shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-gray-600 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube, Facebook, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get environment variables
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase configuration not found. Please connect to Supabase first.');
      }

      const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
      
      if (error instanceof Error) {
        if (error.message.includes('Supabase configuration')) {
          setStatusMessage('Please connect to Supabase first by clicking the "Connect to Supabase" button in the top right.');
        } else if (error.message.includes('Email service not configured')) {
          setStatusMessage('Email service is not configured. Please add your RESEND_API_KEY to Supabase environment variables.');
        } else {
          setStatusMessage(`Error: ${error.message}`);
        }
      } else {
        setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Instagram size={24} />, name: 'Instagram', href: '#', color: 'hover:text-pink-400' },
    { icon: <Youtube size={24} />, name: 'YouTube', href: '#', color: 'hover:text-red-400' },
    { icon: <Twitter size={24} />, name: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: <Facebook size={24} />, name: 'Facebook', href: '#', color: 'hover:text-blue-600' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-silver-300 to-white bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to book us for your venue or event? Want to request a song? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="bg-silver-600 p-3 rounded-full">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white font-semibold">silversouls.ca@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-gray-600 p-3 rounded-full">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-slate-600 p-3 rounded-full">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400">Based in</p>
                  <p className="text-white font-semibold">Your City, State</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors p-3 bg-white/5 rounded-full hover:bg-white/10`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            {submitStatus !== 'idle' && (
              <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                submitStatus === 'success' 
                  ? 'bg-green-900/20 border border-green-500/30 text-green-300' 
                  : 'bg-red-900/20 border border-red-500/30 text-red-300'
              }`}>
                {submitStatus === 'success' ? (
                  <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                )}
                <p className="text-sm leading-relaxed">{statusMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-silver-400 focus:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-silver-400 focus:bg-white/10 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-silver-400 focus:bg-white/10 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell us about your event, venue, or song request!"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-silver-600 to-gray-600 hover:from-silver-700 hover:to-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900/30 to-silver-900/30 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get notified about our upcoming shows and new video releases</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-silver-400"
              />
              <button className="bg-silver-600 hover:bg-silver-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
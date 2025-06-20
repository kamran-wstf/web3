import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MessageSquare, Calendar, Bot } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Start Your <span className="text-secondary">Journey</span></h2>
          <p className="section-subtitle">
            Begin your Web3 journey with Wasserstoff today. Simple, secure, and ready for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card h-full">
              <h3 className="text-2xl font-bold mb-6">Get Started</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background rounded-lg border border-primary/30 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background rounded-lg border border-primary/30 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                    Project/Company
                  </label>
                  <input
                    type="text"
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background rounded-lg border border-primary/30 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-background rounded-lg border border-primary/30 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="card bg-gradient-to-r from-secondary/10 to-accent/10">
              <div className="flex items-start">
                <Bot size={32} className="text-secondary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Start with Telegram</h3>
                  <p className="text-gray-300 mb-4">
                    Begin your Web3 journey instantly through our Telegram bot. Simple, secure, and ready to use.
                  </p>
                  <button className="btn-secondary">
                    Open Telegram Bot
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start">
                <Calendar size={24} className="text-secondary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Schedule a Demo</h3>
                  <p className="text-gray-300 mb-4">
                    Get a personalized walkthrough of our security architecture and features.
                  </p>
                  <button className="btn-secondary">
                    Book Demo
                  </button>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start">
                <MessageSquare size={24} className="text-secondary mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Developer Support</h3>
                  <p className="text-gray-300 mb-4">
                    Get technical assistance for integrating Wasserstoff into your dApp.
                  </p>
                  <button className="btn-secondary">
                    Join Developer Chat
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default ContactSection;
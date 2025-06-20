import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Book, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Components', href: '#components' },
    { title: 'Benefits', href: '#benefits' },
    { title: 'Integration', href: '#integration' },
    { title: 'Security', href: '#security' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a 
                  href={link.href}
                  className="text-gray-300 hover:text-secondary transition-colors duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center space-x-4">
            <a 
              href="#" 
              className="text-gray-300 hover:text-secondary transition-colors duration-300"
              title="Documentation"
            >
              <Book size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-secondary transition-colors duration-300"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <button className="btn-primary">Schedule Demo</button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-background-light border-t border-primary/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-secondary transition-colors duration-300 block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-primary/30">
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center py-2"
                  >
                    <Book size={18} className="mr-2" /> Documentation
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-secondary transition-colors duration-300 flex items-center py-2"
                  >
                    <Github size={18} className="mr-2" /> GitHub
                  </a>
                </li>
                <li className="pt-2">
                  <button className="btn-primary w-full">Schedule Demo</button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
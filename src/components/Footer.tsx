import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-2 ">
            <img src="https://thewasserstoff.com/images/logo-black.png" alt="Wasserstoff Logo" className="h-6 w-auto bg-white rounded-full" />
            <span className="text-gray-400">Powered by <span className="font-semibold text-white">Wasserstoff Pvt Ltd</span></span>
          </div>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
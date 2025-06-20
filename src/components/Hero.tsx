import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Shield, Code2 } from 'lucide-react';
import HeroGraphic from './HeroGraphic';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-secondary">Wasserstoff</span> Web3{' '}
              <span className="text-accent">Weavers</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Start your Web3 journey with a simple Telegram message. Experience unparalleled security and simplicity through our revolutionary three-layer protection.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="#contact" className="btn-primary">
                Start with Telegram <MessageSquare size={18} className="ml-2" />
              </a>
              <a href="#components" className="btn-secondary">
                Explore Features <Shield size={18} className="ml-1" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center"
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-dark/20 to-transparent opacity-70"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
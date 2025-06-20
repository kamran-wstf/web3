import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Shield, Key, ChevronRight } from 'lucide-react';

const IntegrationProcess: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <MessageSquare size={32} className="text-secondary" />,
      title: "Start with Telegram",
      description: "Begin your Web3 journey with a simple message to our Telegram bot. No technical knowledge required.",
      duration: "2 minutes"
    },
    {
      icon: <Shield size={32} className="text-secondary" />,
      title: "Secure Authentication",
      description: "Experience our three-layer security with ICP keyless auth, Marlin TEE, and master derivable key system.",
      duration: "30 seconds"
    },
    {
      icon: <Key size={32} className="text-secondary" />,
      title: "Ready to Use",
      description: "Start using Web3 applications securely with your protected wallet and identity.",
      duration: "Instant"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="integration" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Simple <span className="text-secondary">Integration</span></h2>
          <p className="section-subtitle">
            Start your Web3 journey in minutes with our seamless onboarding process.
          </p>
        </motion.div>

        <motion.div
          className="relative mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline connector - Desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-secondary/30 via-accent/50 to-secondary/30 rounded-full"></div>
          
          {/* Timeline steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                {/* Connector lines - Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-28 left-14 w-1 h-16 bg-gradient-to-b from-secondary/50 to-accent/50"></div>
                )}
                
                {/* Step number */}
                <div className="flex flex-col items-center mb-8">
                  <motion.div
                    className="w-28 h-28 rounded-full bg-background-light border-2 border-secondary flex items-center justify-center mb-2 relative z-10"
                    initial={{ scale: 0.8 }}
                    animate={inView ? { scale: 1 } : { scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="absolute inset-1 rounded-full bg-secondary/10 animate-pulse"></div>
                    {step.icon}
                    <div className="absolute -right-3 -bottom-3 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-gray-300 text-sm font-medium py-1 px-4 rounded-full bg-background-light border border-primary/30"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  >
                    {step.duration}
                  </motion.div>
                </div>
                
                {/* Step content */}
                <div className="card h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                  
                  {/* Direction arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex justify-end mt-6">
                      <motion.div
                        initial={{ x: -5, opacity: 0.5 }}
                        animate={inView ? { 
                          x: 0, 
                          opacity: 1,
                          transition: { 
                            repeat: Infinity, 
                            repeatType: "reverse", 
                            duration: 1 
                          } 
                        } : {}}
                      >
                        <ChevronRight size={24} className="text-accent" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="relative z-20 mt-48 text-center p-8 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-white">Ready to start your Web3 journey?</h3>
          <p className="text-gray-200 mb-8">Experience the simplest and most secure way to enter Web3.</p>
          <a href="#contact" className="btn-primary inline-flex items-center px-6 py-3 rounded-full font-semibold shadow-md hover:bg-primary/90 transition">
            Start with Telegram <MessageSquare size={20} className="ml-2" />
          </a>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default IntegrationProcess;
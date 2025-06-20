import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, MessageSquare, Code2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefitsData = [
    {
      icon: <Shield size={32} className="text-secondary" />,
      title: "Unparalleled Security",
      description: "Three-layer security architecture combining ICP's keyless authentication, Marlin's TEE, and our innovative master derivable key system.",
      metrics: {
        value: "100%",
        label: "of assets protected by hardware-level security"
      }
    },
    {
      icon: <MessageSquare size={32} className="text-secondary" />,
      title: "Simplified Onboarding",
      description: "Start your Web3 journey with a simple Telegram message. No seed phrases, no complex wallet setup, just intuitive interaction.",
      metrics: {
        value: "30s",
        label: "average time to first Web3 interaction"
      }
    },
    {
      icon: <Code2 size={32} className="text-secondary" />,
      title: "Developer Empowerment",
      description: "Comprehensive SDK with pre-audited smart contracts, security patterns, and intuitive APIs for building secure dApps.",
      metrics: {
        value: "80%",
        label: "reduction in security-related development time"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="benefits" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose <span className="text-secondary">Wasserstoff</span></h2>
          <p className="section-subtitle">
            Experience the future of Web3 with unparalleled security, simplicity, and developer tools.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {benefitsData.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="card group flex flex-col h-full"
              variants={itemVariants}
            >
              <div className="mb-6">
                <div className="p-4 bg-background rounded-lg inline-block mb-2">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-primary/30">
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl font-bold text-secondary mb-1">
                    {benefit.metrics.value}
                  </span>
                  <span className="text-gray-300 text-sm">
                    {benefit.metrics.label}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 h-24 bg-background-light rounded-lg overflow-hidden">
                {index === 0 && (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                      <motion.div 
                        className="absolute inset-0 bg-secondary/10 rounded-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      />
                      <motion.div 
                        className="absolute inset-2 bg-secondary/20 rounded-lg"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                      <motion.div 
                        className="absolute inset-4 bg-secondary/30 rounded-lg"
                        initial={{ scale: 0.4, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      />
                    </div>
                  </div>
                )}
                
                {index === 1 && (
                  <div className="w-full h-full p-4 flex justify-center items-center">
                    <div className="relative">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <MessageSquare size={24} className="text-accent" />
                      </motion.div>
                      <motion.div
                        className="absolute -right-4 -bottom-4 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <Shield size={16} className="text-secondary" />
                      </motion.div>
                    </div>
                  </div>
                )}
                
                {index === 2 && (
                  <div className="w-full h-full p-3 flex flex-col justify-center">
                    <div className="flex space-x-1">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-primary/50 rounded-sm"
                          initial={{ height: 0 }}
                          animate={inView ? { 
                            height: `${Math.random() * 40 + 10}px`,
                            backgroundColor: i % 3 === 0 ? 'rgba(123, 82, 171, 0.5)' : 'rgba(26, 43, 78, 0.5)'
                          } : { height: 0 }}
                          transition={{ duration: 0.4, delay: 0.05 * i }}
                          style={{ transformOrigin: 'bottom' }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Benefits;
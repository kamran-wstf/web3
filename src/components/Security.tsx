import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Key, Eye, Server, FileCheck } from 'lucide-react';

const Security: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const securityFeatures = [
    {
      icon: <Shield size={32} className="text-secondary" />,
      title: "Three-Layer Protection",
      description: "Comprehensive security through ICP Keyless Auth, Marlin TEE, and Master Derivable Key system."
    },
    {
      icon: <Lock size={32} className="text-secondary" />,
      title: "Hardware-Level Security",
      description: "Secure computation in Trusted Execution Environment (TEE) for maximum protection."
    },
    {
      icon: <Key size={32} className="text-secondary" />,
      title: "Non-Revealed Master Key",
      description: "Root of trust remains protected while enabling secure key derivation for all operations."
    },
    {
      icon: <Eye size={32} className="text-secondary" />,
      title: "Real-time Monitoring",
      description: "Continuous security monitoring with automated threat detection and response."
    },
    {
      icon: <Server size={24} className="text-accent" />,
      title: "Infrastructure Audits",
      description: "Regular security assessments by leading blockchain security firms"
    },
    {
      icon: <FileCheck size={24} className="text-accent" />,
      title: "Smart Contract Verification",
      description: "Thorough testing and formal verification of all smart contracts"
    }
  ];

  return (
    <section id="security" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container-custom pt-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Uncompromising <span className="text-secondary">Security</span></h2>
          <p className="section-subtitle">
            Built with a revolutionary three-layer security architecture to protect your digital assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="card group hover:bg-gradient-to-br hover:from-background-light hover:to-background"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-background/50 rounded-lg group-hover:bg-secondary/10 transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="p-8 mt-8 card bg-gradient-to-r from-background via-background-light to-background"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="border-t border-primary/30 text-center">
            <h3 className="text-2xl font-bold mb-6">Security Certifications</h3>
            <div className="flex justify-center gap-12">
              <div className="p-6  rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition">
                <img src="/iso logo.png" alt="ISO 27001" className="w-16 h-16 object-contain mb-3" />
                <div className="text-base font-semibold text-gray-200">ISO 27001</div>
              </div>
              <div className="p-6  rounded-xl flex flex-col items-center shadow-md hover:shadow-lg transition">
                <img src="/soc logo.png" alt="SOC 2 Type II" className="w-16 h-16 object-contain mb-3" />
                <div className="text-base font-semibold text-gray-200">SOC 2 Type II</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Security;
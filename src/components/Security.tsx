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
    }
  ];

  const auditFeatures = [
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
      <div className="container-custom">
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
          className="mt-16 p-8 card bg-gradient-to-r from-background via-background-light to-background"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-background-light rounded-lg flex items-center justify-center mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-primary/30 text-center">
            <h3 className="text-2xl font-bold mb-4">Security Certifications</h3>
            <div className="flex justify-center gap-8">
              <div className="p-4 bg-background-light rounded-lg">
                <Shield size={32} className="text-secondary mx-auto mb-2" />
                <div className="text-sm text-gray-300">ISO 27001</div>
              </div>
              <div className="p-4 bg-background-light rounded-lg">
                <Lock size={32} className="text-accent mx-auto mb-2" />
                <div className="text-sm text-gray-300">SOC 2 Type II</div>
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
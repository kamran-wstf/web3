import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, XCircle } from 'lucide-react';

const CompetitiveAdvantage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const competitors = [
    { name: "W3 Setup", isUs: true },
    { name: "Moralis", isUs: false },
    { name: "Alchemy", isUs: false },
    { name: "Individual Solutions", isUs: false }
  ];

  const features = [
    { 
      name: "Complete Ecosystem Solution", 
      description: "Pre-integrated components that work together seamlessly",
      support: [true, false, false, false]
    },
    { 
      name: "Non-custodial Security", 
      description: "Zero custodial risk with threshold cryptography",
      support: [true, false, false, true]
    },
    { 
      name: "Cross-chain Bridge", 
      description: "Built-in bridge solution for immediate liquidity",
      support: [true, false, false, false]
    },
    { 
      name: "DEX & Financial Tools", 
      description: "Trading and liquidity solutions pre-configured",
      support: [true, false, false, true]
    },
    { 
      name: "White-label Customization", 
      description: "Fully brandable components for your chain",
      support: [true, false, false, true]
    },
    { 
      name: "Developer Documentation", 
      description: "Comprehensive guides and API reference",
      support: [true, true, true, false]
    }
  ];

  return (
    <section className="py-16 md:py-24 relative" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Competitive <span className="text-secondary">Advantage</span></h2>
          <p className="section-subtitle">
            See how W3 Setup compares to other blockchain infrastructure providers.
          </p>
        </motion.div>

        <motion.div 
          className="overflow-x-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <table className="w-full min-w-[768px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left border-b border-primary/30"></th>
                {competitors.map((competitor, index) => (
                  <th 
                    key={index} 
                    className={`p-4 text-center border-b border-primary/30 ${
                      competitor.isUs ? 'text-secondary font-bold' : 'text-white'
                    }`}
                  >
                    {competitor.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, rowIndex) => (
                <motion.tr 
                  key={rowIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.1 + rowIndex * 0.1 }}
                  className={rowIndex % 2 === 0 ? 'bg-background-light/30' : ''}
                >
                  <td className="p-4 border-b border-primary/20">
                    <div>
                      <p className="font-medium text-white">{feature.name}</p>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </td>
                  {feature.support.map((supported, colIndex) => (
                    <td 
                      key={colIndex} 
                      className={`p-4 text-center border-b border-primary/20 ${
                        colIndex === 0 && supported ? 'text-secondary' : ''
                      }`}
                    >
                      {supported ? (
                        <CheckCircle size={24} className={colIndex === 0 ? "text-secondary mx-auto" : "text-green-500 mx-auto"} />
                      ) : (
                        <XCircle size={24} className="text-red-500/50 mx-auto" />
                      )}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div 
          className="mt-12 p-6 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-3">Why Choose W3 Setup?</h3>
          <p className="text-gray-300">
            Unlike API providers that offer just components, W3 Setup delivers a complete, integrated ecosystem. 
            Our non-custodial architecture ensures security without compromising on functionality or speed of deployment.
          </p>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default CompetitiveAdvantage;
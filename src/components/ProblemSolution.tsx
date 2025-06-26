import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquare,
  Shield, 
  Code2,
  Zap,
  Lock,
  Key,
  Brain
} from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  const challenges = [
    {
      icon: <MessageSquare size={32} className="text-secondary" />,
      title: 'Complex Web3 Entry',
      description: 'Traditional Web3 onboarding requires technical knowledge and risky key management.',
      solution: 'Start with familiar Telegram interface',
    },
    {
      icon: <Shield size={32} className="text-secondary" />,
      title: 'Security Concerns',
      description: 'Users face risks from key theft, smart contract exploits, and sophisticated scams.',
      solution: 'Three-layer security architecture',
    },
    {
      icon: <Brain size={32} className="text-secondary" />,
      title: 'Technical Barriers',
      description: 'Complex interfaces and technical jargon create barriers to adoption.',
      solution: 'Natural language interaction',
    }
  ];

  const features = [
    {
      icon: <MessageSquare size={32} className="text-accent" />,
      title: 'Telegram Integration',
      description: 'Start your Web3 journey through a familiar messaging interface.'
    },
    {
      icon: <Shield size={32} className="text-accent" />,
      title: 'Three-Layer Security',
      description: 'Comprehensive protection through ICP, Marlin TEE, and master key system.'
    },
    {
      icon: <Brain size={32} className="text-accent" />,
      title: 'AI-Powered Interaction',
      description: 'Natural language processing for intuitive blockchain interaction.'
    }
  ];

  return (
    <section 
      id="problem-solution" 
      className="py-16 md:py-24 relative pt-20"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Simplifying <span className="text-secondary">Web3</span></h2>
          <p className="section-subtitle">
            Making blockchain technology accessible through intuitive design and uncompromising security.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {challenges.map((item, index) => (
            <motion.div 
              key={index}
              className="card group relative overflow-hidden"
              variants={itemVariants}
            >
              <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex flex-col h-full z-10 relative">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{item.description}</p>
                
                <div className="mt-auto pt-4 border-t border-primary/30">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Zap size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Our Solution:</h4>
                      <p className="text-accent">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card bg-gradient-to-br from-background-light to-background"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center p-6 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-2">Experience Web3 <span className="text-secondary">without complexity</span></h3>
          <p className="text-gray-300">Join thousands of users who trust our platform for their Web3 journey</p>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-64 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default ProblemSolution;
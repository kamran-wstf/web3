import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquare,
  Shield,
  Code2,
  ChevronRight,
  ChevronLeft,
  Key,
  Lock,
  Bot,
  Wallet,
  BarChart3,
  Vote,
  Users2,
  ArrowRightLeft,
  Brain,
  Search,
  Zap
} from 'lucide-react';

const ComponentShowcase: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedComponent, setExpandedComponent] = useState<string | null>(null);

  const categories = [
    {
      id: 'onboarding',
      title: 'Effortless Entry',
      icon: <MessageSquare size={24} />,
      description: 'Start your Web3 journey within the familiar environment of Telegram',
      components: [
        {
          id: 'telegram-bot',
          title: 'Telegram Integration',
          description: 'Begin your Web3 journey with a simple message',
          features: [
            'No technical knowledge required',
            'Familiar messaging interface',
            'Guided onboarding process',
            'Instant account setup'
          ]
        },
        {
          id: 'guided-onramp',
          title: 'Guided On-Ramping',
          description: 'Streamlined process to connect with the Web3 ecosystem',
          features: [
            'Step-by-step guidance',
            'Asset acquisition support',
            'Educational resources',
            'Progress tracking'
          ]
        },
        {
          id: 'portfolio-management',
          title: 'Portfolio Dashboard',
          description: 'Unified view of all your digital assets',
          features: [
            'Multi-chain asset tracking',
            'NFT portfolio display',
            'Transaction history',
            'Performance analytics'
          ]
        }
      ]
    },
    {
      id: 'intelligent-interaction',
      title: 'Smart Features',
      icon: <Brain size={24} />,
      description: 'AI-powered tools for intuitive Web3 interaction',
      components: [
        {
          id: 'nlp-commands',
          title: 'Natural Language Processing',
          description: 'Execute transactions using plain language',
          features: [
            'Conversational commands',
            'Intent recognition',
            'Smart contract interaction',
            'Transaction preview'
          ]
        },
        {
          id: 'chain-query',
          title: 'Chain Querying',
          description: 'Ask questions about blockchain data naturally',
          features: [
            'Plain language queries',
            'Real-time data access',
            'Cross-chain analytics',
            'Custom data views'
          ]
        },
        {
          id: 'worker-automation',
          title: 'One-Click Workers',
          description: 'Automated task execution with security controls',
          features: [
            'Automated bidding',
            'Task scheduling',
            'Risk controls',
            'Activity monitoring'
          ]
        }
      ]
    },
    {
      id: 'advanced-tools',
      title: 'Advanced Features',
      icon: <Zap size={24} />,
      description: 'Sophisticated tools for power users',
      components: [
        {
          id: 'security-analysis',
          title: 'Security Analysis',
          description: 'Comprehensive token and airdrop security checks',
          features: [
            'Smart contract auditing',
            'Risk assessment',
            'Scam detection',
            'Community sentiment analysis'
          ]
        },
        {
          id: 'transaction-simulation',
          title: 'Transaction Preview',
          description: 'Simulate transactions before execution',
          features: [
            'Outcome preview',
            'Gas optimization',
            'Risk flagging',
            'Impact analysis'
          ]
        },
        {
          id: 'address-management',
          title: 'Address Labeling',
          description: 'Human-readable labels for blockchain addresses',
          features: [
            'Custom naming',
            'Address organization',
            'Contact management',
            'Transaction annotations'
          ]
        }
      ]
    }
  ];

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % categories.length);
    setExpandedComponent(null);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
    setExpandedComponent(null);
  };

  const toggleComponent = (componentId: string) => {
    if (expandedComponent === componentId) {
      setExpandedComponent(null);
    } else {
      setExpandedComponent(componentId);
    }
  };

  return (
    <section 
      id="components" 
      className="py-16 md:py-24 relative"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Your Web3 <span className="text-secondary">Journey</span></h2>
          <p className="section-subtitle">
            From beginner to power user, our platform grows with you at every step
          </p>
        </motion.div>

        <div className="relative">
          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-2 md:gap-4 justify-start md:justify-center">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(index);
                  setExpandedComponent(null);
                }}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeCategory === index
                    ? 'bg-secondary text-white'
                    : 'bg-background-light text-gray-300 hover:bg-primary/30'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                <span>{category.title}</span>
              </button>
            ))}
          </div>

          {/* Category Description */}
          <motion.p
            className="text-center text-gray-300 mb-8 max-w-3xl mx-auto"
            key={`desc-${activeCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {categories[activeCategory].description}
          </motion.p>

          {/* Component Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`category-${activeCategory}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {categories[activeCategory].components.map((component) => (
                <motion.div
                  key={component.id}
                  className={`card cursor-pointer transition-all duration-500 ${
                    expandedComponent === component.id ? 'md:col-span-2 row-span-2' : ''
                  }`}
                  onClick={() => toggleComponent(component.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <div className="flex items-start">
                    {component.id.includes('nlp') ? (
                      <Brain size={24} className="text-secondary mr-3 mt-1" />
                    ) : component.id.includes('security') ? (
                      <Shield size={24} className="text-secondary mr-3 mt-1" />
                    ) : component.id.includes('transaction') ? (
                      <Search size={24} className="text-secondary mr-3 mt-1" />
                    ) : component.id.includes('telegram') ? (
                      <MessageSquare size={24} className="text-secondary mr-3 mt-1" />
                    ) : component.id.includes('portfolio') ? (
                      <BarChart3 size={24} className="text-secondary mr-3 mt-1" />
                    ) : (
                      <Zap size={24} className="text-secondary mr-3 mt-1" />
                    )}
                    <div>
                      <h3 className="text-xl font-bold">{component.title}</h3>
                      <p className="text-gray-300 mt-1">{component.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedComponent === component.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-primary/30"
                      >
                        <h4 className="text-lg font-medium mb-3 text-secondary">Key Features:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {component.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 hidden lg:block">
            <button
              onClick={prevCategory}
              className="bg-background-light p-3 rounded-full text-white hover:bg-primary transition-colors duration-300"
              aria-label="Previous category"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:block">
            <button
              onClick={nextCategory}
              className="bg-background-light p-3 rounded-full text-white hover:bg-primary transition-colors duration-300"
              aria-label="Next category"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              onClick={prevCategory}
              className="bg-background-light p-3 rounded-full text-white hover:bg-primary transition-colors duration-300"
              aria-label="Previous category"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextCategory}
              className="bg-background-light p-3 rounded-full text-white hover:bg-primary transition-colors duration-300"
              aria-label="Next category"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default ComponentShowcase;
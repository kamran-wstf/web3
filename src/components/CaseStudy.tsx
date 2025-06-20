import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Code } from 'lucide-react';

const CaseStudy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const metrics = [
    {
      icon: <TrendingUp size={32} className="text-secondary" />,
      label: "TVL Growth",
      value: "$25M+",
      subtext: "Total Value Locked"
    },
    {
      icon: <Users size={32} className="text-secondary" />,
      label: "User Growth",
      value: "50k+",
      subtext: "Monthly Active Users"
    },
    {
      icon: <Code size={32} className="text-secondary" />,
      label: "Developer Activity",
      value: "200+",
      subtext: "Weekly Commits"
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
          <h2 className="section-title">Success <span className="text-secondary">Story</span></h2>
          <p className="section-subtitle">
            See how leading blockchain networks accelerate growth with W3 Setup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">ChainX Network</h3>
              <p className="text-gray-300">
                ChainX deployed W3 Setup's complete ecosystem toolkit to accelerate their network's growth. 
                Within 3 months, they achieved significant milestones in liquidity, user adoption, and 
                developer engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-background rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-center mb-3">{metric.icon}</div>
                  <div className="text-3xl font-bold text-secondary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.subtext}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card">
              <blockquote className="text-lg text-gray-300 italic mb-6">
                "W3 Setup transformed our blockchain ecosystem. The rapid deployment and 
                comprehensive tooling allowed us to focus on our core protocol while providing 
                our users with a seamless experience from day one."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4">
                  <Users size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="font-bold">Sarah Chen</div>
                  <div className="text-gray-400">CTO, ChainX Network</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default CaseStudy;
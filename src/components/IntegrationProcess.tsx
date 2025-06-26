import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Shield, Key } from 'lucide-react';

const IntegrationProcess: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: <MessageSquare size={28} className="text-secondary" />,
      title: "Start with Telegram",
      description:
        "Begin your Web3 journey with a simple message to our Telegram bot. No technical knowledge required.",
      duration: "2 minutes",
    },
    {
      icon: <Shield size={28} className="text-secondary" />,
      title: "Secure Authentication",
      description:
        "Experience our three-layer security with ICP keyless auth, Marlin TEE, and master derivable key system.",
      duration: "30 seconds",
    },
    {
      icon: <Key size={28} className="text-secondary" />,
      title: "Ready to Use",
      description:
        "Start using Web3 applications securely with your protected wallet and identity.",
      duration: "Instant",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="integration"
      className="py-20 relative bg-background"
      ref={ref}
    >
      <div className="container-custom pt-24">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="section-title">
            Simple <span className="text-secondary">Integration</span>
          </h2>
          <p className="section-subtitle">
            Start your Web3 journey in minutes with our seamless onboarding
            process.
          </p>
        </motion.div>

        {/* Timeline Line - Desktop */}
        <div className="relative mt-20">
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-1 bg-gradient-to-r from-secondary/30 via-accent/50 to-secondary/30 rounded-full z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-background-light border border-secondary/20 backdrop-blur-sm p-6 rounded-xl shadow-md flex flex-col justify-between min-h-[200px] w-full transition hover:shadow-lg"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                {/* Top: Icon + Title */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    {step.icon}
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>

                {/* Bottom: Duration */}
                <div className="mt-auto">
                  <span className="inline-block bg-secondary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full border border-secondary/30">
                    {step.duration}
                  </span>
                </div>

                {/* Vertical connector - Mobile */}
                {index < steps.length - 1 && (
                  <div className="block md:hidden absolute bottom-[-28px] left-1/2 transform -translate-x-1/2 w-1 h-10 bg-gradient-to-b from-secondary/50 to-accent/50 rounded-full"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          className="mt-24 text-center p-10 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-3">
            Ready to start your Web3 journey?
          </h3>
          <p className="text-gray-300 mb-6">
            Experience the simplest and most secure way to enter Web3.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center px-6 py-3 rounded-full font-semibold shadow-md hover:bg-primary/90 transition"
          >
            Start with Telegram <MessageSquare size={20} className="ml-2" />
          </a>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default IntegrationProcess;

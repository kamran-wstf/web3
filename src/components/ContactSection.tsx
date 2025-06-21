import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send } from "lucide-react";
import ContactForm from "./ContactFrom"; // 👈 import the new component

const actions = [
  {
    icon: <Send size={32} className="text-secondary mr-4 mt-1" />,
    title: "Start with Telegram",
    description:
      "Begin your Web3 journey instantly through our Telegram bot. Simple, secure, and ready to use.",
    link: "https://t.me/SideTest_Bot?start=bot---start",
    button: "Open Telegram Bot",
    gradient: "bg-gradient-to-r from-secondary/10 to-accent/10",
  },
  {
    icon: <Send size={24} className="text-secondary mr-4 mt-1" />,
    title: "Schedule a Demo",
    description:
      "Get a personalized walkthrough of our security architecture and features.",
    link: "https://t.me/SideTest_Bot?start=bot---demo",
    button: "Book Demo",
    gradient: "bg-gradient-to-r from-accent/10 to-secondary/10",
  },
  {
    icon: <Send size={24} className="text-secondary mr-4 mt-1" />,
    title: "Developer Support",
    description:
      "Get technical assistance for integrating Wasserstoff into your dApp.",
    link: "https://t.me/SideTest_Bot?start=bot---chatAI",
    button: "Join Developer Chat",
    gradient: "bg-gradient-to-r from-secondary/10 to-accent/10",
  },
];

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-16 md:py-24 relative z-0" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Start Your <span className="text-secondary">Journey</span>
          </h2>
          <p className="section-subtitle">
            Begin your Web3 journey with Wasserstoff today. Simple, secure, and ready for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm /> {/* 👈 isolated, stable form */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {actions.map((action, idx) => (
              <div key={idx} className={`card ${action.gradient} rounded-xl p-6 shadow flex items-start`}>
                {action.icon}
                <div>
                  <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                  <p className="text-gray-300 mb-4">{action.description}</p>
                  <a href={action.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn-secondary">{action.button}</button>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

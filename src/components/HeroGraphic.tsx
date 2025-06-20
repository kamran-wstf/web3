import React from 'react';
import { motion } from 'framer-motion';

const HeroGraphic: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const layers = [
    {
      id: 'telegram',
      label: 'Telegram Entry',
      color: '#00a8ff',
      y: 60,
      scale: 0.85
    },
    {
      id: 'icp',
      label: 'ICP Keyless Auth',
      color: '#7b52ab',
      y: 160,
      scale: 1
    },
    {
      id: 'marlin',
      label: 'Marlin TEE',
      color: '#00a8ff',
      y: 260,
      scale: 1.15
    }
  ];

  const createHexPath = (centerX: number, centerY: number, size: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      const x = centerX + size * Math.cos(angle);
      const y = centerY + size * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return `M ${points.join(' L ')} Z`;
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <motion.svg
        viewBox="0 0 350 350"
        className="w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Vertical connection line */}
        <motion.path
          d={`M 175,80 L 175,300`}
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeDasharray="4,4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />

        {/* Security Layers */}
        {layers.map((layer, index) => {
          const hexSize = 80 * layer.scale;
          const hexPath = createHexPath(175, layer.y, hexSize);
          
          return (
            <g key={layer.id}>
              {/* Outer glow */}
              <motion.path
                d={hexPath}
                fill={`${layer.color}15`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2
                }}
              />

              {/* Main hexagon */}
              <motion.path
                d={hexPath}
                stroke={layer.color}
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
              />

              {/* Inner hexagon */}
              <motion.path
                d={createHexPath(175, layer.y, hexSize * 0.7)}
                stroke={layer.color}
                strokeWidth="1"
                fill={`${layer.color}10`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
              />

              {/* Layer label */}
              <motion.text
                x="175"
                y={layer.y + 5}
                textAnchor="middle"
                className="font-mono text-sm"
                fill="#ffffff"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.3 }}
              >
                {layer.label}
              </motion.text>

              {/* Animated particles */}
              {[0, 1, 2].map((particle) => (
                <motion.circle
                  key={`particle-${index}-${particle}`}
                  cx="175"
                  cy={layer.y - hexSize}
                  r="3"
                  fill={layer.color}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    cy: [layer.y - hexSize, layer.y + hexSize],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: particle * 0.6 + index * 0.2
                  }}
                />
              ))}
            </g>
          );
        })}

        {/* Gradients */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00a8ff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#7b52ab" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00a8ff" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default HeroGraphic;
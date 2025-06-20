import React from 'react';
import { Layers, Box } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center">
      <div className="relative mr-2">
        <Box className="text-secondary" size={24} />
        <Layers className="text-accent absolute -top-1 -right-1" size={20} />
      </div>
      <span className="text-xl font-bold tracking-tight">
        <span className="text-secondary">Wasserstoff</span>
        <span className="text-white">W3</span>
      </span>
    </a>
  );
};

export default Logo
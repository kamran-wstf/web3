import React, { useState } from 'react';
import { Rocket, X, ExternalLink } from 'lucide-react';

interface NotificationBarProps {
    onClose?: () => void;
}

const Notification: React.FC<NotificationBarProps> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose?.();
    };

    const handleLaunchClick = () => {
        window.open('https://gorbaganachain.xyz', '_blank');
    };

    if (!isVisible) return null;

    return (
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5"></div>

            <div className="relative px-4 py-2">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <div className="flex-1 flex items-center justify-center space-x-6">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2">
                                <Rocket className="w-5 h-5 text-cyan-400 animate-pulse" />
                                <span className="text-gray-300 text-sm font-medium">
                                    We are launching
                                </span>
                                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-sm font-bold">
                                    Garbogana
                                </span>
                            </div>

                            <button
                                onClick={handleLaunchClick}
                                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-1 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
                            >
                                <span>Visit Launch Site</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animated border effect */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 animate-pulse"></div>
        </div>
    );
};

export default Notification;
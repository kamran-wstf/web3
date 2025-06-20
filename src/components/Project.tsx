import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Zap, Star, TrendingUp } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    status: 'completed' | 'in-progress' | 'featured';
    metrics: {
        users?: string;
        growth?: string;
        rating?: string;
    };
}

const projects: Project[] = [
    {
        id: 1,
        title: "SIDEBOT - TRADING PLATFORM",
        description: "Sidebot which lets you trade any token on any chain effortlessly right through Telegram! By leveraging chain abstraction, Sidebot unifies interactions across multiple blockchains, simplifying crypto trading and asset management.",
        image: "https://thewasserstoff.com/images/ecosystem/sidebot.svg",
        tags: ["React", "Node.js", "PostgreSQL", "Redis"],
        status: "featured",
        metrics: { users: "50K+", growth: "300%", rating: "4.9" }
    },
    {
        id: 2,
        title: "UATU",
        description: "Uatu is a real-time, high-performance blockchain analytics engine that decodes and structures on-chain activity at scale. Ask questions in plain English and get instant insights.",
        image: "https://thewasserstoff.com/images/ecosystem/uatulogo.svg",
        tags: ["Python", "TensorFlow", "React", "D3.js"],
        status: "completed",
        metrics: { users: "25K+", growth: "180%", rating: "4.8" }
    },
    {
        id: 3,
        title: "ZKCross Network",
        description: "zkCross Network is an AI-native DeFi infrastructure connecting all blockchains. It serves as the orchestration layer that automates cross-chain liquidity movements, smart contract calls, and DeFi strategies in a trustless manner.",
        image: "https://zkcross.network/site/logo.svg",
        tags: ["React Native", "Blockchain", "AWS", "TypeScript"],
        status: "in-progress",
        metrics: { users: "100K+", growth: "450%", rating: "4.7" }
    },
    {
        id: 4,
        title: "HASHNIPE",
        description: "Identify and snipe the best AI agents on Virtual Protocol in the earliest possible blocks. Let our intelligent agent analyze and score projects to maximize your investment potential.",
        image: "https://hashnipe.online/hashnipe.png",
        tags: ["React Native", "Blockchain", "AWS", "TypeScript"],
        status: "in-progress",
        metrics: { users: "100K+", growth: "450%", rating: "4.7" }
    },
    {
        id: 5,
        title: "SETU - Cross-Chain Bridge",
        description: "Setu is a decentralized, trustless cross-chain bridge that enables keyless transaction signing using Internet Computer’s threshold cryptography. It supports Stellar, Sui, and Solana blockchains with custom canister-based signers that never expose private keys. Liquidity accounts are generated and controlled using Ed25519 or Schnorr signatures without any central custody. Setu is designed for secure DeFi flows like token transfers, staking, and TVL-based governance.",
        image: "https://media.licdn.com/dms/image/v2/D560BAQHNJ_Thkh-tSQ/company-logo_200_200/B56ZYv3oHbGUAI-/0/1744559837171?e=1755734400&v=beta&t=pbpRxZg_YEvOSk75yKMDQ5AiMjr1rw4JLs-dUR9MVAY",
        tags: ["React Native", "Blockchain", "AWS", "TypeScript"],
        status: "in-progress",
        metrics: { users: "100K+", growth: "450%", rating: "4.7" }
    },
    {
        id: 6,
        title: "BigAds Network",
        description: "BigAds Network is developing an AI-powered, blockchain-based gaming technology that adapts in real time to player behavior. This innovative system is designed to deliver seamless, rewarding, and non-intrusive experiences within the game world.",
        image: "https://static.wixstatic.com/media/555bcd_a187918faabf410b871ca18ac8d4b888~mv2.png/v1/fill/w_175,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BigAds%20Logo-01%20(1).png",
        tags: ["React Native", "Blockchain", "AWS", "TypeScript"],
        status: "in-progress",
        metrics: { users: "100K+", growth: "450%", rating: "4.7" }
    }
];



const ProjectShowcase: React.FC = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            nextProject();
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const nextProject = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentProject((prev) => (prev + 1) % projects.length);
            setIsAnimating(false);
        }, 300);
    };




    return (
        <div className=" py-16 px-4 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-3">
                        Our Projects
                    </h1>
                    <p className="text-lg text-gray-400">
                        Showcasing innovative solutions that drive business growth and transform user experiences.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
                        >
                            <div className="relative mb-4 rounded-xl overflow-hidden h-40 flex items-center justify-center ">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="object-contain w-full h-full"
                                />
                          
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                            <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                           
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                {project.metrics.users && (
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-blue-400">{project.metrics.users}</div>
                                        <div className="text-gray-400 text-xs">Users</div>
                                    </div>
                                )}
                                {project.metrics.growth && (
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-green-400">{project.metrics.growth}</div>
                                        <div className="text-gray-400 text-xs">Growth</div>
                                    </div>
                                )}
                                {project.metrics.rating && (
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-yellow-400">{project.metrics.rating}</div>
                                        <div className="text-gray-400 text-xs">Rating</div>
                                    </div>
                                )}
                            </div>
                         
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectShowcase;
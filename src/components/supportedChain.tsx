import React from "react";

const blockchains = [
    {
        name: "PARTISIA",
        logo: "https://partisiablockchain.com/wp-content/uploads/2023/09/footer-logo.svg",
    },
    {
        name: "BICOMOMY",
        logo: "https://www.biconomy.io/bicofav.png",
    },
    {
        name: "STELLAR",
        logo: "https://cdn.sanity.io/images/e2r40yh6/production-i18n/d4809d7123ca78f57b05601982932f5cfa62c3ac-32x32.png?w=32&h=32&fm=png",
    },
    {
        name: "XDC",
        logo: "https://xdc.org/favicon-32x32.png",
    },
    {
        name: "CHILIZ",
        logo: "https://www.chiliz.com/wp-content/uploads/2024/07/Logo.svg",
    },
    {
        name: "STARKNET",
        logo: "https://www.starknet.io/wp-content/themes/Starknet/assets/img/starknet-logo-light.svg"
    },
    {
        name: "DIAMANTE",
        logo: "https://framerusercontent.com/images/hCJipfYt6QNf2M7IkkKiSiZ5t0.png"
    },
    {
        name: "MOVEMENT",
        logo: "https://docs.movementnetwork.xyz/img/logo.svg"
    },
    {
        name: "APTOS",
        logo: "https://res.cloudinary.com/dovram6cb/image/upload/v1750429282/Aptos_mark_WHT_qdlyy0.png"
    }
];

const BlockchainMarquee: React.FC = () => (
	<div className="w-full py-6 overflow-hidden">
		<div className="text-center mb-4">
			<h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
				Supported & Partnered Blockchains
			</h2>
		</div>
		<div className="relative w-full">
			<div className="marquee flex items-center gap-12">
				{blockchains.concat(blockchains).map((bc, idx) => (
					<div
						key={idx}
						className="flex flex-col items-center min-w-[120px]"
					>
						<img
							src={bc.logo}
							alt={bc.name}
							className="w-12 h-12 object-contain mb-2"
						/>
						<span className="text-gray-200 text-sm">{bc.name}</span>
					</div>
				))}
			</div>
		</div>
		<style>
			{`
        .marquee {
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
		</style>
	</div>
);

export default BlockchainMarquee;
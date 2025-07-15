import React from "react";
import Card from "../Card/Card";
import RankingTool from "../../Assets/gomtu.png";
import Yapdot from "../../Assets/yapdot.png";
import Web3list from "../../Assets/web3list.png";
import KaitoAnalytics from "../../Assets/kaitoanalytics.png";
import YappersCount from "../../Assets/yapperscount.png";

const tools = [
  {
    title: "Ranking Tool",
    description: "View all your rankings in one window across multiple timeframes.",
    author: "gomtu_xyz",
    image: RankingTool,
    link: "https://gomtu.xyz/",
  },
  {
    title: "Yap Market",
    description: "Use Yap Market to spot deals and earn $Kaito. Earn extra yaps with this tool",
    author: "Yapdotmarket",
    image: Yapdot,
    link: "https://go.yap.market/",
  },
  {
    title: "Kaito Analytics",
    description: "Check Kaito Yap Analytics to study top yap earners. Study more, Earn more ",
    author: "0x_ultra",
    image: KaitoAnalytics,
    link: "https://yaps.xultra.fun/",
  },
  {
    title: "Yappers Count",
    description: "You can check how many yappers are there on any Kaito Project You'll get the idea of competition  ",
    author: "0xZodex",
    image: YappersCount,
    link: "https://kaitoprojects.replit.app/",
  },
  {
    title: "Web 3 List",
    description: "Kaito Lists -find all the lists you need for any project’s top yappers and more. ",
    author: "pawnie_",
    image: Web3list,
    link: "https://www.web3lists.com/",
  },
];

function Home() {
  return (
    <section className="bg-[#0D0F13] min-h-screen px-6 py-16">
      {/* Hero Text */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-block bg-[#1A1F23] text-[#33FFDD] text-sm font-medium px-4 py-1 rounded-full mb-6">
          Built for the Kaito Community
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Welcome to Yapper<span className="text-[#33FFDD]">HUB</span>
        </h1>
        <p className="text-[#D1D5DB] text-lg md:text-xl leading-relaxed">
          Discover all the essential tools and utilities curated<br />
          for your Kaito journey in one place. Yappers Hub makes it<br />
          easy to explore and navigate everything Web3 with ease.
        </p>
      </div>

      {/* Tools Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <Card
            key={index}
            title={tool.title}
            description={tool.description}
            author={tool.author}
            image={tool.image}
            link={tool.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;

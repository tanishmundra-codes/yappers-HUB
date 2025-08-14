import React from "react";

export default function About() {
  return (
    <section className="bg-[#0D0F13] text-white min-h-[80vh] flex items-center justify-center px-6 md:px-20 font-sans pb-24">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-[#33FFDD]">YappersHUB</span>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          YappersHUB is your go-to platform for discovering the latest tools, rankings, and updates in the web ecosystem. Whether you're a creator, learner, or explorer we bring the best of the internet to one place.
        </p>
        <p className="text-md text-gray-400">
          Built with using React and Tailwind CSS. Always improving, always listening.
        </p>
      </div>
    </section>
  );
}

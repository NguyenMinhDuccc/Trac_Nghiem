import React from "react";
import videoHomePage from "../../assets/homepage.mp4";

const HomePage = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="w-1/2 p-14 space-y-8">
        <h1 className="text-6xl font-bold mb-6">Get to know your customers with forms worth filling out</h1>
        <p className="text-lg text-gray-900">
          Learn the skills you need to succeed with our comprehensive and
          engaging courses. Start your journey today!
        </p>
        <button
          aria-label="Get started-it's free"
          data-testid="hero-signup"
          className="px-4 py-2 w-56 h-12 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          Get started-it's free
        </button>
      </div>

      <div className="w-1/2 flex justify-end">
        <video
          className="w-3/4"
          loop
          autoPlay
          playsInline
          preload="none"
          x-webkit-airplay="deny"
        >
          <source src={videoHomePage} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HomePage;

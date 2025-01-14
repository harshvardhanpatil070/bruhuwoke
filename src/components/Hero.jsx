import React from "react";
import heroVideo from "../assets/videos/hero-video.mp4"; // Replace with your actual video file path

function HeroSection() {
  return (
    <section className="hero-section relative h-screen flex items-end justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white pb-8 px-6 sm:px-8">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">
          Trade Multiple Assets with Your Crypto
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
import React from "react";
import Button from "../components/Button";

const Hero = () => {
    return(
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-indigo-950/30 -z-10"></div>
            
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col items-center justify-center c-space">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                            Hi, I'm <span className="text-gray_gradient">Ezra Huffman</span>
                        </h1>
                        <p className="hero_tag text-gray_gradient">
                            Software Engineer
                        </p>
                    </div>

                    {/* Tagline */}
                    <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Building high-performance systems, interactive experiences, and scalable applications
                    </p>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm">
                            HFT & Quantitative Finance
                        </span>
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm">
                            Game Development
                        </span>
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/80 text-sm">
                            Full-Stack Development
                        </span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a href="#projects" className="w-full sm:w-auto">
                            <Button name="View Projects" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                </div>
            </div>
        </section>
    )
};

export default Hero;
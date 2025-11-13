import React from "react";

const Hero = () => {
    return(
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 -z-10 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(var(--hero-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid-line) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Content Container */}
            <div className="flex-1 flex flex-col items-center justify-center c-space">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold" style={{ color: 'var(--text-main)' }}>
                            Hi, I'm <span className="text-gray_gradient">Ezra Huffman</span>
                        </h1>
                        <p className="hero_tag text-gray_gradient">
                            Software Engineer
                        </p>
                    </div>

                    {/* Tagline */}
                    <p className="text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        Building high-performance systems, interactive experiences, and scalable applications
                    </p>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                        <span className="px-4 py-2 rounded-full text-sm" style={{
                            background: 'var(--chip-bg)',
                            border: '1px solid var(--chip-border)',
                            color: 'var(--text-soft)'
                        }}>
                            HFT & Quantitative Finance
                        </span>
                        <span className="px-4 py-2 rounded-full text-sm" style={{
                            background: 'var(--chip-bg)',
                            border: '1px solid var(--chip-border)',
                            color: 'var(--text-soft)'
                        }}>
                            Game Development
                        </span>
                        <span className="px-4 py-2 rounded-full text-sm" style={{
                            background: 'var(--chip-bg)',
                            border: '1px solid var(--chip-border)',
                            color: 'var(--text-soft)'
                        }}>
                            Full-Stack Development
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 rounded-full flex justify-center p-2" style={{ borderColor: 'var(--hero-scroll-border)' }}>
                    <div className="w-1 h-3 rounded-full" style={{ backgroundColor: 'var(--hero-scroll-dot)' }}></div>
                </div>
            </div>
        </section>
    )
};

export default Hero;
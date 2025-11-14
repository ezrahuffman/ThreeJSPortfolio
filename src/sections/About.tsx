import { useState } from "react";

const About = ({}) => {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('ezrathuffman@gmail.com')
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    return (
        <section className="c-space my-20" id="about">
            <div className="mb-12 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-main)' }}>About Me</h2>
                <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-soft) 0%, var(--accent-soft-alt) 100%)' }}></div>
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 h-full">
                {/* Introduction Card */}
                <div className="lg:col-span-2 md:col-span-2">
                    <div className="grid-container h-full">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                            <img src="/assets/linkedin.jpg" alt="profile" className="w-full md:w-48 h-48 object-contain rounded-lg"/>
                            <div className="flex-1">
                                <p className="grid-headtext text-2xl mb-3">Hi, I'm Ezra</p>
                                <p className="grid-subtext text-lg leading-relaxed">With 3 years of experience, I have honed my skills in fullstack development, having worked on server infrastructure, game programming, UI, and core financial systems. I am passionate about creating efficient, scalable solutions that solve real-world problems.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Card */}
                <div className="lg:col-span-1 md:col-span-2">
                    <div className="grid-container h-full flex flex-col justify-center">
                        <img src="/assets/grid4.png" alt="contact" className="w-full h-32 object-cover rounded-lg mb-4"/>
                        <div className="space-y-3 text-center">
                            <p className="grid-headtext">Get In Touch</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied?'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-5 h-5"/>
                                <p className="text-base md:text-lg font-medium" style={{ color: 'var(--accent-soft)' }}>ezrathuffman@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Card */}
                <div className="lg:col-span-2 md:col-span-1">
                    <div className="grid-container h-full">
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <img src="/assets/grid2.png" alt="tech stack" className="w-full sm:w-48 h-48 object-contain"/>
                            <div className="flex-1">
                                <p className="grid-headtext text-2xl mb-3">Tech Stack</p>
                                <p className="grid-subtext text-base leading-relaxed">I have experience with many tech stacks and applications. I'm most comfortable with Python, C++, JavaScript/TypeScript, and C#. I am also currently pursuing a master's in computing systems at Georgia Institute of Technology.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Remote Work Card */}
                <div className="lg:col-span-1 md:col-span-1">
                    <div className="grid-container h-full">
                        <div className="rounded-2xl w-full h-32 flex justify-center items-center mb-4" style={{
                            background: 'linear-gradient(135deg, var(--accent-soft)/10 0%, var(--accent-soft-alt)/10 100%)'
                        }}>
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-soft)' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <p className="grid-headtext mb-2">Seattle & Remote</p>
                            <p className="grid-subtext text-sm">Based in Seatle, WA. Available for in-person in the Seattle area or remote work across the US. Open to full-time roles.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 text-sm">
                <p>© 2025 Ezra Huffman. All rights reserved</p>
            </div>

            <div className="flex gap-3">
                <a href="https://github.com/ezrahuffman" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <div className="social-icon hover:bg-black-400 transition-colors">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 github-logo"/>
                    </div>
                </a>
                <a href="https://linkedin.com/in/ezra-huffman" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <div className="social-icon hover:bg-black-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </div>
                </a>
            </div>
            
            <div className="text-white-500 text-sm">
                <a href="mailto:ezrathuffman@gmail.com" className="hover:text-white transition-colors">
                    ezrathuffman@gmail.com
                </a>
            </div>
        </section>
    )
};

export default Footer;
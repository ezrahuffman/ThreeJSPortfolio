import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../constants';

const NavItems = ({}) => {
    return (
        <ul className='nav-ul'>
            {navLinks.map((item) => (
                <li key={item.id} className='nav-li'>
                    <a href={item.href} className='nav-li_a' onClick={() => {} }>
                        {item.name}
                    </a>
                </li>
            ) 
        )}
        </ul>
    );
};

const NavBar = ({}) => {
    const closeURL = '/assets/close.svg';
    const menuURL = '/assets/menu.svg'
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{
        background: 'color-mix(in srgb, var(--bg-page) 75%, transparent)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-subtle)'
    }}>
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="font-bold text-xl" style={{ color: 'var(--text-soft)' }}>Ezra</a>

                <div className="flex items-center gap-3">
                    <nav className='sm:flex hidden'>
                        <NavItems/>
                    </nav>
                    
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95"
                        style={{
                            background: 'var(--bg-elevated)',
                            borderColor: 'var(--border-strong)',
                            color: 'var(--text-main)'
                        }}
                        aria-label="Toggle color theme"
                    >
                        {theme === 'dark' ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent-soft)' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        )}
                    </button>
                
                    <button onClick={toggleMenu} className='sm:hidden flex w-9 h-9 items-center justify-center rounded-full border transition-all' style={{
                        background: 'var(--bg-elevated)',
                        borderColor: 'var(--border-strong)',
                        color: 'var(--text-main)'
                    }} aria-label='Toggle Menu'>
                        <img src={isOpen ? closeURL : menuURL} alt='toggle' className='w-5 h-5' style={{
                            filter: theme === 'light' ? 'brightness(0.2)' : 'brightness(1)'
                        }}/>
                    </button>
                </div>
            </div>
        </div>

        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className='p-5'>
                <NavItems/>
            </nav>
        </div>
    </header>)
}

export default NavBar;
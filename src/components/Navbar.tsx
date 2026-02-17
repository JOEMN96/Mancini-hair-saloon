import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
    const location = useLocation();

    const navLinks = [
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-3 flex justify-between items-center bg-white/5  backdrop-blur-sm">
            <Link
                to="/"
                className="text-white text-xl font-bold tracking-wider hover:opacity-80 transition-opacity"
            >
                AM
            </Link>

            <div className="flex gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`text-sm tracking-wide transition-all duration-300 hover:text-white ${location.pathname === link.path
                            ? 'text-white'
                            : 'text-white/70'
                            }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

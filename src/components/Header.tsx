
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'blogs', label: 'Blogs' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Sumit</h1>
              <p className="text-sm text-gray-400">Code Meets Creativity.</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white border-b-2 border-purple-500'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Hire Me Button */}
          <button
            onClick={() => setActiveSection('contact')}
            className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>💼</span>
            <span>Hire Me</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

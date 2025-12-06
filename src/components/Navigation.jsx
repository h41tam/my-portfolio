import { useState, useEffect } from 'react';
import { List, X, UserList } from '@phosphor-icons/react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'glass py-4' : 'py-6'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollToSection('home')} className="text-2xl scale-150 
          origin-left font-rodfat glow-text text-foreground/70 hover:text-foreground 
          transition-colors duration-500">
            H41TAM
          </button>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => scrollToSection('home')} className="font-cinzel 
            glow-text text-foreground/80 hover:text-foreground transition-colors">
              Home
            </button>
            <span className="h-4 w-px bg-border bg-foreground/80" />
            <button onClick={() => scrollToSection('about')} className="font-cinzel glow-text 
            text-foreground/80 hover:text-foreground transition-colors">
              About
            </button>
            <span className="h-4 w-px bg-border bg-foreground/80" />
            <button onClick={() => scrollToSection('projects')} className="font-cinzel glow-text 
            text-foreground/80 hover:text-foreground transition-colors">
              Projects
            </button>
            <span className="h-4 w-px bg-border bg-foreground/80" />
            <button onClick={() => scrollToSection('contact')} className="font-cinzel glow-text 
            text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </button>
            <span className="h-4 w-px bg-border bg-foreground/80" />
            <a
              href="/my-resume.pdf"
              download
              className="rounded-md bg-gradient-to-r from-primary 
              to-secondary text-foreground/80 px-4 py-2 text-sm font-medium 
              transition-all hover:shadow-lg hover:shadow-primary/50 
              hover:scale-105 font-cinzel hover:text-primary-foreground
              inline-flex items-center justify-center"
            >
              <UserList size={16} className="mr-2 scale-110" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-6 space-y-3 flex 
          flex-col items-center font-cinzel">
            <button onClick={() => scrollToSection('home')} className="block 
            w-full text-center glow-text text-foreground/80 hover:text-foreground 
            transition-colors py-2">
              Home
            </button>
            <div className="h-px w-full bg-border/60" />
            <button onClick={() => scrollToSection('about')} className="block w-full 
            text-center glow-text text-foreground/80 hover:text-foreground transition-colors py-2">
              About
            </button>
            <div className="h-px w-full bg-border/60" />
            <button onClick={() => scrollToSection('projects')} className="block w-full 
            text-center glow-text text-foreground/80 hover:text-foreground transition-colors py-2">
              Projects
            </button>
            <div className="h-px w-full bg-border/60" />
            <button onClick={() => scrollToSection('contact')} className="block w-full 
            text-center glow-text text-foreground/80 hover:text-foreground transition-colors py-2">
              Contact
            </button>
            <div className="h-px w-full bg-border/60" />
            <a
              href="/my-resume.pdf"
              download
              className="block w-full text-center rounded-md bg-gradient-to-r from-primary 
              to-secondary text-foreground/80 px-4 py-2 text-sm font-medium 
              transition-all hover:shadow-lg hover:shadow-primary/50 
              hover:scale-105 font-cinzel hover:text-primary-foreground
              inline-flex items-center justify-center"
            >
              <UserList size={16} className="mr-3 scale-110" />
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

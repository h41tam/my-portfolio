import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        {
          opacity: 0,
          y: 60,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
          }
        }
      );

      // Floating particles
      gsap.to('.footer-particle', {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="relative py-12 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="footer-particle absolute top-1/4 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
        <div className="footer-particle absolute bottom-1/3 right-1/3 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
        <div className="footer-particle absolute top-1/2 right-1/4 w-20 h-20 bg-accent/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Links */}
          <div className="flex gap-6 justify-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground/70 font-cinzel hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground/70 font-cinzel hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground/70 font-cinzel hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground/70 font-cinzel hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-foreground/70">
            <span>© 2025 Kylen. Made with</span>
            <Heart size={16} weight="fill" className="text-primary animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

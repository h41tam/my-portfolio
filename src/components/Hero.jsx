import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from './ui/button';
import { FileArrowDown } from '@phosphor-icons/react';

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      headlineRef.current,
      {
        opacity: 0,
        y: 50,
        filter: 'blur(10px)'
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out'
      }
    )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)'
        },
        '-=0.4'
      );

    // Floating orbs animation
    gsap.to('.hero-orb', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5
    });
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 scroll-mt-24 md:scroll-mt-32">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src='https://my.spline.design/earthmoon-rvmkcyifHjjYvEl4KzPiSBrb/'
          className="w-full h-full border-0"
          title="3D Background"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40 z-10" />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="hero-orb absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="hero-orb absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="hero-orb absolute top-1/2 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight font-cinzel-decorative"
        >
          This Is <span className="gradient-text font-bold glow-text">Kyser</span>.
          <br />
          <span className="text-foreground">Your New</span>
          <br />
          <span className="text-foreground/90">Web Specialist.</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl  text-foreground/90 max-w-2xl mx-auto mb-10"
        >
          <span className="gradient-text font-bold glow-text font-cinzel-decorative">I </span>
          <span className="glow-text font-cinzel">can bring </span>
          <span className="gradient-text font-bold font-cinzel-decorative glow-text">Your </span>
          <span className="glow-text font-cinzel">vision to reality</span>
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={scrollToProjects}
            variant="outline"
            size="lg"
            className="glass border-primary/50 hover:bg-primary/30 text-lg px-8 font-cinzel-decorative"
          >
            View My Work
          </Button>
          <a
            href="./my-resume.pdf"
            download
            className="inline-flex items-center justify-center
            rounded-md
            border border-primary/50
            bg-white/10 backdrop-blur-md
            hover:bg-primary/30
            h-11 px-8 text-lg font-medium
            transition-colors hover:shadow-lg hover:shadow-primary/50
            font-cinzel-decorative"
          >
            My Resume
            <FileArrowDown size={16} className="ml-2 scale-110" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

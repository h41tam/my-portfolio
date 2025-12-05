import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const percentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: () => {
            onComplete();
          }
        });
      }
    });

    // Animate progress bar
    tl.to(progressBarRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power2.out',
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        if (percentRef.current) {
          percentRef.current.textContent = `${progress}%`;
        }
      }
    });

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-minecraft font-bold gradient-text glow-text">
          READY?
        </h1>
        
        <div className="w-64 md:w-96 space-y-4">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              style={{ width: '0%' }}
            />
          </div>
          
          <div className="flex justify-between items-center font-minecraft text-sm text-muted-foreground">
            <span>Loading Experience</span>
            <span ref={percentRef}>0%</span>
          </div>
        </div>
      </div>
      
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Preloader;

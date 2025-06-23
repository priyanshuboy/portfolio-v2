import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const AnimatedBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!backgroundRef.current) return;

    // Create floating particles
    const particles = Array.from({ length: 50 }, (_, i) => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 opacity-20';
      particle.style.width = Math.random() * 6 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      backgroundRef.current?.appendChild(particle);
      return particle;
    });

    // Animate particles
    anime({
      targets: particles,
      translateX: () => anime.random(-100, 100),
      translateY: () => anime.random(-100, 100),
      scale: [0.5, 1.5],
      opacity: [0.1, 0.4],
      duration: () => anime.random(3000, 6000),
      delay: () => anime.random(0, 2000),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });

    // Create geometric lines
    const lines = Array.from({ length: 20 }, (_, i) => {
      const line = document.createElement('div');
      line.className = 'absolute bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-10';
      line.style.height = '1px';
      line.style.width = Math.random() * 200 + 100 + 'px';
      line.style.left = Math.random() * 100 + '%';
      line.style.top = Math.random() * 100 + '%';
      line.style.transform = `rotate(${Math.random() * 360}deg)`;
      backgroundRef.current?.appendChild(line);
      return line;
    });

    // Animate lines
    anime({
      targets: lines,
      translateX: () => anime.random(-200, 200),
      translateY: () => anime.random(-200, 200),
      rotate: () => anime.random(0, 360),
      opacity: [0.05, 0.2],
      duration: () => anime.random(4000, 8000),
      delay: () => anime.random(0, 3000),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad'
    });

    // Cleanup function
    return () => {
      particles.forEach(particle => particle.remove());
      lines.forEach(line => line.remove());
    };
  }, []);

  return (
    <div 
      ref={backgroundRef}
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(6, 182, 212, 0.1) 0%, rgba(17, 24, 39, 1) 50%, rgba(88, 28, 135, 0.1) 100%)'
      }}
    />
  );
};

export default AnimatedBackground;
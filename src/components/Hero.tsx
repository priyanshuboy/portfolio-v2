import React, { useEffect } from 'react';
import { ChevronDown, Github, Mail, Download } from 'lucide-react';
import anime from 'animejs';

const Hero: React.FC = () => {
  useEffect(() => {
    // Hero text animation
    anime.timeline()
      .add({
        targets: '.hero-title',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '.hero-subtitle',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
      }, '-=500')
      .add({
        targets: '.hero-description',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutExpo'
      }, '-=400')
      .add({
        targets: '.hero-buttons',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutExpo'
      }, '-=200');

    // Floating animation for scroll indicator
    anime({
      targets: '.scroll-indicator',
      translateY: [0, 10, 0],
      duration: 2000,
      loop: true,
      easing: 'easeInOutSine'
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="hero-title mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Priyanshu Kushwah
            </span>
          </h1>
        </div>
        
        <div className="hero-subtitle mb-6">
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
            Computer Science Engineering Student
          </h2>
        </div>
        
        <div className="hero-description mb-8">
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and exploring the endless possibilities of technology. 
            Building the future, one line of code at a time.
          </p>
        </div>
        
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://github.com/priyanshuboy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-3 rounded-full text-white font-semibold transition-all transform hover:scale-105 hover:shadow-xl"
          >
            <Github size={20} />
            <span>View GitHub</span>
          </a>
          
          <a
            href="mailto:priyanshu74k@gmail.com"
            className="flex items-center space-x-2 border-2 border-purple-500 hover:bg-purple-500 px-8 py-3 rounded-full text-white font-semibold transition-all transform hover:scale-105"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </a>
        </div>
        
        <div className="scroll-indicator">
          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-cyan-400 transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
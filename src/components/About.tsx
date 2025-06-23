import React, { useEffect, useRef } from 'react';
import { BookOpen, Trophy, Target } from 'lucide-react';
import anime from 'animejs';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.about-card',
              translateY: [50, 0],
              opacity: [0, 1],
              delay: anime.stagger(200),
              duration: 800,
              easing: 'easeOutExpo'
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Computer Science Engineering student with a passion for learning and innovation.'
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Dedicated to creating efficient, scalable solutions and staying updated with latest technologies.'
    },
    {
      icon: Trophy,
      title: 'Goals',
      description: 'Aspiring to contribute to meaningful projects that make a positive impact on society.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate Computer Science Engineering student who loves to explore new technologies 
            and create innovative solutions. My journey in programming started with curiosity and has 
            evolved into a deep passion for building meaningful applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="about-card bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <highlight.icon size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{highlight.title}</h3>
              <p className="text-gray-400 text-center leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in continuous learning and pushing the boundaries of what's possible. 
              Whether it's developing web applications, exploring new frameworks, or solving complex problems, 
              I approach each challenge with enthusiasm and dedication. My goal is to leverage technology 
              to create solutions that matter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Brain, Wrench } from 'lucide-react';
import anime from 'animejs';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.skill-category',
              translateY: [50, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              duration: 800,
              easing: 'easeOutExpo'
            });

            anime({
              targets: '.skill-item',
              scale: [0.8, 1],
              opacity: [0, 1],
              delay: anime.stagger(50, { start: 500 }),
              duration: 600,
              easing: 'easeOutBack'
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

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'C']
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['React', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'Tailwind CSS']
    },
    {
      icon: Database,
      title: 'Databases & Tools',
      skills: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Linux']
    },
    {
      icon: Smartphone,
      title: 'Mobile & UI/UX',
      skills: ['React Native', 'Flutter', 'Figma', 'Adobe XD', 'Responsive Design']
    },
    {
      icon: Brain,
      title: 'Concepts & Algorithms',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Problem Solving']
    },
    {
      icon: Wrench,
      title: 'Development Tools',
      skills: ['Webpack', 'Vite', 'Docker', 'Firebase', 'Vercel', 'Netlify']
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies and skills I've developed throughout my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="skill-item bg-gray-700/50 px-3 py-2 rounded-lg text-sm text-center text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-full px-6 py-3">
            <span className="text-cyan-400 font-semibold">Always learning and exploring new technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { Heart, Github, Mail, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/priyanshuboy',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:priyanshu74k@gmail.com',
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/priyanshu-kushwah-0b368b254/',
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="relative z-10 bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
              Priyanshu.dev
            </h3>
            <p className="text-gray-400 text-sm">
              Computer Science Engineering Student & Developer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-cyan-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110 group"
                aria-label={link.label}
              >
                <link.icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart size={16} className="text-red-500 mx-2" /> by Priyanshu Kushwah © {currentYear}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React, TypeScript, Tailwind CSS & Anime.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
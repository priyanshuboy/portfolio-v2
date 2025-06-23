import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Plus, Calendar, Code, Star } from 'lucide-react';
import anime from 'animejs';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  date: string;
}

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'StreamSphere',
      description: 'A fully functional YouTube clone with video streaming, search, and user interactions.',
      longDescription: 'Built a comprehensive YouTube clone featuring video upload, streaming, search functionality, user authentication, and interactive features like comments and likes. Implemented responsive design and optimized performance for seamless user experience.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
      githubUrl: 'https://github.com/priyanshuboy/Project1/tree/main/YouTube-Clone',
      imageUrl: 'https://templatic.com/wp-themes/video/home-thumb.png',
      featured: false,
      date: '2024'
    },
    {
      id: 2,
      title: 'Brainly',
      description: 'An educational platform clone for collaborative learning and knowledge sharing.',
      longDescription: 'Developed a comprehensive educational platform similar to Brainly, featuring question-answer system, user profiles, collaborative learning tools, and gamification elements to encourage participation and knowledge sharing.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Redux'],
      githubUrl: 'https://github.com/priyanshuboy/Brainly',
      imageUrl: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      date: '2025'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'This portfolio website showcasing my skills and projects with beautiful animations.',
      longDescription: 'Created this modern portfolio website using React, TypeScript, and Anime.js for smooth animations. Features responsive design, dark theme, and interactive elements to showcase my development skills and projects.',
      technologies: ['React', 'TypeScript', 'Anime.js', 'Tailwind CSS', 'Vite'],
      githubUrl: '#',
      liveUrl: '#',
      imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
      date: '2025'
    },
        {
      id: 4,
      title: 'CokeSplash',
      description: 'A sleek and refreshing landing page showcasing the iconic Coca-Cola brand with bold visuals and smooth user experience.',
      longDescription: 'Designed and developed a visually striking landing page for the Coca-Cola brand, emphasizing bold design, smooth animations, and responsive layout. The project showcases creative front-end techniques using HTML, CSS, and JavaScript to deliver an engaging user experience. Special attention was given to brand consistency, color psychology, and mobile-first design principles to reflect the iconic and refreshing image of Coca-Cola.',
      technologies: ["Html ,Css ,Javascript"],
      githubUrl: 'https://github.com/priyanshuboy/Frontend_project',
      liveUrl: 'https://frontend-project-rust-delta.vercel.app/',
      imageUrl: 'https://static.toiimg.com/thumb/msid-113513478,width-1070,height-580,imgsize-114890,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
      featured: false,
      date: '2024'
    } ,
       {   id: 5,
      title: 'DrawMaster',
      description: 'A collaborative whiteboard tool built with custom drawing logic and real-time canvas interactions using React and TypeScript',
      longDescription: 'Developed a real-time collaborative whiteboard application using React and TypeScript, enabling users to draw, edit, and interact on a shared canvas with custom vector-based drawing logic. Implemented features like shape selection, freehand drawing, multi-user synchronization via WebSocket, and undo/redo functionality. Designed the canvas rendering from scratch without relying on clone implementations, focusing on performance, accuracy, and user experience',
    technologies: ["TypeScript", "PostgreSQL", "Tailwind CSS", "Turborepo", "React", "Canvas API", "WebSocket"] ,
      githubUrl: 'https://github.com/priyanshuboy/Draw-APP',
      liveUrl: 'https://frontend-project-rust-delta.vercel.app/',
      imageUrl: 'https://camo.githubusercontent.com/6ec32694af5608860f01a5ca63d55ea6f28eaa3caec10e0cb86d9d1936c43bf4/68747470733a2f2f657863616c69647261772e6e7963332e63646e2e6469676974616c6f6365616e7370616365732e636f6d2f67697468756225324670726f647563745f73686f77636173652e706e67',
      featured: false,
      date: '2025'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.project-card',
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

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of my notable projects that showcase my skills and passion for development.
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all transform hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  {project.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star size={12} className="mr-1" />
                      Featured
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-lg text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add More Projects Card */}
          <div className="project-card bg-gray-800/20 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-600 hover:border-cyan-500/50 transition-all flex items-center justify-center min-h-[400px] group cursor-pointer">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Plus size={32} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-300 group-hover:text-cyan-400 transition-colors">
                More Projects Coming Soon
              </h3>
              <p className="text-gray-500">
                Currently working on exciting new projects
              </p>
            </div>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeProjectModal}>
            <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center">
                    <Code size={20} className="mr-2 text-cyan-400" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
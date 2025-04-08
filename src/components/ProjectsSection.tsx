
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Predators E-Commerce",
      description: "An e-commerce platform built with PostgreSQL and Node.js with Express for backend, and React.js with Redux Toolkit for frontend.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      technologies: ["PostgreSQL", "Node.js", "Express", "React", "Redux Toolkit"],
      githubLink: "https://github.com/NTElissa",
      liveLink: "#"
    },
    {
      title: "DevPulse Performance Platform",
      description: "The brilliant performance management platform for tracking developer productivity metrics and insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["React", "GraphQL", "Apollo Studio", "TypeScript"],
      githubLink: "https://github.com/NTElissa",
      liveLink: "#"
    },
    {
      title: "RATI Community Platform",
      description: "A community platform for the Rwanda Association in Technology And Innovation to connect members and showcase initiatives.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["Node.js", "React", "MongoDB", "Express"],
      githubLink: "https://github.com/NTElissa",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects showcasing my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="text-xs px-2 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-portfolio-blue"
                  >
                    <Github size={16} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-portfolio-blue"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://github.com/NTElissa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-portfolio-blue text-white rounded-md hover:bg-portfolio-darkBlue transition-colors"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

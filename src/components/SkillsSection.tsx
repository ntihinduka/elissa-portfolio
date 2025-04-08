
import { Code, Database, Server, Layers, Cpu, Globe } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-8 w-8 text-portfolio-blue" />,
      skills: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Redux", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 text-portfolio-gold" />,
      skills: ["Node.js", "Express.js", "Nest.js", "REST APIs", "GraphQL", "Java", ".NET"]
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-portfolio-darkBlue" />,
      skills: ["MongoDB", "PostgreSQL", "SQL", "Mongoose", "Data Modeling"]
    },
    {
      title: "DevOps & Tools",
      icon: <Cpu className="h-8 w-8 text-portfolio-blue" />,
      skills: ["Git", "CI/CD", "Jenkins", "Docker", "SonarQube", "JMeter", "Postman"]
    },
    {
      title: "Architecture & Design",
      icon: <Layers className="h-8 w-8 text-portfolio-gold" />,
      skills: ["MVC Pattern", "Microservices", "REST Architecture", "API Design", "Security Best Practices"]
    },
    {
      title: "Languages",
      icon: <Globe className="h-8 w-8 text-portfolio-darkBlue" />,
      skills: ["English", "French", "Kinyarwanda", "Swahili"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            My technical skills and competencies that I've developed throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-md bg-gray-100 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-portfolio-dark">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap mt-4">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-portfolio-dark mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:border-portfolio-blue transition-colors">
              <h4 className="font-semibold mb-2">JavaScript Algorithms and Data Structures</h4>
              <p className="text-sm text-gray-600">A comprehensive certification covering JavaScript fundamentals and advanced algorithms.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-portfolio-blue transition-colors">
              <h4 className="font-semibold mb-2">General English</h4>
              <p className="text-sm text-gray-600">EF Level 4 - Elementary - CEFR Level A2</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:border-portfolio-blue transition-colors">
              <h4 className="font-semibold mb-2">Andela Technical Leadership Program (ATLP)</h4>
              <p className="text-sm text-gray-600">Intensive training program focusing on full-stack development and technical leadership.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

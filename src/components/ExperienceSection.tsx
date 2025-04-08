
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Trainer of Software Development",
      company: "Essa Nyarugunga",
      period: "October 2024 - Present",
      location: "Kigali, Rwanda",
      description: "Training trainees in various technologies including Node.js, React, Vue.js, Windows Server, version control, and database management."
    },
    {
      title: "ICT Technical Officer and Teacher",
      company: "Kayenzi Spring College",
      period: "January 2024 - September 2024",
      location: "Rwanda",
      description: "Managed IT systems including hardware, software, networks, and security. Installed and configured systems, provided technical support, monitored performance, and conducted upgrades. Taught ICT from S1 to S6 and oversaw the computer lab."
    },
    {
      title: "Apprenticeship Internal Product",
      company: "Andela",
      period: "June 2023 - December 2023",
      location: "Kigali, Rwanda",
      description: "Full-stack developer working in DevOps Team. Specialized in GraphQL, React.js, JavaScript, TypeScript, MongoDB, Java, .NET, focusing on API development, security, performance, and CI/CD pipelines."
    },
    {
      title: "IT Helpdesk",
      company: "M&S Technology Ltd",
      period: "June 2023 - September 2023",
      location: "Kigali, Rwanda",
      description: "Assisted end-users with technical support through on-site, remote, and Help Desk support. Provided guidance and troubleshooting, minimizing downtime and increasing workflow efficiency."
    },
    {
      title: "Apprentice",
      company: "Andela",
      period: "January 2022 - June 2023",
      location: "Kigali, Rwanda",
      description: "Full-stack developer working in DevOps Team. Specialized in GraphQL, React.js, JavaScript, TypeScript, MongoDB, focusing on API development, security, performance, and CI/CD pipelines."
    },
    {
      title: "Full Stack Developer",
      company: "Technology Routine",
      period: "August 2022 - March 2023",
      location: "Rwanda",
      description: "Developed applications using Node.js for server-side and React for front-end. Managed databases with PostgreSQL and utilized cloud computing services."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey as a software developer and educator.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="timeline-dot">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 mt-2 ml-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                    <h3 className="text-xl font-bold text-portfolio-dark">{exp.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                    <div className="font-medium text-portfolio-blue">{exp.company}</div>
                    <div className="text-sm text-gray-500 italic">{exp.location}</div>
                  </div>
                  
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

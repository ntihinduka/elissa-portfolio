
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-portfolio-dark">
              <span className="text-portfolio-blue">Hello, I'm </span>
              <span className="relative">
                Elissa Ntihinduka
                <span className="absolute bottom-0 left-0 w-full h-1 bg-portfolio-gold transform"></span>
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">Full Stack Developer</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              I build robust, scalable web applications with modern technologies. 
              My expertise lies in creating efficient solutions that deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-1 text-portfolio-gold" />
                Kigali, Rwanda
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              <span className="text-gray-600">ntihindukaelissa77@gmail.com</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              <span className="text-gray-600">+250 781 832 092</span>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-portfolio-blue text-white rounded-md hover:bg-portfolio-darkBlue transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-portfolio-blue text-portfolio-blue rounded-md hover:bg-portfolio-blue hover:text-white transition-colors"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/NTElissa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-blue transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ntihinduka-elissa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-blue transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:ntihindukaelissa77@gmail.com"
                className="text-gray-600 hover:text-portfolio-blue transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in">
                <img
                  src="/lovable-uploads/6630974e-75bd-4362-be6f-29fed969c979.png"
                  alt="Elissa Ntihinduka"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="w-16 h-16 bg-portfolio-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5+ yrs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-gray-400 hover:text-portfolio-blue">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

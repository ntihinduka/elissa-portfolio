
import { Briefcase, GraduationCap, HeartHandshake, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A motivated programmer with strong analytical skills, a quick learner, and a team player.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative animate-fade-in">
            <img 
              src="/lovable-uploads/d6b8b9cb-e260-4d76-8c6d-2c819325d47b.png" 
              alt="About Elissa" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-md hidden md:block">
              <div className="text-portfolio-blue font-bold">MSc in Information Technology</div>
              <div className="text-sm text-gray-600">University of Kigali</div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-portfolio-dark">I'm a Full Stack Developer based in Kigali, Rwanda</h3>
            
            <p className="text-gray-600">
              Detail-oriented, passionate about writing clean code, and adaptable to new technologies and environments. 
              I specialize in building robust web applications using modern JavaScript frameworks and libraries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <div className="bg-portfolio-blue/10 p-3 rounded-md mr-3">
                  <User className="h-5 w-5 text-portfolio-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Personal Info</h4>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    {/* <li><span className="font-medium">Birthday:</span> December 23, 2000</li>
                    <li><span className="font-medium">Phone:</span> +250 781 832 092</li> */}
                    <li><span className="font-medium">Email:</span> ntihindukaelissa77@gmail.com</li>
                    <li><span className="font-medium">Location:</span> Kigali, Rwanda</li>
                    <li><span className="font-medium">Languages:</span> English, French, Kinyarwanda, Swahili</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-gold/10 p-3 rounded-md mr-3">
                  <GraduationCap className="h-5 w-5 text-portfolio-gold" />
                </div>
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <ul className="text-sm text-gray-600 space-y-2 mt-1">
                    <li>
                      <p className="font-medium">MSc in Information Technology</p>
                      <p>University of Kigali (2024-present)</p>
                    </li>
                    <li>
                      <p className="font-medium">BSc in Computer Science</p>
                      <p>Kigali Independent University (2019-2023)</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-darkBlue/10 p-3 rounded-md mr-3">
                  <Briefcase className="h-5 w-5 text-portfolio-darkBlue" />
                </div>
                <div>
                  <h4 className="font-semibold">Work Experience</h4>
                  <ul className="text-sm text-gray-600 space-y-2 mt-1">
                    <li>
                      <p className="font-medium">Trainer of Software Development</p>
                      <p>Essa Nyarugunga (2024-present)</p>
                    </li>
                    <li>
                      <p className="font-medium">Full Stack Developer</p>
                      <p>Andela (2022-2023)</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-portfolio-lightBlue/10 p-3 rounded-md mr-3">
                  <HeartHandshake className="h-5 w-5 text-portfolio-lightBlue" />
                </div>
                <div>
                  <h4 className="font-semibold">Interests</h4>
                  <ul className="text-sm text-gray-600 space-y-1 mt-1">
                    <li>Playing Football</li>
                    <li>Reading nonfiction books</li>
                    <li>Volunteering in community initiatives</li>
                    <li>Learning new technologies</li>
                    <li>Singing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

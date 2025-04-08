
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// Define mongoose models
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
});

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  technologies: [{ type: String }],
  githubLink: { type: String },
  liveLink: { type: String },
});

const ExperienceSchema = new mongoose.Schema({
  position: { type: String, required: true },
  company: { type: String, required: true },
  description: { type: String },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
});

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: Number },
});

const User = mongoose.model('User', UserSchema);
const Project = mongoose.model('Project', ProjectSchema);
const Experience = mongoose.model('Experience', ExperienceSchema);
const Skill = mongoose.model('Skill', SkillSchema);

// Data to seed
const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('MongoDB connected successfully');
    
    // Clear existing data
    await User.deleteMany({});
    await Project.deleteMany({});
    await Experience.deleteMany({});
    await Skill.deleteMany({});
    
    // Create admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    
    await User.create({
      email: 'admin@example.com',
      password: hashedPassword,
      name: 'Admin User',
    });
    
    // Create projects
    await Project.create([
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
    ]);
    
    // Create experiences
    await Experience.create([
      {
        position: "Trainer of Software Development",
        company: "Essa Nyarugunga",
        description: "As software developers, we train trainees in the use of different technologies in software development, such as Node.js, React, Vue.js, Windows Server, version control, and database management.",
        startDate: "2024-10",
        endDate: "present"
      },
      {
        position: "ICT Technical Officer and Teacher",
        company: "Kayenzi Spring College",
        description: "As an ICT Technical Officer and Teacher, I manage the organization's IT systems, including hardware, software, networks, and security.",
        startDate: "2024",
        endDate: "2024-09"
      },
      {
        position: "Apprenticeship Internal Product",
        company: "Andela",
        description: "Full-stack developer working in DevOps Team, frontend and backend. I specialized in GraphQL, React.js, JavaScript, TypeScript, MongoDB, Java, .NET, focusing on API development, security, performance, and CI/CD pipelines.",
        startDate: "2023-06",
        endDate: "2023-12"
      }
    ]);
    
    // Create skills
    await Skill.create([
      { name: "Node.js", category: "Backend", level: 90 },
      { name: "Express.js", category: "Backend", level: 85 },
      { name: "MongoDB", category: "Database", level: 80 },
      { name: "PostgreSQL", category: "Database", level: 75 },
      { name: "React", category: "Frontend", level: 90 },
      { name: "TypeScript", category: "Language", level: 85 },
      { name: "GraphQL", category: "API", level: 80 },
      { name: "Docker", category: "DevOps", level: 70 }
    ]);
    
    console.log('Data seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();

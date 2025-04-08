
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

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

// Auth middleware
const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    
    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new Error();
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate' });
  }
};

// Routes
// Auth routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create user
    const user = new User({
      email,
      password: hashedPassword,
      name,
    });
    
    await user.save();
    
    // Create token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '7d' }
    );
    
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    
    // Create token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your_jwt_secret',
      { expiresIn: '7d' }
    );
    
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Project routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/projects', auth, async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/projects/:id', auth, async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/projects/:id', auth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Experience routes
app.get('/api/experiences', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/experiences', auth, async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/experiences/:id', auth, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/experiences/:id', auth, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    res.json({ message: 'Experience deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Skills routes
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/skills', auth, async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/skills/:id', auth, async (req, res) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/skills/:id', auth, async (req, res) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Set up server
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

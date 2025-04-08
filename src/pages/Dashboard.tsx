
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, PlusCircle, Trash2, PencilIcon } from "lucide-react";
import { toast } from "@/lib/toast";
import DashboardNav from "@/components/DashboardNav";

// API base URL
const API_URL = 'http://localhost:5000/api';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Form states
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    githubLink: '',
    liveLink: ''
  });
  
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [experienceForm, setExperienceForm] = useState({
    position: '',
    company: '',
    description: '',
    startDate: '',
    endDate: ''
  });
  
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [skillForm, setSkillForm] = useState({
    name: '',
    category: '',
    level: 0
  });

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('portfolioToken');
    if (!token) {
      navigate('/login');
      return;
    }

    setIsAuthenticated(true);
    fetchDashboardData();
  }, [navigate]);

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // For now, use mock data but later will use real API endpoints
      // When backend is ready, uncomment these lines:
      /*
      const projectsRes = await fetch(`${API_URL}/projects`);
      const experiencesRes = await fetch(`${API_URL}/experiences`);
      const skillsRes = await fetch(`${API_URL}/skills`);
      
      if (!projectsRes.ok || !experiencesRes.ok || !skillsRes.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const projectsData = await projectsRes.json();
      const experiencesData = await experiencesRes.json();
      const skillsData = await skillsRes.json();
      
      setProjects(projectsData);
      setExperiences(experiencesData);
      setSkills(skillsData);
      */
      
      // Mock data for now
      setProjects([
        { _id: 1, title: "Predators E-Commerce", description: "An e-commerce platform", technologies: ["PostgreSQL", "Node.js", "Express"] },
        { _id: 2, title: "DevPulse", description: "Performance management platform", technologies: ["React", "GraphQL", "TypeScript"] }
      ]);
      
      setExperiences([
        { _id: 1, position: "Trainer", company: "Essa Nyarugunga", startDate: "2024-10", endDate: "present" },
        { _id: 2, position: "ICT Technical Officer", company: "Kayenzi Spring College", startDate: "2024", endDate: "2024-09" }
      ]);
      
      setSkills([
        { _id: 1, name: "Node.js", category: "Backend", level: 90 },
        { _id: 2, name: "React", category: "Frontend", level: 90 },
        { _id: 3, name: "MongoDB", category: "Database", level: 85 }
      ]);
      
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
      setError("Failed to load dashboard data. Please try again.");
      setIsLoading(false);
    }
  };
  
  // Handle form input changes
  const handleProjectFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProjectForm({
      ...projectForm,
      [e.target.name]: e.target.value
    });
  };
  
  const handleExperienceFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setExperienceForm({
      ...experienceForm,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSkillFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSkillForm({
      ...skillForm,
      [e.target.name]: e.target.name === 'level' ? parseInt(e.target.value) : e.target.value
    });
  };
  
  // Submit handlers
  const handleSubmitProject = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Format technologies as array
      const formattedProject = {
        ...projectForm,
        technologies: projectForm.technologies.split(',').map(tech => tech.trim())
      };
      
      // When backend is ready:
      /*
      const token = localStorage.getItem('portfolioToken');
      const response = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formattedProject)
      });
      
      if (!response.ok) {
        throw new Error('Failed to add project');
      }
      
      const newProject = await response.json();
      setProjects([...projects, newProject]);
      */
      
      // For now, mock the response
      const newProject = {
        _id: Date.now(),
        ...formattedProject
      };
      
      setProjects([...projects, newProject]);
      setShowProjectForm(false);
      setProjectForm({
        title: '',
        description: '',
        image: '',
        technologies: '',
        githubLink: '',
        liveLink: ''
      });
      
      toast.success("Project added successfully!");
    } catch (err) {
      console.error("Error adding project:", err);
      toast.error("Failed to add project. Please try again.");
    }
  };
  
  const handleSubmitExperience = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // When backend is ready:
      /*
      const token = localStorage.getItem('portfolioToken');
      const response = await fetch(`${API_URL}/experiences`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(experienceForm)
      });
      
      if (!response.ok) {
        throw new Error('Failed to add experience');
      }
      
      const newExperience = await response.json();
      setExperiences([...experiences, newExperience]);
      */
      
      // For now, mock the response
      const newExperience = {
        _id: Date.now(),
        ...experienceForm
      };
      
      setExperiences([...experiences, newExperience]);
      setShowExperienceForm(false);
      setExperienceForm({
        position: '',
        company: '',
        description: '',
        startDate: '',
        endDate: ''
      });
      
      toast.success("Experience added successfully!");
    } catch (err) {
      console.error("Error adding experience:", err);
      toast.error("Failed to add experience. Please try again.");
    }
  };
  
  const handleSubmitSkill = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // When backend is ready:
      /*
      const token = localStorage.getItem('portfolioToken');
      const response = await fetch(`${API_URL}/skills`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(skillForm)
      });
      
      if (!response.ok) {
        throw new Error('Failed to add skill');
      }
      
      const newSkill = await response.json();
      setSkills([...skills, newSkill]);
      */
      
      // For now, mock the response
      const newSkill = {
        _id: Date.now(),
        ...skillForm
      };
      
      setSkills([...skills, newSkill]);
      setShowSkillForm(false);
      setSkillForm({
        name: '',
        category: '',
        level: 0
      });
      
      toast.success("Skill added successfully!");
    } catch (err) {
      console.error("Error adding skill:", err);
      toast.error("Failed to add skill. Please try again.");
    }
  };
  
  // Delete handlers
  const handleDeleteProject = async (id: number | string) => {
    try {
      // When backend is ready:
      /*
      const token = localStorage.getItem('portfolioToken');
      const response = await fetch(`${API_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      */
      
      // For now, just update the state
      setProjects(projects.filter((project: any) => project._id !== id));
      toast.success("Project deleted successfully!");
    } catch (err) {
      console.error("Error deleting project:", err);
      toast.error("Failed to delete project. Please try again.");
    }
  };
  
  const handleDeleteExperience = async (id: number | string) => {
    try {
      // When backend is ready:
      /*
      const token = localStorage.getItem('portfolioToken');
      const response = await fetch(`${API_URL}/experiences/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete experience');
      }
      */
      
      // For now, just update the state
      setExperiences(experiences.filter((exp: any) => exp._id !== id));
      toast.success("Experience deleted successfully!");
    } catch (err) {
      console.error("Error deleting experience:", err);
      toast.error("Failed to delete experience. Please try again.");
    }
  };
  
  const handleDeleteSkill = async (id: number | string) => {
    try {
      // When backend is ready:
      /*
      const token = localStorage.getItem('portfolioToken');
      const response = await fetch(`${API_URL}/skills/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete skill');
      }
      */
      
      // For now, just update the state
      setSkills(skills.filter((skill: any) => skill._id !== id));
      toast.success("Skill deleted successfully!");
    } catch (err) {
      console.error("Error deleting skill:", err);
      toast.error("Failed to delete skill. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return <div className="flex justify-center items-center h-screen">Redirecting to login...</div>;
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <main className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-6">Portfolio Dashboard</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center">
            <AlertCircle className="mr-2" size={20} />
            <span>{error}</span>
          </div>
        )}
        
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Projects</span>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-1"
                    onClick={() => setShowProjectForm(!showProjectForm)}
                  >
                    <PlusCircle size={16} /> 
                    {showProjectForm ? 'Cancel' : 'Add Project'}
                  </Button>
                </CardTitle>
                <CardDescription>
                  Manage your portfolio projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showProjectForm && (
                  <form onSubmit={handleSubmitProject} className="space-y-4 mb-8 p-4 border rounded-md bg-gray-50">
                    <h3 className="text-lg font-medium">Add New Project</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input 
                          id="title" 
                          name="title" 
                          value={projectForm.title} 
                          onChange={handleProjectFormChange} 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="image">Image URL</Label>
                        <Input 
                          id="image" 
                          name="image" 
                          value={projectForm.image} 
                          onChange={handleProjectFormChange} 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea 
                        id="description" 
                        name="description" 
                        value={projectForm.description} 
                        onChange={handleProjectFormChange} 
                        required 
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="technologies">Technologies (comma-separated)</Label>
                        <Input 
                          id="technologies" 
                          name="technologies" 
                          value={projectForm.technologies} 
                          onChange={handleProjectFormChange} 
                          placeholder="React, Node.js, MongoDB" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="githubLink">GitHub Link</Label>
                        <Input 
                          id="githubLink" 
                          name="githubLink" 
                          value={projectForm.githubLink} 
                          onChange={handleProjectFormChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="liveLink">Live Link</Label>
                        <Input 
                          id="liveLink" 
                          name="liveLink" 
                          value={projectForm.liveLink} 
                          onChange={handleProjectFormChange} 
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">Add Project</Button>
                  </form>
                )}
                
                <Table>
                  <TableCaption>A list of your projects</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Technologies</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project: any) => (
                      <TableRow key={project._id}>
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>{project.description}</TableCell>
                        <TableCell>
                          {project.technologies && Array.isArray(project.technologies) ? 
                            project.technologies.join(', ') : 
                            project.technologies}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDeleteProject(project._id)}
                          >
                            <Trash2 size={16} className="text-red-500" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Work Experience</span>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-1"
                    onClick={() => setShowExperienceForm(!showExperienceForm)}
                  >
                    <PlusCircle size={16} /> 
                    {showExperienceForm ? 'Cancel' : 'Add Experience'}
                  </Button>
                </CardTitle>
                <CardDescription>
                  Manage your work experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showExperienceForm && (
                  <form onSubmit={handleSubmitExperience} className="space-y-4 mb-8 p-4 border rounded-md bg-gray-50">
                    <h3 className="text-lg font-medium">Add New Experience</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="position">Position</Label>
                        <Input 
                          id="position" 
                          name="position" 
                          value={experienceForm.position} 
                          onChange={handleExperienceFormChange} 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          value={experienceForm.company} 
                          onChange={handleExperienceFormChange} 
                          required 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="exp-description">Description</Label>
                      <Textarea 
                        id="exp-description" 
                        name="description" 
                        value={experienceForm.description} 
                        onChange={handleExperienceFormChange} 
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="startDate">Start Date</Label>
                        <Input 
                          id="startDate" 
                          name="startDate" 
                          value={experienceForm.startDate} 
                          onChange={handleExperienceFormChange} 
                          placeholder="YYYY-MM or YYYY" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="endDate">End Date</Label>
                        <Input 
                          id="endDate" 
                          name="endDate" 
                          value={experienceForm.endDate} 
                          onChange={handleExperienceFormChange} 
                          placeholder="YYYY-MM or present" 
                          required 
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">Add Experience</Button>
                  </form>
                )}
                
                <Table>
                  <TableCaption>A list of your work experience</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Position</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {experiences.map((exp: any) => (
                      <TableRow key={exp._id}>
                        <TableCell className="font-medium">{exp.position}</TableCell>
                        <TableCell>{exp.company}</TableCell>
                        <TableCell>{exp.startDate} - {exp.endDate}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDeleteExperience(exp._id)}
                          >
                            <Trash2 size={16} className="text-red-500" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Skills</span>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-1"
                    onClick={() => setShowSkillForm(!showSkillForm)}
                  >
                    <PlusCircle size={16} /> 
                    {showSkillForm ? 'Cancel' : 'Add Skill'}
                  </Button>
                </CardTitle>
                <CardDescription>
                  Manage your technical skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                {showSkillForm && (
                  <form onSubmit={handleSubmitSkill} className="space-y-4 mb-8 p-4 border rounded-md bg-gray-50">
                    <h3 className="text-lg font-medium">Add New Skill</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Skill Name</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          value={skillForm.name} 
                          onChange={handleSkillFormChange} 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Input 
                          id="category" 
                          name="category" 
                          value={skillForm.category} 
                          onChange={handleSkillFormChange} 
                          placeholder="Frontend, Backend, Database, etc." 
                          required 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="level">Proficiency Level (0-100)</Label>
                      <Input 
                        id="level" 
                        name="level" 
                        type="number" 
                        min="0" 
                        max="100" 
                        value={skillForm.level} 
                        onChange={handleSkillFormChange} 
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full">Add Skill</Button>
                  </form>
                )}
                
                <Table>
                  <TableCaption>A list of your technical skills</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Skill Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Proficiency Level</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {skills.map((skill: any) => (
                      <TableRow key={skill._id}>
                        <TableCell className="font-medium">{skill.name}</TableCell>
                        <TableCell>{skill.category}</TableCell>
                        <TableCell>{skill.level}%</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="icon"
                            onClick={() => handleDeleteSkill(skill._id)}
                          >
                            <Trash2 size={16} className="text-red-500" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;

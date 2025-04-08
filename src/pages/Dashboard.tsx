
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/lib/toast";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ProjectsTab from "@/components/dashboard/ProjectsTab";
import ExperienceTab from "@/components/dashboard/ExperienceTab";
import SkillsTab from "@/components/dashboard/SkillsTab";

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

  if (!isAuthenticated) {
    return <div className="flex justify-center items-center h-screen">Redirecting to login...</div>;
  }

  return (
    <DashboardLayout isLoading={isLoading} error={error}>
      <Tabs defaultValue="projects" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="projects">
          <ProjectsTab projects={projects} setProjects={setProjects} />
        </TabsContent>
        
        <TabsContent value="experience">
          <ExperienceTab experiences={experiences} setExperiences={setExperiences} />
        </TabsContent>
        
        <TabsContent value="skills">
          <SkillsTab skills={skills} setSkills={setSkills} />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Dashboard;

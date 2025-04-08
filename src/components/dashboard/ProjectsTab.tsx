
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { toast } from "@/lib/toast";
import ProjectForm from './ProjectForm';
import ProjectsList from './ProjectsList';

interface ProjectsTabProps {
  projects: any[];
  setProjects: React.Dispatch<React.SetStateAction<any[]>>;
}

const ProjectsTab = ({ projects, setProjects }: ProjectsTabProps) => {
  const [showProjectForm, setShowProjectForm] = useState(false);

  const handleDeleteProject = async (id: number | string) => {
    try {
      // For now, just update the state
      setProjects(projects.filter((project: any) => project._id !== id));
      toast.success("Project deleted successfully!");
    } catch (err) {
      console.error("Error deleting project:", err);
      toast.error("Failed to delete project. Please try again.");
    }
  };

  const handleProjectAdded = (newProject: any) => {
    setProjects([...projects, newProject]);
  };

  return (
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
        <ProjectForm 
          showForm={showProjectForm} 
          setShowForm={setShowProjectForm} 
          onProjectAdded={handleProjectAdded} 
        />
        <ProjectsList 
          projects={projects} 
          onDeleteProject={handleDeleteProject} 
        />
      </CardContent>
    </Card>
  );
};

export default ProjectsTab;

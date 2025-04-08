
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/lib/toast";

interface ProjectFormProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  onProjectAdded: (project: any) => void;
}

const ProjectForm = ({ showForm, setShowForm, onProjectAdded }: ProjectFormProps) => {
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    image: '',
    technologies: '',
    githubLink: '',
    liveLink: ''
  });
  
  const handleProjectFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProjectForm({
      ...projectForm,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmitProject = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Format technologies as array
      const formattedProject = {
        ...projectForm,
        technologies: projectForm.technologies.split(',').map(tech => tech.trim())
      };
      
      // For now, mock the response
      const newProject = {
        _id: Date.now(),
        ...formattedProject
      };
      
      onProjectAdded(newProject);
      setShowForm(false);
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

  if (!showForm) return null;

  return (
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
  );
};

export default ProjectForm;

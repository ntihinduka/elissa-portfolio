
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/lib/toast";

interface ExperienceFormProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  onExperienceAdded: (experience: any) => void;
}

const ExperienceForm = ({ showForm, setShowForm, onExperienceAdded }: ExperienceFormProps) => {
  const [experienceForm, setExperienceForm] = useState({
    position: '',
    company: '',
    description: '',
    startDate: '',
    endDate: ''
  });
  
  const handleExperienceFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setExperienceForm({
      ...experienceForm,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmitExperience = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // For now, mock the response
      const newExperience = {
        _id: Date.now(),
        ...experienceForm
      };
      
      onExperienceAdded(newExperience);
      setShowForm(false);
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

  if (!showForm) return null;

  return (
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
  );
};

export default ExperienceForm;

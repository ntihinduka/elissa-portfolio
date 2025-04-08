
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/lib/toast";

interface SkillFormProps {
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  onSkillAdded: (skill: any) => void;
}

const SkillForm = ({ showForm, setShowForm, onSkillAdded }: SkillFormProps) => {
  const [skillForm, setSkillForm] = useState({
    name: '',
    category: '',
    level: 0
  });
  
  const handleSkillFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSkillForm({
      ...skillForm,
      [e.target.name]: e.target.name === 'level' ? parseInt(e.target.value) : e.target.value
    });
  };
  
  const handleSubmitSkill = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // For now, mock the response
      const newSkill = {
        _id: Date.now(),
        ...skillForm
      };
      
      onSkillAdded(newSkill);
      setShowForm(false);
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

  if (!showForm) return null;

  return (
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
  );
};

export default SkillForm;

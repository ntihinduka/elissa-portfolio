
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { toast } from "@/lib/toast";
import SkillForm from './SkillForm';
import SkillsList from './SkillsList';

interface SkillsTabProps {
  skills: any[];
  setSkills: React.Dispatch<React.SetStateAction<any[]>>;
}

const SkillsTab = ({ skills, setSkills }: SkillsTabProps) => {
  const [showSkillForm, setShowSkillForm] = useState(false);

  const handleDeleteSkill = async (id: number | string) => {
    try {
      // For now, just update the state
      setSkills(skills.filter((skill: any) => skill._id !== id));
      toast.success("Skill deleted successfully!");
    } catch (err) {
      console.error("Error deleting skill:", err);
      toast.error("Failed to delete skill. Please try again.");
    }
  };

  const handleSkillAdded = (newSkill: any) => {
    setSkills([...skills, newSkill]);
  };

  return (
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
        <SkillForm 
          showForm={showSkillForm} 
          setShowForm={setShowSkillForm} 
          onSkillAdded={handleSkillAdded} 
        />
        <SkillsList 
          skills={skills} 
          onDeleteSkill={handleDeleteSkill} 
        />
      </CardContent>
    </Card>
  );
};

export default SkillsTab;

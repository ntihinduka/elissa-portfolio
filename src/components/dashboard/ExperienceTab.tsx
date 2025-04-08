
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { toast } from "@/lib/toast";
import ExperienceForm from './ExperienceForm';
import ExperienceList from './ExperienceList';

interface ExperienceTabProps {
  experiences: any[];
  setExperiences: React.Dispatch<React.SetStateAction<any[]>>;
}

const ExperienceTab = ({ experiences, setExperiences }: ExperienceTabProps) => {
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  const handleDeleteExperience = async (id: number | string) => {
    try {
      // For now, just update the state
      setExperiences(experiences.filter((exp: any) => exp._id !== id));
      toast.success("Experience deleted successfully!");
    } catch (err) {
      console.error("Error deleting experience:", err);
      toast.error("Failed to delete experience. Please try again.");
    }
  };

  const handleExperienceAdded = (newExperience: any) => {
    setExperiences([...experiences, newExperience]);
  };

  return (
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
        <ExperienceForm 
          showForm={showExperienceForm} 
          setShowForm={setShowExperienceForm} 
          onExperienceAdded={handleExperienceAdded} 
        />
        <ExperienceList 
          experiences={experiences} 
          onDeleteExperience={handleDeleteExperience} 
        />
      </CardContent>
    </Card>
  );
};

export default ExperienceTab;

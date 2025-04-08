
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Trash2 } from "lucide-react";

interface SkillsListProps {
  skills: any[];
  onDeleteSkill: (id: number | string) => void;
}

const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  return (
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
                onClick={() => onDeleteSkill(skill._id)}
              >
                <Trash2 size={16} className="text-red-500" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default SkillsList;

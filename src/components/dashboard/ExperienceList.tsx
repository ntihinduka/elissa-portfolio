
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

interface ExperienceListProps {
  experiences: any[];
  onDeleteExperience: (id: number | string) => void;
}

const ExperienceList = ({ experiences, onDeleteExperience }: ExperienceListProps) => {
  return (
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
                onClick={() => onDeleteExperience(exp._id)}
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

export default ExperienceList;

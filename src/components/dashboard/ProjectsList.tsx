
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

interface ProjectsListProps {
  projects: any[];
  onDeleteProject: (id: number | string) => void;
}

const ProjectsList = ({ projects, onDeleteProject }: ProjectsListProps) => {
  return (
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
                onClick={() => onDeleteProject(project._id)}
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

export default ProjectsList;

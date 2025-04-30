import React from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  stack: string[];
  onClick: (id: string) => void;
}

const ProjectCard = ({ id, title, description, stack, onClick }: ProjectCardProps) => {
  return (
    <div className="project-card" onClick={() => onClick(id)}>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-stack">
        {stack.map((icon, index) => (
          <img key={index} src={icon} alt={`stack-${index}`} className="tech-icon" />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

// ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  const { projectId } = useParams();

  return (
    <div className="project-details">
      <h1>Project {projectId} Details</h1>
      <p>Here, you can add the project's details and description.</p>
    </div>
  );
}

export default ProjectDetails;

import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
  // console.log(props);
  return (
    <div className='project-list section'>
      {/* if we have projects then map, otherwise don't do anything. we do this to make sure we have something to map over, especially if we're reaching out to an external database */}
      {projects &&
        projects.map(project => {
          return <ProjectSummary project={project} key={project.id} />;
        })}
    </div>
  );
};

export default ProjectList;

import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  // console.log(props);
  return (
    <div className='project-list section'>
      {/* if we have projects then map, otherwise don't do anything. we do this to make sure we have something to map over, especially if we're reaching out to an external database */}
      {projects &&
        projects.map(project => {
          return (
            //key always need to be with the parent element
            <Link to={'/project/' + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;

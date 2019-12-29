import React from 'react';

function ProjectDetails({ match: { params } }) {
  const id = params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eum, sequi in doloremque aperiam dicta. Fuga voluptatibus dolorum,
            vitae tempore laudantium molestiae, eum ratione, soluta deserunt
            numquam ab? Odio, quia.
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted by Harjoth Khara</div>
          <div>28th December, 8pm</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;

import React from 'react';

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sodales purus quis pulvinar. In eu efficitur nunc. In eu fermentum velit. Cras pharetra mattis magna. Curabitur dictum posuere nunc, eu tristique sem lobortis nec. Sed ac placerat massa, non tristique turpis. Etiam porttitor nisl quis ex imperdiet gravida quis vel sapien.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Net Ninja</div>
          <div>2nd Sep, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;

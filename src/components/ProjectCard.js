import React from 'react';

function ProjectCard (props) {
    return (
        <div class="ProjectCard">
            <h4>{props.title}</h4>
            <h5>{props.completion_date}</h5>
        </div>
    );
}

export default ProjectCard;
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    return (
        <div className="ProjectCard">
            <Link to={"/details/" + props.slug}><h4>{props.title}</h4></Link>
            <h5>{props.completion_date}</h5>
        </div>
    );
}

export default ProjectCard;
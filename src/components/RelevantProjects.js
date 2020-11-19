import React from 'react';
import { Link } from 'react-router-dom';

const RelevantProjects = (props) => {
    const projects = props.projects;

    return (
        <div>
            <ul>
                {projects.map(project => <li><Link to={"/details/" + project.slug}>{project.title}</Link></li>)}
            </ul>
        </div>
    );
}

export default RelevantProjects;
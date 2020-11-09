import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ApiService from '../services/APIService';

function ProjectList () {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([
            {
                title: "React Project",
                completion_date: "2020-01-01T04:13:56"
            },
            {
                title: "Project Blazor",
                completion_date: "2020-10-12T11:46:02"
            }
        ]);
    });

    return (
        <div class="ProjectList">
            <h2>Recent Projects:</h2>
            {projects.map(project => <ProjectCard key={project.id} {...project} />)}
        </div>
    );
}

export default ProjectList;
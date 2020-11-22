import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ApiService from '../services/APIService';
import Loading from './generics/Loading';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getProjects() {
        try {
            setLoading(true);
            const projects = await ApiService.getProjects();
            setProjects(projects);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    if (error) return "Unable to Load Projects";
    return (
        <div className="ProjectList">
            <h2>Recent Projects:</h2>
            {loading ? <Loading /> : projects.map(project => <ProjectCard key={project.id} {...project} />)}
        </div>
    );
}

export default ProjectList;
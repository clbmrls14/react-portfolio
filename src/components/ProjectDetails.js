import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'react-remarkable';
import ApiService from '../services/APIService';

const ProjectDetails = () => {
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let { slug } = useParams();

    const getProject = async () => {
        try {
            setLoading(true);
            const project = await ApiService.getProject(slug);
            setProject(project);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProject();
    }, []);

    if (error) return "Unable to Load Project.";
    if (loading) return "Loading Project...";
    
    return (
        <div>
            <h2>{project.title}</h2>
            <h4>{project.requirements}</h4>
            <p><Markdown>{project.description}</Markdown></p>
        </div>
    );   
}

export default ProjectDetails;
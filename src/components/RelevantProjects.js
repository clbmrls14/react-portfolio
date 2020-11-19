import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../services/APIService';

const RelevantProjects = (props) => {
    let { slug } = useParams();

    const [skill, setSkill] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setSkill(props.skill);
        setProjects(getProjectsBySkill(props.skillType, props.skill));
    }, []);

    async function getProjectsBySkill(skillType, skill) {
        try {
            setLoading(true);
            const projects = await ApiService.getProjectsBySkill(skill.id, skillType);
            setProjects(projects);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    if (error) return "Unable to Load Projects.";
    return (
        <div>
            <h2>{skill.name}</h2>
            <h3>Relevant Projects:</h3>
            <ul>
                {loading ? "Loading projects..." : projects.map(project => <li><a>{project.name}</a></li>)}
            </ul>
        </div>
    );
}

export default RelevantProjects;
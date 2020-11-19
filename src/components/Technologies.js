import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelevantProjects from './RelevantProjects';
import ApiService from '../services/APIService';

const Technologies = () => {
    const [projects, setProjects] = useState([]);
    const [technology, setTechnology] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let { id } = useParams();

    async function getProjects() {
        try {
            setLoading(true);
            await getTechnology();
            const projects = await ApiService.getProjectsBySkill(id, 'technology');
            console.log(projects);
            setProjects(projects);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    async function getTechnology() {
        try {
            const technology = await ApiService.getTechnology(id);
            setTechnology(technology);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    if (error) return "Unable to Load Projects";
    if (loading) return "Loading Projects...";

    return (
        <div>
            <h2>{technology.name}</h2>
            {loading ? "Loading Projects..." : <RelevantProjects projects={projects} />}
        </div>
    );
}

export default Technologies;
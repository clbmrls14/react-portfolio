import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelevantProjects from './RelevantProjects';
import ApiService from '../services/APIService';

const Platforms = () => {
    const [projects, setProjects] = useState([]);
    const [platform, setPlatform] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let { id } = useParams();

    async function getProjects() {
        try {
            setLoading(true);
            await getPlatform();
            const projects = await ApiService.getProjectsBySkill(id, 'platform');
            console.log(projects);
            setProjects(projects);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    async function getPlatform() {
        try {
            const platform = await ApiService.getPlatform(id);
            setPlatform(platform);
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
            <h2>{platform.name}</h2>
            {loading ? "Loading Projects..." : <RelevantProjects projects={projects} />}
        </div>
    );
}

export default Platforms;
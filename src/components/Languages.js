import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelevantProjects from './RelevantProjects';
import ApiService from '../services/APIService';
import Loading from './generics/Loading';

const Languages = () => {
    const [projects, setProjects] = useState([]);
    const [language, setLanguage] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let { id } = useParams();

    async function getProjects() {
        try {
            setLoading(true);
            await getLanguage();
            const projects = await ApiService.getProjectsBySkill(id, 'language');
            console.log(projects);
            setProjects(projects);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    async function getLanguage() {
        try {
            const language = await ApiService.getLanguage(id);
            setLanguage(language);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProjects();
    }, []);

    if (error) return "Unable to Load Projects";
    if (loading) return <Loading />;

    return (
        <div>
            <h2>{language.name}</h2>
            {loading ? "Loading Projects..." : <RelevantProjects projects={projects} />}
        </div>
    );
}

export default Languages;
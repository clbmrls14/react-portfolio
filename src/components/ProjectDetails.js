import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Markdown from 'react-remarkable';
import ApiService from '../services/APIService';

const ProjectDetails = () => {
    const [project, setProject] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let { slug } = useParams();

    const getProject = async () => {
        try {
            setLoading(true);
            const project = await ApiService.getProject(slug);
            const languages = await ApiService.getLanguagesByProject(project.id);
            const platforms = await ApiService.getPlatformsByProject(project.id);
            const technologies = await ApiService.getTechnologiesByProject(project.id);
            setLanguages(languages);
            setPlatforms(platforms);
            setTechnologies(technologies);
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
            <h1>{project.title}</h1>
            <h4>{project.requirements}</h4>
            <p><Markdown>{project.description}</Markdown></p>
            <br/>
            <h2>Relevant Skills:</h2>
            <div>
                <h4>Languages:</h4>
                <ul>
                    {languages.map(language => 
                        <li>
                            <Link to={"/languages/" + language.id}>{language.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
            <div>
                <h4>Platforms:</h4>
                <ul>
                    {platforms.map(platform => 
                        <li>
                            <Link to={"/platforms/" + platform.id}>{platform.name}</Link>
                        </li>)
                    }                
                </ul>
            </div>
            <div>
                <h4>Technologies:</h4>
                <ul>
                    {technologies.map(technology => 
                        <li>
                            <Link to={"/technologies/" + technology.id}>{technology.name}</Link>
                        </li>)
                    }                
                </ul>
            </div>
        </div>
    );   
}

export default ProjectDetails;
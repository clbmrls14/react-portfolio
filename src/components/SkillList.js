import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../services/APIService';

const SkillList = () => {
    const [languages, setLanguages] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getSkills() {
        try {
            setLoading(true);
            const languages = await ApiService.getLanguages();
            const platforms = await ApiService.getPlatforms();
            const technologies = await ApiService.getTechnologies();
            setLanguages(languages);
            setPlatforms(platforms);
            setTechnologies(technologies);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getSkills();
    }, []);

    if (error) return "Unable to Load Skills.";
    if (loading) {
        <div  className="SkillList">
            <h2>My Skills:</h2>
            <h4>Loading Skills...</h4>
        </div>
    }
    return(
        <div className="SkillList">
            <h2>My Skills:</h2>
            <div>
                <h3>Languages:</h3>
                <ul>
                    {languages.map(language => 
                        <li>
                            <Link to={"/languages/" + language.id}>{language.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
            <div>
                <h3>Platforms:</h3>
                <ul>
                    {platforms.map(platform => 
                        <li>
                            <Link to={"/platforms/" + platform.id}>{platform.name}</Link>
                        </li>)
                    }                
                </ul>
            </div>
            <div>
                <h3>Technologies:</h3>
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

export default SkillList;
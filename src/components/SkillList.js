import React, { useEffect, useState } from 'react';
import ApiService from '../services/APIService';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RelevantProjects from './RelevantProjects';

const SkillList = () => {
    const [languages, setLanguages] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [selectedPlatform, setSelectedPlatform] = useState(null);
    const [selectedTechnology, setSelectedTechnology] = useState(null);
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
                            <a href={'/languages/' + language.slug} onClick={() => setSelectedLanguage(language)}>{language.name}</a>
                        </li>)
                    }
                </ul>
            </div>
            <div>
                <h3>Platforms:</h3>
                <ul>
                    {platforms.map(platform => 
                        <li>
                            <a href={'/platforms/' + platform.slug} onClick={() => setSelectedPlatform(platform)}>{platform.name}</a>
                        </li>)
                    }                
                </ul>
            </div>
            <div>
                <h3>Technologies:</h3>
                <ul>
                    {technologies.map(technology => 
                        <li>
                            <a href={'/technologies/' + technology.slug} onClick={() => setSelectedTechnology(technology)}>{technology.name}</a>
                        </li>)
                    }                
                </ul>
            </div>
            {/* <Router>
                <Switch>
                    <Route path="/languages/:slug" render={() => 
                        <RelevantProjects skill={selectedLanguage} skillType="language" />
                    }/>
                    <Route path="/platforms/:slug" render={() => 
                        <RelevantProjects skill={selectedPlatform} skillType="platform" />
                    }/>
                    <Route path="/technologies/:slug" render={() => 
                        <RelevantProjects skill={selectedTechnology} skillType="technology" />
                    }/>
                </Switch>
            </Router> */}
        </div>
        
        
    );
}

export default SkillList;
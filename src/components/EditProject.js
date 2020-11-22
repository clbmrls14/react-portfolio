import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../services/APIService';
import Loading from './generics/Loading';

const EditProject = () => {
    const [title, setTitle] = useState('');
    const [requirements, setRequirements] = useState('');
    const [description, setDescription] = useState('');
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let { slug } = useParams();

    const editProject = () => {
        console.log('Clicked Edit Project');
    }

    const getProject = async () => {
        try {
            const project = await ApiService.getProject(slug);
            setProject(project);
            setTitle(project.title);
            setRequirements(project.requirements);
            setDescription(project.description);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProject();
    }, []);

    if (error) return "Unable to Load Project.";
    if (loading) return <Loading />;

    return(
        <div>
            <h2>Edit Project</h2>
            <form>
                <div>
                    <input 
                        type='text'
                        value={title} 
                        onChange={e => setTitle(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        type='text'
                        value={requirements}
                        onChange={e => setRequirements(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button onClick={editProject}>Edit Project</button>
            </form>
        </div>
    );
}

export default EditProject;
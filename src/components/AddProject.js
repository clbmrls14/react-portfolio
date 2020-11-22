import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import AuthenticatedAPIService from '../services/AuthenticatedAPIService';

const AddProject = () => {
    const [title, setTitle] = useState('');
    const [requirements, setRequirements] = useState('');
    const [description, setDescription] = useState('');

    const { getAccessTokenSilently } = useAuth0();

    const addProject = async () => {
        try {
            const token = await getAccessTokenSilently();
            const newProject = {
                Title: title,
                Requirements: requirements,
                Description: description,
                CompletionDate: Date.now()
            };
            await AuthenticatedAPIService.addProject(token, newProject);
            setTitle('');
            setRequirements('');
            setDescription('');
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <div>
            <h2>Add a New Project</h2>
            <form>
                <div>
                    <input 
                        type='text' 
                        placeholder="Project Title..." 
                        value={title} 
                        onChange={e => setTitle(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        type='text' 
                        placeholder="Project Requirements..."
                        value={requirements}
                        onChange={e => setRequirements(e.target.value)}
                    />
                </div>
                <div>
                    <textarea 
                        placeholder="Project Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <button onClick={addProject}>Add Project</button>
            </form>
        </div>
    );
}

export default AddProject;
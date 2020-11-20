import React, { useState } from 'react';

const AddProject = () => {
    const [title, setTitle] = useState('');
    const [requirements, setRequirements] = useState('');
    const [description, setDescription] = useState('');

    const addProject = () => {
        console.log('Clicked Add Project');
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
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

const endpoint = 'https://my-portfolio-caleb.herokuapp.com/api/';



const AuthenticatedAPIService = {
    
    async addProject(token, newProject) {
        await axios.post(endpoint + "project", newProject, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },

    async editProject(editedProject) {
        await axios.post(endpoint + "project/editproject", editedProject);
    },

    async removeProject(project) {
        await axios.post(endpoint + "project/removeproject", project);
    },

    async assignSkill(skillType, skillName, projectId) {
        var skill = {
            SkillType: skillType,
            Name: skillName,
            ProjectId: projectId
        };
        await axios.post(endpoint + "project.assign/", skill)
    }

};

export default AuthenticatedAPIService;
import axios from 'axios';

const endpoint = 'https://my-portfolio-caleb.herokuapp.com/api/';

const ApiService = {

    async getProjects() {
        try {
            const path = endpoint + 'project/';
            const result = await axios.get(path);
            const projects = JSON.parse(result);
            console.log(projects);
            return projects;
        } catch(error) { 
            console.log("Error: ", error);
        }
    }
}

ApiService.instance = null;

export default ApiService;
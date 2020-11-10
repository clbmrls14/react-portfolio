import axios from 'axios';

const endpoint = 'https://my-portfolio-caleb.herokuapp.com/api/';

const ApiService = {

    async getProjects() {
        const projects = await axios.get(endpoint + 'project')
            .then(response => response.data);

        console.log(projects);
        return projects;
    }
}

export default ApiService;
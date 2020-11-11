import axios from 'axios';

const endpoint = 'https://my-portfolio-caleb.herokuapp.com/api/';

const ApiService = {

    async getProjects() {
        const projects = await axios.get(endpoint + 'project')
            .then(response => response.data);

        console.log(projects);
        return projects;
    },

    async getLanguages() {
        const languages = await axios.get(endpoint + 'project/getlanguages')
            .then(response => response.data);

        console.log(languages);
        return languages;
    },

    async getPlatforms() {
        const platforms = await axios.get(endpoint + 'project/getplatforms')
            .then(response => response.data);

        console.log(platforms);
        return platforms;
    },

    async getTechnologies() {
        const technologies = await axios.get(endpoint + 'project/gettechnologies')
            .then(response => response.data);

        console.log(technologies);
        return technologies;
    },
}

export default ApiService;
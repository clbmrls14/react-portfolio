import axios from 'axios';

const endpoint = 'https://my-portfolio-caleb.herokuapp.com/api/';

const ApiService = {

    async getProjects() {
        const projects = await axios.get(endpoint + 'project')
            .then(response => response.data);

        console.log(projects);
        return projects;
    },

    async getProject(slug) {
        const project = await axios.get(endpoint + 'project/' + slug)
            .then(response => response.data);

        console.log(project);
        return project;
    },

    async getLanguages() {
        const languages = await axios.get(endpoint + 'project/getlanguages')
            .then(response => response.data);

        console.log(languages);
        return languages;
    },

    async getLanguage(id) {
        const language = await axios.get(endpoint + 'project/getlanguagebyid?id=' + id)
            .then(response => response.data);

        console.log(language);
        return language;
    },

    async getLanguagesByProject(id) {
        const languages = await axios.get(endpoint + 'project/getlanguagebyproduct?id=' + id)
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

    async getPlatform(id) {
        const platform = await axios.get(endpoint + 'project/getplatformbyid?id=' + id)
            .then(response => response.data);

        console.log(platform);
        return platform;
    },

    async getPlatformsByProject(id) {
        const platforms = await axios.get(endpoint + 'project/getplatformbyproduct?id=' + id)
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

    async getTechnology(id) {
        const technology = await axios.get(endpoint + 'project/gettechnologybyid?id=' + id)
            .then(response => response.data);

        console.log(technology);
        return technology;
    },

    async getTechnologiesByProject(id) {
        const technologies = await axios.get(endpoint + 'project/gettechbyproduct?id=' + id)
            .then(response => response.data);

        console.log(technologies);
        return technologies;
    },

    async getProjectsBySkill(id, skillType) {
        var projects;
        if (skillType === 'language') {
            projects = await axios.get(endpoint + 'project/getprojectbylanguage?id=' + id)
            .then(response => response.data);
        }
        if (skillType === 'platform') {
            projects = await axios.get(endpoint + 'project/getprojectbyplatform?id=' + id)
            .then(response => response.data);
        }
        if (skillType === 'technology') {
            projects = await axios.get(endpoint + 'project/getprojectbytechnology?id=' + id)
            .then(response => response.data);
        }
        
        console.log(projects);
        return projects;
    },

    // async addNewProject()
}

export default ApiService;
import * as fs from "fs"

const dataFolder = "./data";
const fileName = dataFolder + "/projects.json";

const addProjectAndWriteToFile = (project) => {
    const projects = getAllProjectsFromFile();
    projects.push(project);

    saveProjectsToFile(projects);
}

const updateProjectAndWriteToFile = (updatedProject) => {
    const projects = getAllProjectsFromFile();
    const projectToEditIndex = projects.findIndex(project => project.id === updatedProject.id);
    projects[projectToEditIndex] = updatedProject;

    saveProjectsToFile(projects);
}

const deleteProjectAndWriteToFile = (id) => {
    const projects = getAllProjectsFromFile();
    projects = projects.filter(x => x.id !== id);

    saveProjectsToFile(projects);
}

const getAllProjectsFromFile = () => {
    if (fs.existsSync(fileName)) {
        const rawData = fs.readFileSync(fileName);
        return JSON.parse(rawData);
    }

    return [];
}

const saveProjectsToFile = (projects) => {
    if (!fs.existsSync(dataFolder)) {
        fs.mkdir(dataFolder);
    }

    fs.writeFileSync(fileName, JSON.stringify(projects));
}

export { addProjectAndWriteToFile, getAllProjectsFromFile, updateProjectAndWriteToFile, deleteProjectAndWriteToFile }
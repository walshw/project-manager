export class Project {
    constructor(name, id) {
        this.id = id === null ? Date.now() : id;
        this.name = name;
        this.creationDate = new Date();
        this.isComplete = false;
    }
}
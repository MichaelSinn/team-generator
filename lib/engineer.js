const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // Get the github of the employee
    getGithub() {
        return this.github;
    }
    // Get the role of the employee
    getRole() {
        return "Engineer";
    }
}
// Export the class
module.exports = Engineer;
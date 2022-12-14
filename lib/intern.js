const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // Get the school of the employee
    getSchool() {
        return this.school;
    }
    // Get the role of the employee
    getRole() {
        return "Intern";
    }
}
// Export the class
module.exports = Intern;
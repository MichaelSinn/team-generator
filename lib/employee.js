class Employee {
    // Constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // Get the name of the employee
    getName() {
        return this.name;
    }
    // Get the id of the employee
    getId() {
        return this.id;
    }
    // Get the id of the employee
    getEmail() {
        return this.email;
    }
    // Get the role of the employee
    getRole() {
        return "Employee";
    }
}
// Export the class
module.exports = Employee;
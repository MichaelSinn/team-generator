const Employee = require("../lib/employee");

describe("Employee", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing the following properties: 'name', 'id', 'email'", ()=>{
           const employee = new Employee();

           expect("name" in employee && "id" in employee && "email" in employee).toEqual(true);
        });

        it ("should return the name of the employee", ()=>{
            const name = "Fred";
            const employee = new Employee(name, 1, "email@email.com");
            expect(employee.name).toEqual(name);
        });

        it ("should return the id of the employee", ()=>{
            const id = 1;
            const employee = new Employee("Fred", id, "email@email.com");
            expect(employee.id).toEqual(id);
        });

        it ("should return the email of the employee", ()=>{
            const email = "email@email.com";
            const employee = new Employee("Fred", 1, email);
            expect(employee.email).toEqual(email);
        });
    });

    describe("getName", ()=>{
        it("should return the name of the employee", ()=>{
            const name = "Fred";
            const employee = new Employee(name, 1, "email@email.com");
            expect(employee.getName()).toEqual(name);
        });
    });

    describe("getId", ()=>{
        it("should return the id of the employee", ()=>{
            const id = 1;
            const employee = new Employee("Fred", id, "email@email.com");
            expect(employee.getId()).toEqual(id);
        });
    });

    describe("getEmail", ()=>{
        it("should return the name of the employee", ()=>{
            const email = "email@email.com";
            const employee = new Employee("Fred", 1, email);
            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe("getRole", ()=>{
        it("should return the role of the employee", ()=>{
            const role = "Employee";
            const employee = new Employee("Fred", 1, "email@gmail.com");
            expect(employee.getRole()).toEqual(role);
        });
    });
});
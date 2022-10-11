const Intern = require("../lib/intern");

describe("Employee", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing the following properties: 'name', 'id', 'email', 'school'", ()=>{
            const intern = new Intern();

            expect("name" in intern && "id" in intern && "email" in intern && "school" in intern).toEqual(true);
        });

        it ("should return the name of the intern", ()=>{
            const name = "Fred";
            const intern = new Intern(name, 1, "email@email.com", "school");
            expect(intern.name).toEqual(name);
        });

        it ("should return the id of the intern", ()=>{
            const id = 1;
            const intern = new Intern("Fred", id, "email@email.com", "school");
            expect(intern.id).toEqual(id);
        });

        it ("should return the email of the intern", ()=>{
            const email = "email@email.com";
            const intern = new Intern("Fred", 1, email, "school");
            expect(intern.email).toEqual(email);
        });

        it ("should return the school of the intern", ()=>{
            const school = "school";
            const intern = new Intern("Fred", 1, "email", school);
            expect(intern.school).toEqual(school);
        });
    });

    describe("getName", ()=>{
        it("should return the name of the intern", ()=>{
            const name = "Fred";
            const intern = new Intern(name, 1, "email@email.com", "school");
            expect(intern.getName()).toEqual(name);
        });
    });

    describe("getId", ()=>{
        it("should return the id of the intern", ()=>{
            const id = 1;
            const intern = new Intern("Fred", id, "email@email.com", "school");
            expect(intern.getId()).toEqual(id);
        });
    });

    describe("getEmail", ()=>{
        it("should return the name of the intern", ()=>{
            const email = "email@email.com";
            const intern = new Intern("Fred", 1, email, "school");
            expect(intern.getEmail()).toEqual(email);
        });
    });

    describe("getGithub", ()=>{
        it("should return the GitHub username of the intern", ()=>{
            const school = "school";
            const intern = new Intern("Fred", 1, "email", school);
            expect(intern.getSchool()).toEqual(school);
        })
    });

    describe("getRole", ()=>{
        it("should return the role of the intern", ()=>{
            const role = "Intern";
            const intern = new Intern("Fred", 1, "email@gmail.com", "school");
            expect(intern.getRole()).toEqual(role);
        });
    });
});
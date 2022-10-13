const Engineer = require("../lib/engineer");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing the following properties: 'name', 'id', 'email', 'github'", () => {
            const engineer = new Engineer();

            expect("name" in engineer && "id" in engineer && "email" in engineer && "github" in engineer).toEqual(true);
        });

        it("should return the name of the engineer", () => {
            const name = "Fred";
            const engineer = new Engineer(name, 1, "email@email.com", "github");
            expect(engineer.name).toEqual(name);
        });

        it("should return the id of the engineer", () => {
            const id = 1;
            const engineer = new Engineer("Fred", id, "email@email.com", "github");
            expect(engineer.id).toEqual(id);
        });

        it("should return the email of the engineer", () => {
            const email = "email@email.com";
            const engineer = new Engineer("Fred", 1, email, "github");
            expect(engineer.email).toEqual(email);
        });

        it("should return the github of the engineer", () => {
            const github = "github";
            const engineer = new Engineer("Fred", 1, "email", github);
            expect(engineer.github).toEqual(github);
        });
    });

    describe("getName", () => {
        it("should return the name of the engineer", () => {
            const name = "Fred";
            const engineer = new Engineer(name, 1, "email@email.com", "github");
            expect(engineer.getName()).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return the id of the engineer", () => {
            const id = 1;
            const engineer = new Engineer("Fred", id, "email@email.com", "github");
            expect(engineer.getId()).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return the name of the engineer", () => {
            const email = "email@email.com";
            const engineer = new Engineer("Fred", 1, email, "github");
            expect(engineer.getEmail()).toEqual(email);
        });
    });

    describe("getGithub", () => {
        it("should return the GitHub username of the engineer", () => {
            const github = "github";
            const engineer = new Engineer("Fred", 1, "email", github);
            expect(engineer.getGithub()).toEqual(github);
        })
    });

    describe("getRole", () => {
        it("should return the role of the engineer", () => {
            const role = "Engineer";
            const engineer = new Engineer("Fred", 1, "email@gmail.com", "github");
            expect(engineer.getRole()).toEqual(role);
        });
    });
});
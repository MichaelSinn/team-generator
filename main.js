const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const {generateHtml} = require("./src/generateHtml");
const {generateCss} = require("./src/generateCss");

// Prompts for the different types of employee
const menuPrompts = [
    {
        type: "list",
        name: "menuOptions",
        message: "Select the type of employee you would like to add",
        choices: ["Engineer", "Intern", "Finish Building Team"]
    }
];

// Manager Prompts
const managerPrompts = [
    {
        type: "input",
        name: "name",
        message: "Please input the Manager's name"
    },
    {
        type: "input",
        name: "id",
        message: "Please input the Manager's id"
    },
    {
        type: "input",
        name: "email",
        message: "Please input the Manager's email"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please input the Manager's office number"
    },
];

// Engineer prompts
const engineerPrompts = [
    {
        type: "input",
        name: "name",
        message: "Please input the Engineer's name"
    },
    {
        type: "input",
        name: "id",
        message: "Please input the Engineer's id"
    },
    {
        type: "input",
        name: "email",
        message: "Please input the Engineer's email"
    },
    {
        type: "input",
        name: "github",
        message: "Please input the Engineer's GitHub"
    },
];

// Intern prompts
const internPrompts = [
    {
        type: "input",
        name: "name",
        message: "Please input the Intern's name"
    },
    {
        type: "input",
        name: "id",
        message: "Please input the Intern's id"
    },
    {
        type: "input",
        name: "email",
        message: "Please input the Intern's email"
    },
    {
        type: "input",
        name: "school",
        message: "Please input the Intern's school"
    },
];

const team = {
    manager: null,
    engineers: [],
    interns: []
};

function menu() {
    inquirer.prompt(menuPrompts).then(responses => { // Ask the prompts for the menu
        console.log(responses);
        if (responses["menuOptions"] === "Engineer") {
            inquirer.prompt(engineerPrompts).then(responses => {
                const {name, id, email, github} = responses;
                team.engineers.push(new Engineer(name, id, email, github));
                menu();
            });
        } else if (responses["menuOptions"] === "Intern") {
            inquirer.prompt(internPrompts).then(responses => {
                const {name, id, email, school} = responses;
                team.interns.push(new Intern(name, id, email, school));
                menu();
            });
        } else if (responses["menuOptions"] === "Finish Building Team") {
            console.log(team);
            generateHtml(team);
            generateCss();
            console.log("Goodbye!");
        }
    }).catch(e => {
        // Catch any errors
        console.error(e);
    });
}

function init() {
    inquirer.prompt(managerPrompts).then(responses => {
        const {name, id, email, officeNumber} = responses;
        team.manager = new Manager(name, id, email, officeNumber);
        menu()
    });
}

init();

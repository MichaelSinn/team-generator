const fs = require("fs");

function generateHtml(team) {
    const {manager, engineers, interns} = team;

    let managerCard = `<article class="card">
            <section class="card-header manager">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </section>

            <section class="card-content">
                <ul>
                    <li>ID: ${manager.id}</li>
                    <li>Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li>Office number: ${manager.officeNumber}</li>
                </ul>
            </section>
        </article>`;

    let internCards = [];
    interns.forEach(intern => {
        let internCard = `<article class="card">
            <section class="card-header intern">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </section>

            <section class="card-content">
                <ul>
                    <li>ID: ${intern.id}</li>
                    <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li>School ${intern.school}</li>
                </ul>
            </section>
        </article>`;
        internCards.push(internCard);
    });

    let engineerCards = [];
    engineers.forEach(engineer => {
        let engineerCard = `<article class="card">
            <section class="card-header engineer">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </section>

            <section class="card-content">
                <ul>
                    <li>ID: ${engineer.id}</li>
                    <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                </ul>
            </section>
        </article>`;
        engineerCards.push(engineerCard);
    });

    let html = '<!DOCTYPE html>\n' +
        '<html lang="en">\n' +
        '<head>\n' +
        '    <meta charset="UTF-8">\n' +
        '    <title>My Team</title>\n' +
        '    <link rel="stylesheet" href="./main.css">\n' +
        '</head>\n' +
        '<body>\n' +
        '    <header class="column">\n' +
        '        <h1>My Team</h1>\n' +
        '    </header>\n' +
        '    <main class="row">';

    html += managerCard;
    engineerCards.forEach(card => {
        html += card;
    });
    internCards.forEach(card => {
        html += card;
    });
    html += '    </main>\n' +
        '</body>\n' +
        '</html>';

    fs.writeFile("./dist/index.html", html, (err) => {
        err ? console.error(err) : console.log("Successfully wrote HTML file.");
    });
}

module.exports = {
    generateHtml: generateHtml
};
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/page-template');
teamData = []

// gather info for manager
const managerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee id?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the manager's employee id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the manager's office number.");
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamData.push(manager);
    })
    .then(routing);
};

// gather info for engineer
const engineerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the engineer's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee id?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the engineer's employee id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the engineer's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the engineer's GitHub username.");
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamData.push(engineer);
    })
    .then(routing);
};

// gather info for intern
const internInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the intern's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee id?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the intern's employee id.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the intern's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school name?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter the intern's school name.");
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamData.push(intern);
    })
    .then(routing);
};

// routing to engineer or intern
const routing = () => {
    return inquirer.prompt([
        {
            type: "rawlist",
            name: "role",
            message: "Select a role for the next employee:",
            choices: ["Engineer", "Intern", "All members are entered"]
        }
    ])
    .then(({ role }) => {
        switch (role) {
            case 'Engineer':
                engineerInfo();
                break;
            case 'Intern':
                internInfo();
                break;
            case "All members are entered":
                writeToFile(generateHTML(teamData));
                break;
        }
    })
}

// function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/team.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

managerInfo()
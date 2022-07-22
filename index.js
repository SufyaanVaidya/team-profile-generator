const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const fs = require('fs');
const inquirer = require('inquirer');

const fileName = './dist/index.html';


const teamQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team members name?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the team members role?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team members id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team members email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the team members github?',
        when: (input) => input.role == 'Engineer'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Managers office number?',
        when: (input) => input.role == 'Manager'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the Interns School?',
        when: (input) => input.role == 'Intern'
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add more team members?',
        default: false
    }
];

function writeFile(data) {
    const htmlFile = generateHTML(data);
    fs.writeFile(fileName, htmlFile, err => {
        if (err) {
            console.log(err)
        }
        console.log('Team Profile Generated!')
    });
}

const answersArray = [];

function init () {
    inquirer
    .prompt(teamQuestions)
    .then(function(data) {
        let { name, id, email, role, github, school, officeNumber } = data;
        let employee;
        if (role == 'Manager') {
            employee = new Manager (name, id, email, officeNumber)
        }
        if (role == 'Engineer') {
            employee = new Engineer (name, id, email, github)
        }
        if (role == 'Intern') {
            employee = new Intern (name, id, email, school)
        }
        answersArray.push(employee);

        confirmMoreEmployees(data);

    })

}

function confirmMoreEmployees (data) {
    let { confirmAddEmployee } = data;
    if (confirmAddEmployee) {
        return init(answersArray)
    } else {
        writeFile(answersArray);
        return console.log(answersArray);
    }
}



init()
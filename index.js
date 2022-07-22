const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const fs = require('fs');
const inquirer = require('inquirer');

const fileName = './dist/index.html';
const answersArray = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team managers name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ('You Must Enter The Managers Name!');
                return false; 
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the team members role?',
        choices: ['Manager'],
        
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team members id?',
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log ('You Must Enter The Managers ID!')
                return false
                
            } else {
                
                return true; 
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team members email?',
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log ('Please enter an email!')
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Managers office number?',
        when: (input) => input.role == 'Manager'
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Please add the rest of your team members.',
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



function init () {
    inquirer
    .prompt(managerQuestions)
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

const employeeAddQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team members name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ('You Must Enter The Team Members Name!');
                return false; 
            }
        }

    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the team members role?',
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team members id?',
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log ('You Must Enter The Team Members ID!')
                return false
                
            } else {
                
                return true; 
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team members email?',
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log ('Please enter an email!')
                return false; 
            }
        }
        
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the team members github?',
        when: (input) => input.role == 'Engineer'
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
        message: 'Please add the rest of your team members.',
        default: false
    }
]

function initMoreEmployees () {
    inquirer
    .prompt(employeeAddQuestions)
    .then(function(data) {
        let { name, id, email, role, github, school } = data;
        let employee;
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
        return initMoreEmployees(answersArray)
    } else {
        writeFile(answersArray);
        return answersArray;
    }
}



init()
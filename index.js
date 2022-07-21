const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const fs = require('fs');
const inquirer = require('inquirer');

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
        choices: ['Manager, Engineer, Intern']
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
];
require('dotenv').config();
const mysql = require('mysql2');
const inquirer = require('inquirer');

const mainMenu = {
    type: 'list',
    name: 'mainMenuAnswer',
    message: `Welcome to the Employee Tracking Application.
What would you like to do here?`,
    choices: [
        'View all Employees',
        'View all Roles',
        'View all Departments',
        'Update Employee Role',
        'Add Employee',
        'Add Role',
        'Add Department',
        'Quit'
    ]
}

const getMainMenu = () => {
    inquirer.prompt(mainMenu)
        .then((response) => {
            switch(response.mainMenuAnswer){
                case 'View all Employees':
                    // Fetch/Render all Employees
                    break;
                case 'View all Roles':
                    // Fetch/Render all Roles
                    break;
                case 'View all Departments':
                    // Fetch/Render all Departments
                    break;
                case 'Update Employee Role':
                    // Update (Post?) Employee Role
                    break;
                case 'Add Employee':
                    // Add (POST) employee
                    break;
                case 'Add Role':
                    // Add (POST) Role
                    break;
                case 'Add Department':
                    // Add (POST) Department
                    break;
                default:
                    console.log('Thank you for using Employee Tracking.')
                    console.log('God Be With Ye!')
                    process.exit();
            }
        })
}
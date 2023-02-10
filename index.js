require('dotenv').config();
const mysql = require('mysql2');
const inquirer = require('inquirer');
const get = require('./getFunctions');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
)

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
                    renderEmployees();
                    break;
                case 'View all Roles':
                    // Fetch/Render all Roles
                    renderRoles();
                    break;
                case 'View all Departments':
                    // Fetch/Render all Departments
                    renderDepartments();
                    break;
                case 'Update Employee Role':
                    // Update (Post?) Employee Role
                    updateEmpRole();
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

const renderEmployees = async() => {
    db.query(`SELECT employee.id, employee.first_name AS Name, employee.last_name AS Surname, role.title AS Role FROM employee JOIN role ON role.id=employee.role_id`, (err, results) => {
        console.table(results);
        getMainMenu();
    });
}
const getEmployeeNames = () => {
    return new Promise((res, rej) =>
    db.query(`SELECT employee.first_name FROM employee`, (err, results) => {
        if(err){
            rej(err);
        }
        res(results);
    })
    );
}
const getRoles = () => {
    return new Promise((res, rej) =>
    db.query(`SELECT role.title FROM role`, (err, results) => {
        if(err){
            rej(err);
        }
        res(results);
    })
    );
}
const updateEmployeeQuestions = [
    {
        type: 'list',
        name: 'updateEmpAnswer',
        message: 'Which employee would you like to update?',
    },
    {
        type: 'list',
        name: 'updateRoleAnswer',
        message: 'Which role would you like to give them?'
    }
];

const renderRoles = async() => {
    db.query(`SELECT role.title AS Role, department.name AS Department
FROM role
JOIN department ON department.id=role.department_id`, (err, results) => {
    console.table(results);
    getMainMenu();
});
}

const renderDepartments = async() => {
    db.query(`SELECT department.name AS Department, department.id
FROM department`, (err, results) => {
    console.table(results);
    getMainMenu();
})
}

const updateEmpRole = async() => {
    getEmployeeNames().then(employeeNames =>{
        console.log(employeeNames);
        inquirer.prompt({ ...updateEmployeeQuestions[0], choices: employeeNames.map(({first_name}) => first_name) })
        .then((response1) => {
            getRoles().then(roles => {
                inquirer.prompt({ ...updateEmployeeQuestions[1], choices: roles.map(({title}) => title) })
                .then((response2) => {
                    console.log(response1);
                    
                    db.query(`UPDATE employee
SET role_id = (SELECT role.id FROM role WHERE role.title = ?)
WHERE first_name = ?`, [response2, response1], (err, results) => {
                        if(err) {
                            console.log(err);
                        }
                        getMainMenu();
                    })
                })
            })
        });
    }); 
}

const addEmplpyee = async() => {
    
}

const addRole = async() => {

}

const addDepartment = async() => {

}

const init = () => {
    getMainMenu();
}

init();
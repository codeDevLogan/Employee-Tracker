const mysql = require('mysql2');

const getEmployeeNames = async() => {
    db.query(`SELECT employee.id, employee.first_name AS Name, employee.last_name AS Surname FROM employee`, (err, results) => {
        return results;
    });
}

const getRoles = async() => {
    db.query(`SELECT role.title AS Role
FROM role`, (err, results) => {
    return results;
})
}

module.exports = {
    getEmployeeNames,
    getRoles
}
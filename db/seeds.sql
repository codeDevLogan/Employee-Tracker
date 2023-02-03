INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Sales");

INSERT INTO TABLE role (title, salary, department_id)
VALUES ("Sales Lead", 100000.00, 4),
       ("Salesman", 80000.00, 4),
       ("Lead Engineer", 150000.00, 1),
       ("Software Engineer", 120000.00, 1),
       ("Account Manager", 160000.00, 2),
       ("Accountant", 125000.00, 2),
       ("Legal Team Lead", 250000.00, 3),
       ("Lawyer", 190000.00, 3);

INSERT INTO TABLE employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
       ("Mike", "Chan", 2, 1),
       ("Jim", "Jones", 3, NULL),
       ("Sal", "Loue", 4, 3),
       ("Henry", "Smith", 5, NULL),
       ("Tom", "Sally", 6, 5),
       ("Joe", "Barnes", 7, NULL),
       ("Ken", "Bridge", 8, 7);
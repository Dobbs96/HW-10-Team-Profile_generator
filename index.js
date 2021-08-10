const inquirer = require("requirer");
const fs = require("fs");
const Employee = require("./assets/lib/Employee");
const Engineer = require("./assets/lib/Engineer");
const Intern = require("./assets/lib/Intern");
const Manager = require("./assets/lib/Manager");

const emps = [];

// startGenerator()
// // startHTML()
// // addEmps()
// // appendHTML()
// // endHTML

// addEmps()
// // inquirer promps
// // // input, What is the Employees name?, name
// // // input, What is the Employees ID?, id
// // // input, What is the Employees Email?, email
// // // list, What is the Employees Role? ; {Engineer, Intern, Manager}, Role
// // // if Engineer --- input, What is the Engineers GitHub?, id
// // // if Intern --- input, What is the Interns School?, id
// // // if Manager --- input, What is the Managers office number?, id
// // // // add Employee to emps array
// // // list, Are their more Employees to add? ; {Yes, No} , moreEmps
// // // if Yes --- Start Again addEmps()
// // // if No --- end writeHTML()

// startHTML()
// // appendHTML() for each class pull from emps array
// // // if Engineer append engineerHTML
// // // if Intern append interHTML
// // // if Manager append managerHTML
// Remove Employee from emps array
// append end html = endHTML()

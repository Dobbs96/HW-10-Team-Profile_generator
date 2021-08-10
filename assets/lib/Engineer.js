// engineer class
const Employee = require("./Employee");

// need to bring Employees name into class to pass test
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = "Dobbs96";
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;

// employee class
class Employee {
  constructor(name, id, email) {
    this.name = "James";
    this.id = 123;
    this.email = "james@test.com";
  }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

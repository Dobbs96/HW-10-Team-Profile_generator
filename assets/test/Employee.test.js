// link to Employee class

// Employee
describe("Employee Info", () => {
  // name
  // // it should have a name input
  it("should have a Name input", () => {
    const name = "James";
    const emp = new Employee(name);
    expect(emp.name).toEqual(name);
    // //  name = name
  });
  // id
  // // it should have a id input
  it("should have a ID input", () => {
    const id = 123;
    const emp = new Employee("James", id);
    expect(emp.id).toEqual(id);
    // //  id = id
  });
  //email
  // // it should have a email input
  it("should have a Email input", () => {
    const email = "james@test.com";
    const emp = new Employee("James", 123, email);
    expect(emp.email).toEqual(email);
    // //  email = email
  });
  // getName()
  // // it should getName
  it("should get Name", () => {
    const name = "James";
    const emp = new Employee(name);
    expect(emp.getName()).toEqual(name);
    // // return name
  });
  // getID()
  // // it should getId
  it("should get ID", () => {
    const id = 123;
    const emp = new Employee("James", id);
    expect(emp.getID()).toEqual(id);
    // // return ID
  });
  // getEmail()
  // // it should getEmail
  it("should get Email", () => {
    const email = "james@test.com";
    const emp = new Employee("James", 123, email);
    expect(emp.getEmail()).toEqual(email);
    // // return Email
  });
  // getRole() -- returns Empoyee
  // // it should getRole as Employee
  it("should get Role", () => {
    const role = "Employee";
    const emp = new Employee("James", 123, "james@test.com");
    expect(emp.getRole()).toEqual(role);

    // // return role Employee
  });
});

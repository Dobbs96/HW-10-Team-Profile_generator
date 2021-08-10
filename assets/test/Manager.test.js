// link to manager class
const Manager = require("../lib/Manager");

describe("Manager", () => {
  // officeNumber
  // // it should have a officenumber input
  it("should have a officenumber input", () => {
    const officeNum = 325;
    const emp = new Manager("James", 123, "james@test.com", officeNum);
    // // officeNum = officeNum
    expect(emp.officeNum).toEqual(officeNum);
  });

  describe("getRole", () => {
    // getRole()
    // // it should overridden to return Manager
    it("should overridden to return Manager", () => {
      const role = "Manager";
      const emp = new Manager("James", 123, "james@test.com", 325);
      // // expect role = role
      expect(emp.getRole()).toEqual(role);
    });
  });
});

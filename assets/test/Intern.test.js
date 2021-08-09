// link to intern class

describe("Intern", () => {
  // school
  // // it should have a school input
  it("should have a school input", () => {
    const school = "KBCC";
    const emp = new Intern("James", 123, "james@test.com", school);
    // // expect school = school
    expect(emp.school).toEqual(school);
  });
  describe("getRole", () => {
    // getRole()
    // // it should overridden to return intern
    it("should overridden to return intern", () => {
      const role = "Intern";
      const emp = new Intern("James", 123, "james@test.com", "KBCC");
      // // expect role = role
      expect(emp.getRole()).toEqual(role);
    });
  });
});

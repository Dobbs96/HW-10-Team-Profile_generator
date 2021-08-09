// link to engineer class

describe("GitHub UserName", () => {
  // github username
  // // it should have a github input
  it("should have a github input", () => {
    const github = "Dobbs96";
    const emp = new Engineer("James", 123, "james@test.com", github);
    // // expect github = github
    expect(emp.github).toEqual(github);
  });
  describe("getRole", () => {
    // getRole()
    // // it should overridden to return Engineer
    it("should overridden to return Engineer", () => {
      const role = "Engineer";
      const emp = new Engineer("James", 123, "james@test.com", "Dobbs96");
      // // expect role = role
      expect(emp.getRole()).toEqual(role);
    });
  });
});

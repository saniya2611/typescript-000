var cl = console.log;
var person = {
    fName: "Jhon",
    lName: "Doe",
    age: 30,
    skills: ["HTML", "css", "Javascript", "Typescript", "Angular"]
};
for (var _i = 0, _a = person.skills; _i < _a.length; _i++) {
    var i = _a[_i];
    cl(i.toUpperCase());
}
var person1 = {
    fName: "James",
    lName: "Bond",
    age: 47,
    userRole: [2, "Admin"]
};
//person1.userRole[0] = "Admin"
person1.userRole.push("Hello");
person1.userRole.pop();
cl(person1);

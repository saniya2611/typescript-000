var cl = console.log;
//enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Candidate"] = 1] = "Candidate";
    Role[Role["super_Admin"] = 2] = "super_Admin"; //102
})(Role || (Role = {}));
var person = {
    fName: "James",
    lName: "Bond",
    age: 55,
    // userRole : "super_Admin"
    userRole: 2
};
cl(Role.Candidate);
cl(Role.super_Admin);
cl(Role.Admin);
if (person.userRole === 2) {
    cl("show userRole");
}
//flipkart product delivery
var productStatus;
(function (productStatus) {
    productStatus[productStatus["ordered"] = 0] = "ordered";
    productStatus[productStatus["shipped"] = 1] = "shipped";
    productStatus[productStatus["readyToDispatched"] = 2] = "readyToDispatched";
    productStatus[productStatus["ArrivingTomorrow"] = 3] = "ArrivingTomorrow";
    productStatus[productStatus["delivered"] = 4] = "delivered";
})(productStatus || (productStatus = {}));

// 1. 
const name = "John";
const age = 25;
const isAdmin = true;
// 2. 
const scores = [85, 90, 78, 92];
const scores2 = [85, 90, 78, 92];
// 3.
const student = ["Alice", 20];
// 4.
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
const myRole = Role.Admin;
function printStudentInfo() {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Is admin?", isAdmin);
    console.log("Scores:", scores.join(", "));
    console.log("Scores2:", scores2.join(", "));
    console.log("Student tuple:", student[0], student[1]);
    console.log("My role:", Role[myRole]);
}
printStudentInfo();
export {};
//# sourceMappingURL=ex2.js.map
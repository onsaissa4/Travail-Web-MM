"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. 
let name = "John";
let age = 25;
let isAdmin = true;
// 2. 
let scores = [85, 90, 78, 92];
let scores2 = [85, 90, 78, 92];
// 3.
let student = ["Alice", 20];
// 4.
var Role;
(function (Role) {
    Role[Role["User"] = 0] = "User";
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["SuperAdmin"] = 2] = "SuperAdmin";
})(Role || (Role = {}));
let myRole = Role.Admin;
console.log(myRole);
//# sourceMappingURL=ex2.js.map
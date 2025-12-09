// 1. 
let name: string = "John";
let age: number = 25;
let isAdmin: boolean = true;

// 2. 
let scores: number[] = [85, 90, 78, 92];
let scores2: Array<number> = [85, 90, 78, 92];

// 3.
let student: [string, number] = ["Alice", 20];

// 4.
enum Role {
  User,
  Admin,
  SuperAdmin
}

let myRole: Role = Role.Admin;
console.log(myRole); 
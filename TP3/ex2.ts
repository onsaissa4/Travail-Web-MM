// 1. 
const name: string = "John";
const age: number = 25;
const isAdmin: boolean = true;

// 2. 
const scores: number[] = [85, 90, 78, 92];
const scores2: Array<number> = [85, 90, 78, 92];

// 3.
const student: [string, number] = ["Alice", 20];

// 4.
enum Role {
  User,
  Admin,
  SuperAdmin
}

const myRole: Role = Role.Admin;


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

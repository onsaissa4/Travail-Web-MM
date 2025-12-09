interface User {
  id: number;
  name: string;
  email?: string;
  readonly isAdmin: boolean;
}

const user1: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isAdmin: false
};

interface Admin extends User {
  permissions: string[];
}

const admin1: Admin = {
  id: 2,
  name: "Jane Doe",
  isAdmin: true,
  permissions: ["create", "update", "delete"]
};


function printUsers() {
  console.log("User 1:", user1.name, "-", user1.email, "| Admin?", user1.isAdmin);
  console.log("Admin 1:", admin1.name, "| Admin?", admin1.isAdmin, "| Permissions:", admin1.permissions.join(", "));
}


printUsers();

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
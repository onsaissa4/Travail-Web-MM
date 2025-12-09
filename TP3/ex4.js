const user1 = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    isAdmin: false
};
const admin1 = {
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
export {};
//# sourceMappingURL=ex4.js.map
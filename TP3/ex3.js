// ID peut être number ou string
let id = 123;
id = "ABC123";
const obj = { x: 10, y: "hello" };
const currentStatus = "pending";
// Valeur inconnue
const unknownValue = "test";
const strLength = unknownValue.length; // renommé pour éviter conflit
function printInfo() {
    console.log("ID:", id);
    console.log("Object:", obj);
    console.log("Current status:", currentStatus);
    console.log("Unknown value:", unknownValue);
    console.log("Length of unknownValue (casted to string):", strLength);
    if (typeof unknownValue === "string") {
        console.log("Length via typeof check:", unknownValue.length);
    }
}
printInfo();
export {};
//# sourceMappingURL=ex3.js.map
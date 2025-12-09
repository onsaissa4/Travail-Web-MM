// ID peut être number ou string
let id: number | string = 123;
id = "ABC123";

// Types pour obj
type A = { x: number };
type B = { y: string };
type C = A & B;
const obj: C = { x: 10, y: "hello" };

// Status
type Status = "pending" | "done" | "canceled";
const currentStatus: Status = "pending";

// Valeur inconnue
const unknownValue: unknown = "test";
const strLength: number = (unknownValue as string).length; // renommé pour éviter conflit

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

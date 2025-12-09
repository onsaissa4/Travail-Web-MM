let id: number | string = 123;
id = "ABC123";

type A = { x: number };
type B = { y: string };
type C = A & B;
let obj: C = { x: 10, y: "hello" };


type Status = "pending" | "done" | "canceled";
let currentStatus: Status = "pending";


let unknownValue: unknown = "test";

let length: number = (unknownValue as string).length;

if (typeof unknownValue === "string") {
  console.log(unknownValue.length);
}
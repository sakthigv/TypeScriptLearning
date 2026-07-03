// Type Assertion 

let value : unknown = "Hello Typescript";

let length1 = (value as string).length;
let length2 = (<string>value).length;    // Another way to assert datatype 

console.log(length1);
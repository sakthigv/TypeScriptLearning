// Array Destructing 
let fruits = ["Apple","Banana","Cherry"];
let [a,b,c] = fruits;
console.log(a);
console.log(b);
console.log(c);

//Object Destructing :
let user: { name: string; age?: number } = { name: "Sakthi" };
let { name, age = 25 } = user;
console.log(name);
console.log(age);


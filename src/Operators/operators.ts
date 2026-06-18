
// Arithmatic Operators - (+,-,*,/,%)
console.log("\nArithmatic Operators");

let a : number = 10;
let b : number = 5 ; 

console.log("\nAddition : ",a+b);
console.log("Subtraction : ",a-b);
console.log("Multiplication : ",a*b);
console.log("Division :  ",a/b);
console.log("Modulus : ",a%b);

//Assignment Operator = (+=,-+,*=,/=);
console.log("\nAssignment Operators")

let x : number = 15 ;

console.log("\nx=x+2",x+=2);
console.log("x=x2",x-=2);
console.log("x=x*2",x*=2);
console.log("x=x/2",x/=2);

//Comparison Operators == (<,>,<=,>=)
console.log("\nComparion Operators");

let y : number = 10 ;

console.log("\nGreater than : ",y>2);
console.log("Greater than or equal : ",y>=2);
console.log("Less than : ",y<2);
console.log("Less than or equal : ",y<=10);

// Equality Operaatos -- (==,===,!=,!==)
console.log("\nEquality Operatos");

console.log("\nDouble Equal : ", 10 == 10);  // checks values are same
console.log("Triple Equal : ", 10 === 10); // checks noth values and datatype are same
console.log("Not Equal :  ",10 != 10);
console.log("Strict Not Equal :  : ",10 !== 10);

//Logical Operatos ==(And ,or , not)
console.log("\nLogical operators");

console.log("\nAND operator : ", true && true);
console.log("OR operator : ", true || false);
console.log("NOR operator : ", !true);


// Incremetn and Decrement Operators -- (++,--)
console.log("\nIncrement And Decrement Operators");


let count : number = 6;
count++;
console.log("\nIncrement Operator : ",count);
count--;
console.log("Decrement Operators : ", count);

//ternary Operator -- ?
console.log("\nternary Operator");
let marks: number = 70; 
 
let result = (marks >= 50) ? "Pass" : "Fail"; 
console.log(result); 

// Bitwise Operators Basics 
console.log("Bitwise Operators");

console.log(5 & 1); 
console.log(5 | 1); 
console.log(5 ^ 1); 
console.log(~5); 
console.log(5 << 1); 
console.log(5 >> 1); 
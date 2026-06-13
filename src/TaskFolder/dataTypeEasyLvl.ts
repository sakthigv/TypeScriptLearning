// // 1. Number Datatype 

// let age: number = 25;
// console.log(age);

// const mark: number = 87;
// console.log(mark);

// 2. String Datatype

// let userName: String = "Sakthi";
// console.log(userName);

// const nameIs: String = "SGV";
// console.log(nameIs);

// 3. Boolean Datatype 

// let isActive: boolean = true;
// console.log(isActive);

// const isAvailable: boolean = false;
// console.log(isAvailable);


//7. any Type 

// let data: any = "Sakthi";
// console.log(data);
// data = 300;
// console.log(data);

// let test: any = 90;
// console.log(test);
// test = "Exam";
// console.log(test);

// Union Type 

// let value: number | String = 10;
// console.log(value);
// value = "sakthi";
// console.log(value);  

// let num: number | boolean = true;
// console.log(num);
// num = 20;
// console.log(num);

// number Array

// let marks:number[]=[70,66,98,87,55];
// console.log(marks); 
// marks=[22,35,44,55,33];
// console.log(marks);

// const score: number[]=[140,170,187];
// console.log(score);

// String Array 

// let users: String[] = ["Sakthi","Arun","suresh"];
// console.log(users);

// const fruits: String[] = ["Apple","orange","jackfruit"];
// console.log(fruits);

//Tuple

// let user :[String,number] = ["Sakthi",28];
// console.log(user);

// let amount:[String,number] = ["Cash",1000];
// console.log(amount);

//Null type
// let empty: null = null;
// console.log(empty);

// undefined tyoe

// let notSet: undefined = undefined;
// console.log(notSet);

// object type 

// let person:{name : String ; age : number}={
// name:"Sakthi",
// age:29
// };

// console.log(person);

// enum

// enum status {
//     Active,
//     inactive,
//     pending
// }
// let currentStatus: status = status.inactive;
// console.log(currentStatus); 


// -----------------------------------------

// function return value

function add(a : number , b : number): number {
return a + b;
}
console.log(add(20,30));

function subtract(c : number , d : number) : number{
    return c - d;
}
console.log(subtract(40,20));

// void Function 

function greet(): void{
    console.log("hello world");
}

// template String 

let userName = "Sakthi";
let message = `welcome, ${userName}`;
console.log(message);

// readOnly Array

const sgvIds: readonly number[] = [1,2,3];
console.log(sgvIds);

// type alias
 type sgvType = {id:number ; username: String};
 let sgveUser : sgvType = {id :1,username:"Sakthi sgv"}
 console.log(sgveUser);

 
 // nested object 

 let sakthiProfile = {
    name : "sakthi Gv",
    address : {city:"chennai",pincode:600001}
 }
 console.log(sakthiProfile);

// Union Array

let sgvCombo :(number | String)[] =["Sakthi112", 112];
console.log(sgvCombo);

//Tuple with Optional 

let sgvTuple:[String, number?] = ["SSSSSSS"];
console.log(sgvTuple);

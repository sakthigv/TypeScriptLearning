// Intersection type :

type name =  {name : string};
type age = {age : number};

type person = name & age;

let personReport : person  = {name : "Sakthigvr" , age : 22};
console.log("Intersection Type Example :",personReport);

//========================================== 

type student = {name : string,mark : number};
let studentReport : student = {name : "Sakthigv", mark : 10};
console.log("Student Report :",studentReport);

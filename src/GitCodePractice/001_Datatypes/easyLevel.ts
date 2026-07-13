


//======================================================================
console.log("\n");
console.log("===============================================")
console.log("\n");

// 1. Number Datatype 
let userid : number = 1;
console.log("userid : " + userid);

//2 , String Datatype 
let username : string = "SGV_18";
console.log("username : " + username);

//3. Boolean Datatype 
let isDone : boolean = true;
console.log("isDone : " + isDone);

//4. Var variable
var c : string = "sakthigvr18";
c = "good job";
console.log("Var variable : " + c);

//5. Let variable 
let travel : string = "London";
travel = "chennai";
console.log("Let Variable : " + travel);

//6. Const Variable
const lowestNumber : number = 1;
console.log("Const Variable : " + lowestNumber);

//7. Any datatype 
let anyExample : any = "Go";
console.log("anyExample : "+ anyExample);
anyExample = 18;
console.log("ChangedAnyExample : "+ anyExample);

//8. Union Datatype
let data : string | boolean = "Hi";
console.log("Union Example : " + data);
data = true;
console.log("Union Example : "+ data);

console.log("-----------------------------------------")
console.log("\n");

//9. Number Array 
let marks  : number[] = [20,80,30,10];
console.log("Number Array_01 : " + marks);
let ages : number[] = [12,14,17,24,28];
console.log("Number Array_02 : " + ages);

//10 . String Array
let users : string[] = ["A","E","56","45"];
console.log("String Array : " + users);

//11. Generic Array 
let idss : Array<Number> = [1,2,3,4,5,6,7];
console.log("Generic Arrays_01 : " + idss);

let names : Array<String> = ["John","ruse","Angle","low","high"];
console.log("Generic Arrays_02 : "+ names);

//12. Tuple 
let userr : [String,Number] = ["Sakthigv",28];
console.log("Tuple Example : " + userr);

let chat : [Number,Boolean] = [12,true];
console.log("Tuple Example_01 : " + chat);

console.log("--------------------------------------------")
console.log("\n");


// 13.Null Datatype 
let nothing : null = null;
console.log("Null Datatype :" + nothing);


//14.Undefined Datatype
let undef : undefined = undefined;
console.log("Undefined Datatype : " + undef);

//13. Unknown Datatype 
let unKnowne : unknown = "sakthi";
console.log("Unknown Datatype :"+ unKnowne);
unKnowne = 134;
console.log("Unknown Datatype_001 :"+ unKnowne);

console.log("-------------------------------------------------")
console.log("\n");


// 14. Object Type with array 
let empDetails : {name : string , age : number}[] = [{
  name : "hedskal",
  age : 23 
},
{
  name : "grbsnhd",
  age : 27
}]

console.log("Object Type with array : " + empDetails);

//15 . object type :
let studentDetails : {attendanceNo : number, section : string}={
  attendanceNo : 1,
  section : "B"
}

console.log("object type : " + studentDetails);

//16 . optional property 

let emplo : {name : string , id ?: number} = {
  name : "bodjfhs"
}
console.log("optional property in Object : " + emplo);

//17. enum datatype : 

 enum attendance {
    present, 
    absent, 
    leave
 } 

let status = attendance.present;
console.log("Enum : " + status);

console.log("-------------------------------------------------")
console.log("\n");

//18 . Function return type 
function subtract(d : number , h : number) : number {
  return d - h;
}

console.log("Function return type : " + subtract(20,10));


//11. void Function  

function display() : void {
  console.log("Void Function Example");
}
display();

// 12. Template string 
let messages : string = "Welcomae Home !";
console.log("Template Litelarals : "+`${messages},sakthigv`);

//13. Readonly Array 
const studentIds : readonly number[] = [10,20,30];
console.log("ReadOnly Array :" + studentIds); 

//14.Type Alias
type sakthiType = {names : string;id : number};
let sgvUser : sakthiType = { names : "sgv18", id : 18};

console.log("Type Alias Example :"+ sgvUser);

//15.Nested Object 
let sgvProfile = {
  name : "sgv19",
  address : {
    city : "chennai",
    pincode : 600005
  }
}
console.log("Nested Object :" + sgvProfile);

//16. union Array 
let sgcCombo : (string | number)[] = [12,33,44,"sffdss"];
console.log("Union Array :" + sgcCombo);

//17 Tuple with optional array
let gvTuple : [string, number?] = ["sssasf"];
console.log("Tuple with optional array :"+ gvTuple);



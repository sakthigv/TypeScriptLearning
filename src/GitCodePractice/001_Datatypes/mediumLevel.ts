
//  ------------------ MEDIUM LEVEL 

// 01. Multiple Var + let + const types 
var userName : string = "Sakthi GV";
const userId : number = 101;
let userLocation : string = "Chennai";

console.log(userName,userId,userLocation);

//02. Object with Full type 
let student : {name : string; age : number; isPass:boolean} = {
    name : "Sgv",
    age : 28,
    isPass : true
}

console.log("\n");
console.log(student);

//03. Array of Objects 
let team : {user : string; role : string}[] = [
    {user : "sakthigv",role : "Developer"},
    {user : "Sgv", role : "QA"}
]

console.log("\n");
console.log(team);

//04. Function type Variable
let greetFunc : (x : string) =>  void;
greetFunc = (x : string) => console.log("Hi", x);
console.log("\n");
greetFunc("SakthiGv");

//05. Enum With String values 
enum role {
    sUser = "USER",
    sAdmin = "ADMIN"
}

let sRole : role = role.sUser;
console.log("\n");
console.log(sRole);

// 06. Nested Object with array 
let project = {
    pName : "Automation",
    members:["SGV","Robin"],
    isDone : false
}

console.log("\n");
console.log(project);

// 07. Using var inside block scope;
var score = 20;
if(true){
    var score = 30;
}

console.log("\n");
console.log(score);

//08. Using let inside block scope
let mark = 60;
if(true){
let mark = 40;
}
console.log("\n");
console.log(mark);

//09. Map usage 
let sMap = new Map<string, number>();
sMap.set("Sakthi_SGV",18);
console.log("\n");
console.log(sMap);

// 10. Set Usage
let sSet = new Set<string>();
sSet.add("Sakthi");
sSet.add("Virat");
console.log("\n");
console.log(sSet);

// 11. Type Alias with Array 
type skills = string[];
let sSkills : skills = ["Driving","Speaking","Drawing"];
console.log("\n");
console.log(sSkills); 

// 12. Partial Type 
interface laptop {
    brand : string,
    price : number
}

let lap : Partial<laptop> = {brand : "Dell"};
console.log("\n");
console.log(lap);

// 13. keyOf Usage 
type person =  {name : string; age : number} ;
let key : keyof person = "name";
console.log("\n");
console.log(key);

// 14 .  ReadOnly object 
interface User {
    readonly id : number;
    name : string;
}

let u : User = {id : 101,name : "Sakthi18"};
console.log("\n");
console.log(u);

// 15. Function narrowing 

function printValue(v: string | number){

    if(typeof v === "string"){
        console.log("String :",v);
    }else{
        console.log("Number :",v);
    }
}
console.log("\n");
printValue("Sakthigv");

// 16. Function Returnong Object 
function createUser(name : string,id :number){
       return {id,name};
}
console.log("\n");
console.log(createUser("Suresh",101))

// 17. Generic Fucntion 
function wrap <T>(value : T): T[]{
    return [value];
}
console.log("\n");
console.log(wrap("Sakthi1298"));

// 18. Generic Interface 
interface apiInterface<T>{
    status : number,
    data : T
}

let apiRes : apiInterface<string> = {
    status :  200,
    data : "SUCCESS"
}
console.log("\n");
console.log(apiRes);

// 19. Deep mergw generic 
function mergeObj<T,U>(a:T ,b:U){
return {...a,...b};
}

console.log("\n");
console.log(mergeObj({a : "Sakthi"},{b : 29}));

// 20 . complex Union Array 
let mixData : (string | number | boolean)[] = ["Sakthi12",29,true];
console.log("\n");
console.log(mixData);

// 21. Object Array with Types
let tasks : {id : number;title : string;done : boolean}[]=[

   {id : 1,title : "Title_!",done:true},
   {id : 2,title : "Title_2",done:false}
]
console.log("\n");
console.log(tasks);

// 22. Multi line function with const + let 
function calculate(a : number , b : number){

    const sum = a + b;
    let result = sum * 2;
    return result;

}

console.log("\n");
console.log(calculate(3,4));

// 23. Optional Chaining
let empData : { name : string; address : {city? : string}|null} = {
    name : "sakthigv",
    address : null
} 
console.log("\n");
console.log(empData.address?.city);

// 24. Nullish Coalescing 
let nullableInfo : string | null = null;
let info = nullableInfo ?? "Default Value";
console.log("\n");
console.log(info);

//25. Type Assertion 
let code : any ="123";
let numValue = code as string;
console.log("\n");
console.log(numValue);


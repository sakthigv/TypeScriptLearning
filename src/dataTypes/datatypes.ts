// 1. String Datatyoe ---- Stores Text
      console.log("String Datatype");
      let name : string = "Sakthigv";
      console.log(name);


// 2. Number Datatypes ---- Stores Numbers 
console.log("\nNumber Datatypes");
       let age : number = 29;
       console.log(age)

//3. boolean Datatypes --- Stores True or False 
console.log("\nBoolean Datatypes"); 
       let isTrue : boolean = true;
       console.log(isTrue);


//4. Array Datatypes(String array) --- Stores Multiple Values
console.log("\nArray Datatypes");
     let arrayy : string[] = ["Sakthi","is","Healing"];
     console.log(arrayy);


//5.tuple Datatypes -- Fixed Types and Orders
console.log("\nTuple Datatypes");
    let employee : [string,number] = ["SGV",18];
    console.log(employee);

//6. Enum DataType -- Fixed Set of VAlues 
console.log("\nEnum Datatypes");
     enum fruits {
        apple,
        orange,
        Srawberry
     }
let favFruit = fruits.Srawberry;
console.log(favFruit);

//7. Any dataType --- Can store any datatype
console.log("\nAny datatyoes");
let data : any = "Hi";
console.log(data);
data = 18;
console.log(data);

// 8. Unknown Datatype : Safer Version of Any
console.log("\n Unknow Datatype");
let knowData : unknown = "Hello all";
console.log(knowData);
knowData = true;
console.log(knowData);

// 10 .Void Datatype === Function returns Nothing
console.log("\n Void Datatype");
function voidData() : void {
console.log("Void used in Function");
}

// 11. Undefined Datatypes
console.log("\n Undefined Datatype");
let undefinedData : undefined = undefined;
console.log(undefinedData);


//12.  null Datatypes
console.log("\n Null Datatypes");
let nullData : null = null;
console.log(nullData);

//12. Object Datatypes
console.log("\n Object Datatyeps");
let person: object = {
    name : "Sakthi",
    city : "salem"
}

console.log(person);

//13. Union Datatype --- One variable can hold multiple datatypes 
console.log("\n Union Datatypes");
let id : string| number;
id = "07";
console.log(id);
id = 18;
console.log(id);

// Type Alias  -- custome type 
console.log("\n Type Alias");

type typeData = {
    name : string,
    age : number
};
let typeUser :typeData = {
    name : "virat",
    age : 18
}
console.log(typeUser);

// ===========================================
console.log("\n ============================================================");


// task 1 - String 
let username : string = "Sakthi";
console.log("Name : ",username);

// Task @ - Number 
let userAge : number = 29;
console.log("Age : ",userAge);

//task 3 - boolean 
let istester : boolean = true;
console.log("IsTester : ",istester);

//Task 4 - Array Datatypes 
let skills  : string[] = ["TypeScript","Playwright","Sql"];
console.log(skills);

//Task 5 - Tuple 
let employye : [string,number] = ["sakthi",101];
console.log(employye);

// Task 6 - Enum 
enum role {
    admin,
    tester,
    Developer
}

let userRole = role.tester;
console.log(userRole);

// Task 7 - Any 
let dataa : any = "Sakthi";
console.log(dataa);
dataa = 100;
console.log(dataa);

//Task 8 - Unknowm 
let values : unknown = "Hello";
if(typeof values === "string"){
    console.log(values.toUpperCase);
}

// Task 9 - Null 
let manager : null = null;
console.log(manager);

//Task 10 - Undefined
 let project : string | undefined;
 console.log(project);
 project = "";
 console.log(project);

 //Task 11 - object 
 let personDetils : Object = {
    namee : "Sakthi",
    age : 25,
    role : "tester"
 }

 console.log(personDetils);



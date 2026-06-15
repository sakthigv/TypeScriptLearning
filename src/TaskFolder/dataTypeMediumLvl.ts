  //02 object with Full type
  let student:{name:string;age:number;isPass:boolean}={
    name : "sakthigv",
    age :29,
    isPass : true
  };
  console.log(student);

  let teams:{tName:String;size:number;floor:number}=
{
tName:"Java Team",
size:22,
floor:1
};
console.log(teams);

// 03. Array of Objects
let team : {user : string,role : string}[] = [
    {user : "sakthi",role:"Dev" },
    {user : "sgv",role:"Tester"}
];
console.log(team);

let persons:{noOfPersons:number;isAvailable:boolean}[]=[
    {noOfPersons:9,isAvailable:true},
    {noOfPersons:7,isAvailable:false}
]
console.log(persons);

//04. FunctionType Variable 
let greetFunc :(x : string) => void;
greetFunc = function(x :string){
    console.log("Hi",x);   
}
greetFunc("Sakthigv");

let celebFunc :( y : number , z : number) => number;
celebFunc = (y : number,z:number) => y+z;
console.log(celebFunc(3,6)); 

// ENum With String Values
enum categories{typA="Admin",typB="Users"};
let roleStatus = categories.typA;
console.log(roleStatus);

enum workPlace{cityy="Chennai",Country="India"};
let officePlace = workPlace.cityy;
console.log(officePlace);

//Nested Object with array








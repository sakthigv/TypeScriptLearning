// for ... in Loop -- loop helps to find or iterate keys of the object

let student = {
    name:"Ravi",
    age : 20,
    grade :"A"
}

for (let key in student){
    console.log(key,":",student[key as keyof typeof student])
}

let employe = {
    empname : "SGV",
    id:101,
    department : "Automation Engineer"
}

console.log("\n");
for(let Values in employe){
     console.log(Values,":",employe[Values as keyof typeof employe]);
}
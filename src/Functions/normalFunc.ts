function add(a : number, b : number):number{
return a + b;
}

console.log(add(5, 10));


function demo(){
console.log("Hello World");
}
demo()

function welcome(name : string): string{
    return `Welcome ${name}`;
}
console.log(welcome("Sakthi"));

function nums(no : number): void{
for (let i = 1;i<=no;i++){
    console.log(i);
}
}
nums(5);
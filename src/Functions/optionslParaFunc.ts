// Optional Parameter Function 

function display(firstName : string, lastName?:string): string{
    return lastName ? `${firstName} ${lastName}` : firstName;
}
console.log(display("Sakthi"));
console.log(display("Sakthi","gv"));

//=====================================================

function greet(name : string, age?:number){
    console.log("hello " + name);
    if (age !== undefined) {
        console.log("You are " + age + " years old.");
    }
}
greet("Sakthi");
greet("Sakthi", 25);

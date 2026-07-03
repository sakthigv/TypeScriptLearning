// Rest Parameter Fucntion 

function smAll(...numbers : number[]):number{
    return numbers.reduce((acc,curr) => acc + curr,0);
}
console.log(smAll(10,20,30));
console.log(smAll(5,6,7));


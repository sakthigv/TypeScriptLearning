// Recursive Function 

function factorial(n:number): number{
    if(n === 0) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));

//===============================================

function printNumbers(n:number):void{
    if(n > 5){
        return;
    }
    console.log(n);

    printNumbers(n +1);
}

printNumbers(1);
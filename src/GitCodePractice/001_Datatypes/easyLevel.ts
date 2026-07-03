
// 1. Number Variables 
    let id : number =1;
    console.log("ID :",id);

//2. String variable
   let name : string = "Sakthigv";
   console.log("Name :",name);

//3. Boolean variable 
   let isActive : boolean = true;
   console.log("Is Active :",isActive);

// 4. Var Example 
  var x = 22;
  x = 33;
  console.log("Var Example :",x);  

//5. Let Variable 
   let y = 44;
   y = 55;
   console.log("Let Example :",y);
 
//6. Const Variable 
     const pi = 3.14   // mostly used for constant values
     console.log("Const Example :",pi);

//7. Any datatype 
    let anyType : any = 11;
    console.log("Any Type Example :",anyType);    
    anyType = "Sakthigv";
    console.log("Any Type Example :",anyType);

//8. Union datatype
    let unionType : number | string = 100;
    console.log("Union Type Example :",unionType);

//9. Null datatype
     let empty : null = null;
     console.log("Null Example :",empty);     

//10 . Undefined Datatype
     let undefinedType : undefined = undefined;
     console.log("Undefined Example :",undefinedType);


 // 11. Unknown Datatype
        let unknownType : unknown = 10;
       if(typeof unknownType === "number"){
         console.log("Unknown Type Example :",unknownType);
       }

//11. Object type 
        let student : {rNo : number , name : string}={
          rNo : 11,
          name : "Sakthigvr"
        }
     
        console.log("Object Example : ",student);
    

//12 .  Function return type 
        function add(a : number , b : number) : number{
          return a + b;
        }

        console.log("Function Return Type Example :",add(10,20));
     


//14 . enum type 
       enum fruits {
          Apple,
          Orange,
          Mango
       }
      console.log("Enum Example :",fruits.Apple);

// 15 . Void function 
          function voidFunction() : void{
               console.log("Void Function Example : This function does not return any value");
          }
  
  

  // 16 . template String 
          let firstName : string = "Sakthigv";
          let message : string = `Hello ${firstName}, Welcome to typescript`;
          console.log("Template String Example :",message);
 

  // 17. Type Alias 
        type employee = {id : number , name : string};
        let user : employee = {id :1,name :"sakthigv"};
        console.log("Type Alias Example :",user);



  
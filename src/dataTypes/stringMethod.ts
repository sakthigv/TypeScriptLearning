const message: String = " Welcome to typescript class";
const userName : String = " sakthigv123 ";
const email: String = "info2sakthi4@gmail.com";
let password: String = "sgv1298";

console.log(message);
console.log(userName);

//Trim
console.log("\ntrim() method");
console.log(message.trim());

//toUppercase()
console.log("\ntoUppercase() method");
console.log(message.toUpperCase());

//toLowerCase()
console.log("\ntoLowercase() Method");
console.log(message.toLowerCase());

//Length
console.log("\nLength Method");
console.log(message.length);

//include()       true/false
console.log("\nincludes() Method");
console.log(message.includes(" by Sgv"));

//startsWith() 
console.log("\nstartsWith() Method");
console.log(message.startsWith(" Welcome"));

//endsWith()
console.log("\nendsWith() Method");
console.log(message.endsWith("class "));

// replace()
console.log("\nreplace() Method");
console.log(message.replace("typescript","playwright"));

//replaceAll() equivalent using replace with lobal regex 
console.log("\n replaceAll() Method");
console.log("AA AA AA".replace(/AA/g,"Automation Playwright"));

//split()
console.log("\nsplit() Method");
console.log(email.split("@"));

//subString()
console.log("\nsubString() method");
console.log(userName.substring(0,4));

//slice()
console.log("\nSlice() Method");
console.log(userName.slice(4));

//charAt()
console.log("\ncharAt() Method");
console.log(userName.charAt(2));

//at() - use slice for negative Index to support older is Targets\\
console.log("\nat() Method");
console.log(email.at(-1));
console.log(email.slice(-1));

console.log(email.at(-3));
console.log(email.slice(-3));

// indexOf()
console.log("\nindexOf() Method");
console.log(message.indexOf("typescript"));

// lastIndexOf()
console.log("\nlastIndexOf() Method");
console.log(message.lastIndexOf("to"));

//concat()
console.log("\nconcat() method");
console.log(userName.concat(" ","Empire"));

//repeat()
console.log("\nrepeat() method");
console.log(userName.repeat(3));

//padStart()
console.log("\npadStart() Method");
console.log("5".padStart(4, "0"));
console.log(userName.padStart(22,"s"));

//padEnd()
console.log("\npadEnd() Method");
console.log("QA".padEnd(4, "*"));
console.log(userName.padEnd(22,"s"));

//Match()
console.log("\nmatch() Method");
console.log(userName.match(/\d/g));

// search()
console.log("\nsearch() Method");
console.log(email.search("sakthi4"));

// localeCompare()
console.log("\nlocaleCompare() Method");
console.log("apple".localeCompare("banana"));
console.log("userName".localeCompare("apple"));


// valueOf()
console.log("\nvalueOf() method");
console.log(message.valueOf());


// String interpolation
console.log("\nTemplate Literal");
console.log(`Welcome ${userName} to TypeScript Class`);

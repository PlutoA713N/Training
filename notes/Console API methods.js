// Using a console.table() in order to list the variables in a table format, we pack all the variable in either  Array or object & later , we use console.table() on it.
// console.table(data, [columns])
// data'll be either Array or Object format;
// [columns] the listed columns only displayed on the table;
let someValue = "Value 1";
let otherValue = "Value 2";

let object = {name: "user", age: 1, location:"unknown"};

console.table( [someValue, otherValue] );
console.table( {object},['name','location'] )


// console.group() it is used to group all the console.logs in one Group...
// We could also add a label to the  group
// we can also add nested groups inside an another group;

console.group("Group Label");
console.log("group 1");
console.log("group 2");
console.group("Nested Group")
console.log("Inner group 3");
console.groupEnd();
console.groupEnd();

//
const value = false;

if ( value ){ // It works only if the Value is Truthy
    console.error( " Value is Truthy")
}

// We use console.assert() which works only if the Value is Falsy;
// parameters are (condition, message)
// It displays "Assertion failed" + message;
console.assert( value, "Value is Falsy" )

//  console.count() it increments the count, whenever its called,helpful to track a block or a function. optional parameter is a "label", its set to a "default"

for(let index = 0; index <= 3; index++){
console.count(); // Its counting the number of times its called.
console.countReset(); // works only for default Counts,  for labelled counts, we include a label in countReset() to reset into 0.
};

console.countReset() // It resets the count to 0.

// To add some flavors in an output text
// In order to use css style , console.log( %c input, css styles input);

const cssMessage = "This is My CSS Message";
console.log('%c ' + cssMessage, 'color: red;');
 

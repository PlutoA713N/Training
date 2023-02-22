/* We create a String by combining a 1 or more words together. so the parser, would identify its as a Single String. sometimes we remove spaces and latter we add some special characters in the spaces */

//  camelCase 
// Here Except the first word, rest of the starting letters of the words are Captilised.
var input = "This is a String"
// Input into camelCase
var output = "thisIsAString"

// Pascal Case
// Here all the starting letters of the words are captilised.
var pascalInput = "new string";
var pascalOutput = "NewString";

// Snake case
// Here in this case, reserved spaces are replaced with an underscores('_')
var snakeCaseInput = "i like snakes"
// First output, mostly used for to represent database field names
var snakeCaseOutput = 'i_like_snakes';
//Caps output is preferred for declare constants
var snakeCaseCapsOutput = 'I_LIKE_SNAKES'


//kebab case
//Here,in this case, the reserved spaces are replaced with dash(-).
//Mostly used in Urls.
var kebabInput = "this is a site link";
var kebabOutput = "this-is-a-site-link";

// We gotta pick one of the styles from this or search for an alternative style im Google, try to stick wih it, to improve readability and naming.

// Dealing with the Loop Variables :

//Naming the loop variables
var array = [1, 2, 3],
     n = array.length;

// bad usage:

for( let i = 0; i < n ; i++){
    console.log(i)
}

// good Usage

for( let index = 0; index < array.length; index++){
    console.log( array[index] );
}

// Also for arrow functions

const sum = array.reduce((total, number, index, array) => {
    total += array[index]
    return total;
},0)
console.log( sum ); // 6

// Even for matrixes the best usage is..to name those variables

const array2d = [[1,2,3],[4,5,6], [7,8,9]]

for( let rowIndex = 0; rowIndex < array2d.length ; rowIndex++){
    // Accessing the Rows;
    const row = array2d[ rowIndex ] 
   for( let columnIndex = 0; columnIndex < row.length; columnIndex++){
       // Accesing the column numbers
       const column =  array2d[columnIndex][rowIndex]
       console.log( row[columnIndex] )
   }
}


// Maintaining the space between declarations and function operations
// for better readability

var element = "something",
    element2 = "something2",
    element3 = "something3";
// separating a declared variables and the function operation with space for more readability    
function doSomething(element) {
    if( typeof element ){
        console.log(element + element2 + element3)
    }
}
// separating a function operation with space
doSomething(element2)

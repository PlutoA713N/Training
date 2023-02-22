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

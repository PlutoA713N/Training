// This is a map function works similar to array.prototype.map
// It doesnt consists of .this property
// It works only for Arrays and the result will be returned in an Array.

function map(array, callback){
  var ar = [];
    if( Array.isArray(array) ){
        for(let index = 0; index < array.length; index++){
           // Result of callback function will be stored in an array
             ar.push( callback( array[index], index, array) );
        }
    }
   return ar;
}

map( array, callback function) // Output- returns an array of values;

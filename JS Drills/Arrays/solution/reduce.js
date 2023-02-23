// Reduce function
// It consists of a callback and an accumulator
// Accumulator can be an anything, like an array or a number
// If an accumulator is undefined, its value will be equal to first value of an array
// In a callback function, first element is skipped,it iterates from 2nd value.
// Accumulator will be assigned with return value of callback function.
// Reduce function totally reduces the array value , its a combination of filter and map.


function reduce(array, callback, accumulator){
    if( Array.isArray(array) && array.length > 0 ){
       for(let index = 0; index < array.length; index++){
           if( accumulator == undefined && index == 0){
               accumulator = array[0]
               continue;
           }
            accumulator = callback( accumulator, array[index], index, array )
        }
    }
    return accumulator;
}

console.log( reduce( [1,2,3,4], (sum, value) => {
  return sum + value;
}) ) // Output - 10

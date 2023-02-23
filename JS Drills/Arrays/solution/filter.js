// Filter Function
// It is similar to Array.prototype.filter.
// If any of the values satisfies the callback condition, these values will be returned in an array
// Else empty array will be returned.

function filter(array, callback){
    var filterdValues = []
    for(let index = 0; index < array.length; index++){
        if( callback( array[index], index, array)){
            filterdValues.push( (array[index]) )
        }
    }
    return filterdValues;
}
( filter( [1,2,3,4,5,6], (value,index) => {
    return value > 3
    }) ) // Output - [4, 5, 6]

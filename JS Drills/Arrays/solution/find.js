// Find method
// It is similar to Array.prototype.find method
// It searches for a value through the whole array...with a certain condition
// It any of the value in the array matches its condition, it returns the value.
// We find the value which matches the condition first.
// If none of the value matches, it returns Undefined

function find(array, callback){
    for(let index = 0; index < array.length; index++){
        if( callback( array[index], index, array)){
            return array[index];
        }
    }
    return undefined;
}

console.log( find( [1,2,3,4,5,6], v => v > 3) ) // Output - 4

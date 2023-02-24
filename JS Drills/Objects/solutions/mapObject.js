// mapObject
// It consists of a callback function and an Object.
// With callback function, it traverses through the whole object values and applies callback function to each of the values.
// It modifies the Original Object  and returns it.

function mapObject( testObject, callback ){
    
    if(testObject.constructor == Object){
        for( let key in testObject ){
            testObject[key] = callback( testObject[key], key, testObject )
        }
    }
    
    return testObject;
}

console.log( mapObject ( {start: 5, end: 12}, value => {
   return  value * 5;
}) ) // Output - { start: 25, end: 60 }

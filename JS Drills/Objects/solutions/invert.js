// _.invert
// It inverts the object keys and object values.
// Swaps their keys and values of an Object.

function invert( obj ){
    const object = new Object();
    
    if(testObject.constructor == Object){
       for(let key in obj){
       object[ obj[key] ] = key;
       }
       return object;
    }
    
    return undefined;
}

console.log( invert( testObject ) ) 

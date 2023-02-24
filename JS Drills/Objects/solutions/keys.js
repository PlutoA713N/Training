// const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

// Object.keys() 
// It is a function returns the all keys of an Object.
// It returns the all the keys of an object in an Array , each key in a strimg format
// Works only for Objects.

function keys( testObject ){
    const objectKeys = new Array();
    
    if( testObject.constructor == Object){
       for(let key in testObject){
      // console.log(key)
       objectKeys.push(key)  
        }
    return objectKeys;
    }
    
    return undefined;
}

console.log( keys( testObject ) )

// const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

function values( testObject ){
    const objectValues = new Array();
    
    if( testObject.constructor == Object){
       for(let key in testObject){
         objectValues.push( testObject[key] )  
        }
        return objectValues;
    }
    
    return undefined;
}

console.log( values( testObject ) )

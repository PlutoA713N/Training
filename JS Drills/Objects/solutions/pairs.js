// _.pairs(object);
// It takes an object as an Argument
// It converts the object into [key, value] pairs in an Array.


function pairs( obj ){
    const twins = new Array();
    
    if(obj.constructor == Object){
     
       for(let key in obj){
       twins.push( [ key, obj[key] ] )
       }
    
    return twins;
    }
    return undefined;
}

console.log ( pairs( testObject)  )

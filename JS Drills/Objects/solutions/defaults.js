// defaults
// It takes two arguments thats both are objects
// If the first object truthy properties are found in second object, second object wont be added to the Object
// If 1st object property are falsy, if similar properties are found in second object, these properties will be added
// to the object
// It returns the whole new Object.


function defaults( obj, defaultProps){
   const object = new Object();
   
   for(let key in obj){
       if( !object.hasOwnProperty(key) ){
           object[key] = obj[key];
       }
   }
   
   for( let key2 in defaultProps){
       
       if( object.hasOwnProperty(key2) && !defaultProps[key2] ){
           object[key2] = defaultProps[key2]
       }else if( !object.hasOwnProperty(key2) ){
           object[key2] = defaultProps[key2]
       }
       
   }
   
  return object; 
}

function defaults(obj, defaultProp){
 
  for(let key in defaultProp){
      if( !obj.hasOwnProperty(key) && !obj[key]){
          obj[key] = defaultProp[key]
      }
  }
  
  return obj;
}


var iceCream = {flavor: "chocolate"};

var k =  {flavor: "vanilla", sprinkles: "lots"}

console.log( defaults( iceCream, k)  )

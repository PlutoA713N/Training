// Works for small nested arrays;
// Flatten - it is used to flat nested arrays into a single Array
// Implementation of a flatten array using recursion

function flatten( nestedArray ){
var flat = []

for(let i=0; i<nestedArray.length; i++){
    let v = nestedArray[i]
    console.log(v, typeof v)
    while((typeof v) == "object"){
       v = v.pop()
    }
    flat.push(v)
}
return flat;
}


// Here we call the array values recursively to reduce its depth each time until it access the number

const nestedArray = [1, [2], [[3]], [[[4]]]];

function flatten( nestedArray ){
    let flat = [];
    
    for(let index = 0; index < nestedArray.length; index++){
       
        const array = nestedArray[index];
        //console.log(array, index)
        if( Array.isArray(array) ){
          flat = flat.concat( flatten(array)  )  
        }else{
            flat.push( array)
        }
    }
    return flat;
}

console.log( flatten ( nestedArray) )


console.log( flatten(nestedArray) )

function flatten( nestedArray ){
  let flat = [],
      index = 0
  
    while( index < nestedArray.length ){
      if( Array.isArray( nestedArray[index] ) ){
          nestedArray.splice(index, 1, ...nestedArray[index] )
      }else{
          flat.push( nestedArray[index])
          index++;
      } 
    }
   return flat; 
}

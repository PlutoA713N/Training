function problem2(inventory){
    for(let i = 0; i < inventory.length; i++){
        var carData = Object.entries(inventory[i]);
        if(i == inventory.length-1){
         return (`Last car is a ${carData[1][1]} ${carData[2][1]}`);
        }
    }
    
}

var lastCarData = problem2(inventory)
console.log( lastCarData ) // Last car is a Lincoln Town Car

// solution 2

function problem2(inventory){
  var carData = Object.entries( inventory[inventory.length-1] )
   return (`Last car is a ${carData[1][1]} ${carData[2][1]}`)
}

var lastCarData = problem2(inventory)
console.log( lastCarData ) // Last car is a Lincoln Town Car



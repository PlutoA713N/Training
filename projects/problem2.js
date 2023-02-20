
// solution 1
function problem2(inventory){
    const lastCarId = inventory.length
    return console.log(`Last car is a ${inventory[lastCarId-1].car_make} ${inventory[lastCarId-1].car_model}`)
}

var lastCarData = problem2(inventory)
console.log( lastCarData ) // Last car is a Lincoln Town Car

// solution 2
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

// solution 3

function problem2(inventory){
  var carData = Object.entries( inventory[inventory.length-1] )
   return (`Last car is a ${carData[1][1]} ${carData[2][1]}`)
}

var lastCarData = problem2(inventory)
console.log( lastCarData ) // Last car is a Lincoln Town Car

// By using a filter

function problem2(inventory){
    const lastCarId = inventory.length
    var data = 0;
    inventory.filter( carData => {
        if( carData.id == lastCarId){
            data = (`Last car is a ${carData.car_make} ${carData.car_model}`)
        }
    })
   return data; 
}

var lastCarData = problem2(inventory)
console.log( lastCarData ) // Last car is a Lincoln Town Car


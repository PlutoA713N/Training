function problem6(inventory){
    var cars = new Array()
   for(let i = 0; i < inventory.length; i++) {
      var carModel =  Object.entries(inventory[i]) ;
      if(carModel[1][1] == "BMW" || carModel[1][1] == "Audi" ){
          cars.push( carModel );// Inventory[i]
      }
   }
   return ( JSON.stringify(cars) )
}

const bestCars = problem6( inventory )
console.log( bestCars );
/* Output:
[[["id",6],["car_make","Audi"],["car_model","riolet"],["car_year",1995]],
[["id",8],["car_make","Audi"],["car_model","4000CS Quattro"],["car_year",1987]],
[["id",25],["car_make","BMW"],["car_model","525"],["car_year",2005]],
[["id",30],["car_make","BMW"],["car_model","6 Series"],["car_year",2010]],
[["id",44],["car_make","Audi"],["car_model","Q7"],["car_year",2012]],
[["id",45],["car_make","Audi"],["car_model","TT"],["car_year",2008]]]

*/

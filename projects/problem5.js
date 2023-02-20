function problem5( inventory, years ){
  var before2000 = 0,
      olderList = new Array();
   for(let i = 0; i < years.length; i++){
       if(years[i] <= 2000){
           before2000+=1;
        } else { 
            olderList.push( inventory[i] )
       }
   }
   return [before2000, olderList, olderList.length]
}

const carsAfter2000 = problem5( inventory, years );
console.log( carsAfter2000 );
/* Output
[
[29,
  {
    id: 1,
    car_make: 'Lincoln',
    car_model: 'Navigator',
    car_year: 2009
  },
  { id: 2, car_make: 'Mazda', car_model: 'Miata MX-5', car_year: 2001 },
  {
    id: 3,
    car_make: 'Land Rover',
    car_model: 'Defender Ice Edition',
    car_year: 2010
  },
  { id: 7, car_make: 'Smart', car_model: 'Fortwo', car_year: 2009 },
  { id: 11, car_make: 'Infiniti', car_model: 'G35', car_year: 2004 },
  { id: 12, car_make: 'Lotus', car_model: 'Esprit', car_year: 2004 },
  {
    id: 16,
    car_make: 'Mitsubishi',
    car_model: 'Montero Sport',
    car_year: 2001
  },
  {
    id: 21,
    car_make: 'Chevrolet',
    car_model: 'Express 1500',
    car_year: 2003
  },
  { id: 24, car_make: 'Toyota', car_model: 'MR2', car_year: 2003 },
  { id: 25, car_make: 'BMW', car_model: '525', car_year: 2005 },
  {
    id: 26,
    car_make: 'Cadillac',
    car_model: 'Escalade',
    car_year: 2005
  },
  { id: 28, car_make: 'Suzuki', car_model: 'Aerio', car_year: 2005 },
  { id: 30, car_make: 'BMW', car_model: '6 Series', car_year: 2010 },
  { id: 33, car_make: 'Jeep', car_model: 'Wrangler', car_year: 2011 },
  { id: 36, car_make: 'Volvo', car_model: 'XC70', car_year: 2003 },
  { id: 40, car_make: 'Lotus', car_model: 'Evora', car_year: 2012 },
  {
    id: 43,
    car_make: 'Mercedes-Benz',
    car_model: 'R-Class',
    car_year: 2009
  },
  { id: 44, car_make: 'Audi', car_model: 'Q7', car_year: 2012 },
  { id: 45, car_make: 'Audi', car_model: 'TT', car_year: 2008 },
  {
    id: 47,
    car_make: 'Volkswagen',
    car_model: 'Jetta',
    car_year: 2007
  },
  { id: 48, car_make: 'Dodge', car_model: 'Magnum', car_year: 2008 }
], 21 ]
*/


function problem5( years ){
  var before2000 = 0,
      olderList = new Array();
   for(let i = 0; i < years.length; i++){
       if(years[i] <= 2000){
           before2000+=1;
       } else {
           olderList.push( years[i] )
       }
   }
   return ( olderList, years.length - before2000 )
}

const carsAfter2000 = problem5( years );
console.log( carsAfter2000 );
/* Output 21 */

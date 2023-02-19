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

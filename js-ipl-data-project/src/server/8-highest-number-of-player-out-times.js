const data = require('fs');
const csv = require('csv-parser');
const obj = new Object();

data.createReadStream('deliveries.csv')
.pipe( csv() )
.on('data', data => {
    const dismissed = data["player_dismissed"];
    const bowler = data["bowler"];

    
    if( !obj[bowler] ){
         obj[bowler] = new Object();
    }


    if( !obj[bowler][dismissed] && dismissed ){
         obj[bowler][dismissed] = 0;
    }

    if(  obj[bowler].hasOwnProperty(dismissed) ){
         obj[bowler][dismissed] += 1;
    }
    
})
.on('end', () => {
    let max = 0,
        high;
    
    for(let [key, value] of Object.entries(obj)){
      if( value == {}){
          high = 0
      }else{
          high = Math.max(...Object.values(value))
          console.log(high)
      }
        
      max = Math.max(high, max)
    }
    
    console.log(max)
})

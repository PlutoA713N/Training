const file = require('fs'),
      csv = require('csv-parser'),
      matchIds = new Set(),
      extraRunsConcededIn2016 = new Object();

file.createReadStream('matches.csv')
.pipe(csv())
.on('data', data => {    
    if(data.season ==  2016){
        matchIds.add(data.id)
    }
})

file.createReadStream('deliveries.csv')
.pipe(csv())
.on('data', data => {
   
    const team1 = data.batting_team,
          team2 = data.bowling_team,
          extraRuns = data.extra_runs;

   if( !extraRunsConcededIn2016[team1] ){
        extraRunsConcededIn2016[team1] = 0;
    }
   if( !extraRunsConcededIn2016[team2] ){
       extraRunsConcededIn2016[team2] = 0;
   }

   if( matchIds.has(data.match_id) ){
      extraRunsConcededIn2016[team2] += Number(extraRuns);
   }
        //onsole.log( extraRunsConcededIn2016 )
})
.on('end', () => {
    console.log( extraRunsConcededIn2016 )
}) 


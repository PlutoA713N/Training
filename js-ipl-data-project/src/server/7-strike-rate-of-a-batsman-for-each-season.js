const file = require('fs');
const csv = require('csv-parser');
const years = new Object();
const records = new Object();
const strikeRate = new Object();

file.createReadStream('matches.csv')
.pipe( csv ())
.on('data', data => {
    years[data.id] = data.season;
})

file.createReadStream('deliveries.csv')
.pipe(csv())
.on('data', data2 => {
    const runs = data2.total_runs;
    const id = data2.match_id;
    const batsman = data2.batsman;
    const season = years[id]

    if( !records[batsman] ){
        records[batsman] = new Object();
        strikeRate[batsman] = new Object();
    }
  
    if( !records[batsman][season] ){
         records[batsman][season] = {totalRuns : 0, balls : 0};
    }

    if ( records[batsman][season] ){
         records[batsman][season]["totalRuns"] += Number(runs);
         records[batsman][season]["balls"] += 1;
         strikeRate[batsman][season] = ((records[batsman][season]["totalRuns"]/records[batsman][season]["balls"])*100).toFixed(2);
    }
       
    
})
.on('end', () => {
      console.log( JSON.stringify(strikeRate, "", 1) );
})

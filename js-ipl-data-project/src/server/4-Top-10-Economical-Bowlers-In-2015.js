const file = require('fs');
const csv = require('csv-parser');
const economicBowlers2015 = new Object();
const economyRate = new Object();
const yearIds = new Set();


file.createReadStream('matches.csv')
.pipe(csv())
.on('data', data => {
    if(data.season == 2015){
        yearIds.add(data.id)
    }
})

file.createReadStream('deliveries.csv')
.pipe(csv())
.on('data', data => { 
    const bowler = data.bowler 
    const extraRuns = data.extra_runs;

    if(!economicBowlers2015[bowler] && yearIds.has(data.match_id) ){
        economicBowlers2015[bowler] = new Object();
        economicBowlers2015[bowler]['ballsCount'] = 0
        economicBowlers2015[bowler]['concededRuns'] = 0
    }
    
     if( yearIds.has(data.match_id) ){
        economicBowlers2015[bowler]['concededRuns'] += (Number(data.total_runs) - Number(extraRuns))
        economicBowlers2015[bowler]['ballsCount'] += 1;

        economyRate[bowler] = (economicBowlers2015[bowler]['concededRuns']/(economicBowlers2015[bowler]['ballsCount']/6)).toFixed(2)
    }
    
})
.on('end', () => {
    const bowlersData = Object.entries(economyRate).sort((a,b) => a[1] - b[1] )
    const output = new Object();

    for(let index = 0; index <= 10; index++){
        output[bowlersData[index][0]] = bowlersData[index][1];
    }
    
    // console.log( output )
    console.log( JSON.stringify(output,'',1) );
})

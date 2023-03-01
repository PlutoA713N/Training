const file = require('fs');
const csv = require('csv-parser');
const bowlers = new Object();
const economy = new Object();

file.createReadStream('deliveries.csv')
.pipe( csv() )
.on('data', data => {
    const bowler = data.bowler;
    const extraRuns = data.extra_runs;
    const totalRuns = data.total_runs;
    const superOver = data.is_super_over;

    if( !bowlers[bowler] ){
        bowlers[bowler] = new Object();
        bowlers[bowler]["runs"] =  0;
        bowlers[bowler]["balls"] = 0;
    }

    if( superOver ){
        bowlers[bowler]["runs"] += (Number(totalRuns) - Number(extraRuns))
        bowlers[bowler]["balls"] += 1
        economy[bowler] = (bowlers[bowler]["runs"]/(bowlers[bowler]["balls"]/6)).toFixed(2)
    }
       
})
.on('end', () => {
    const bowlersEconomy = Object.entries(economy).sort((a,b)=> a[1] - b[1])
    console.log( JSON.stringify(bowlersEconomy[0], '', 1) );
})

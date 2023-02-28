const file = require('fs'),
      csv = require('csv-parser'),
      tossAndMatchWinners = new Object();

file.createReadStream('matches.csv')
.pipe(csv())
.on('data', data => {
    const tossWinner = data["toss_winner"] ,
          matchWinner = data["winner"]

    if( !tossAndMatchWinners[tossWinner] ){
        tossAndMatchWinners[tossWinner] = 0;
    }

    if( tossWinner == matchWinner ){
        tossAndMatchWinners[tossWinner] += 1
    }
    
})
.on('end', () => {
    const output = JSON.stringify( tossAndMatchWinners,'',1 )
    console.log( output )
})

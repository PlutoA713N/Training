const file = require('fs'),
      csv = require('csv-parser'), 
      playerOfMatch = new Object();

file.createReadStream('matches.csv')
.pipe(csv())
.on('data', data => {
    const year = data["season"];
    const bestPlayer = data["player_of_match"];

    if( !playerOfMatch[year] ){
        playerOfMatch[year] = new Object();
    }

    if( !playerOfMatch[year][bestPlayer] ){
        playerOfMatch[year][bestPlayer] = 0;
    }

    if ( playerOfMatch[year] ){
         playerOfMatch[year][bestPlayer] += 1;
    }
    
    
})
.on('end', () => {
    const output = playerOfMatch
    const players = new Object();
       
    for(const [key,value] of Object.entries(playerOfMatch)){ 
    const playerName = (Object.entries(value).sort((a,b) => b[1] - a[1]))   
    output[key]  = Object.fromEntries( playerName );
    players[key] = playerName[0][0]
    }

    console.log( JSON.stringify(players,'',1) )
})

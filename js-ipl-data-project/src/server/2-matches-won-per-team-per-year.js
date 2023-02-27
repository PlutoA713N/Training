const file = require('fs'),
      csv = require('csv-parser'),
       iplMatchesWonPerYear = new Object();

   file.createReadStream('matches.csv')
   .pipe( csv() )
   .on('data', (data)=> {
       const team1 = data.team1,
             team2 = data.team2,
             year = data.season,
             winner = data.winner;

       //Intialising teams & years to the iplMatchesWonPerYear Object
       
       if( !iplMatchesWonPerYear[team1] ){
           iplMatchesWonPerYear[team1] = new Object();
       } 
       if( !iplMatchesWonPerYear[team2] ){
           iplMatchesWonPerYear[team2] = new Object();
       }
       if( !iplMatchesWonPerYear[team1][year] ){
           iplMatchesWonPerYear[team1][year] = 0
       }
       if( !iplMatchesWonPerYear[team2][year] ){
           iplMatchesWonPerYear[team2][year] = 0
       }

       // Incrementing the year, if team won that match.
       
       if( team1 == winner){
           iplMatchesWonPerYear[team1][year] += 1;
       }else if(team2 == winner){
           iplMatchesWonPerYear[team2][year] += 1;
       }
       
   })
   .on('end', () => {
     console.log( iplMatchesWonPerYear ) 
   })

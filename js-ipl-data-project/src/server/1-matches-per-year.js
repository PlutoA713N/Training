// 1.Number of matches played per year for all the years in IPL.
const folder = require('fs');

const csv = require('csv-parser');

const iplMatchesPerYear = {};
      columns = ['season'];


folder.createReadStream('matches.csv')
.pipe(csv ({headers: columns}))
.on('data', (data) => {
    if(!iplMatchesPerYear.hasOwnProperty(data._1)){
       iplMatchesPerYear[data._1] = 1;
     }else{
        iplMatchesPerYear[data._1] += 1;
     }
})
.on('end', () => {
    console.log( iplMatchesPerYear )
});

/* Output :
 {'2008' : 58,
  '2009' : 57,
  '2010' : 60,
  '2011' : 73,
  '2012' : 74,
  '2013' : 76,
  '2014' : 60,
  '2015' : 59,
  '2016' : 60,
  '2017' : 59,
  season : 1
  }

function problem3(inventory){
    var dataSet = new Set()
    for(let i = 0; i < inventory.length; i++){
        var carData = Object.entries( inventory[i] )[1][1]
        dataSet.add(carData)
    }
       
        return ( sort( Array.from(dataSet)) ) 
}

function sort(arr){
    for(let i = 1; i < arr.length; i++){
        for(let j = i; j > 0 && arr[j] < arr[j-1] ; j--){
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
        }
    }   
        return arr;
}

var brands = problem3(inventory)
console.log( brands ) 
// OutPut
[
  'Audi',          'BMW',
  'Buick',         'Cadillac',
  'Chevrolet',     'Chrysler',
  'Dodge',         'Eagle',
  'Ford',          'GMC',
  'Geo',           'Honda',
  'Infiniti',      'Jeep',
  'Land Rover',    'Lincoln',
  'Lotus',         'Mazda',
  'Mercedes-Benz', 'Mercury',
  'Mitsubishi',    'Oldsmobile',
  'Pontiac',       'Smart',
  'Suzuki',        'Toyota',
  'Volkswagen',    'Volvo'
]

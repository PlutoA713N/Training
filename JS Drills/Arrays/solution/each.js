// This function is similar to inbuilt forEach() function
// This is an Implementation of ForEach..function without using forEach()
// It works only for Arrays

function each(array, callback){
    if( Array.isArray(array) ){
        for(let index = 0; index < array.length; index++){
            callback( array[index], index, array)
        }
    }
}

each(array, callback);

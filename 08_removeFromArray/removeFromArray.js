const removeFromArray = function(arr, ...theArgs) {
    let tempArr = [];
    for (x = 0; x < arr.length; x++){
        if (theArgs.includes(arr[x])){continue}else{tempArr.push(arr[x])}
    }
    return tempArr
};

// Do not edit below this line
module.exports = removeFromArray;

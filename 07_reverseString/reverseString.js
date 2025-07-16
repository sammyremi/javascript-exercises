const reverseString = function(str) {
    let string = ""
    for ( x = str.length - 1; x >= 0; x--){
        string += str[x]
    }
    return string
};

// Do not edit below this line
module.exports = reverseString;

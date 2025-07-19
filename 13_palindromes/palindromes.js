const palindromes = function (strings) {
    let string = ""
    let temp = ""
    let count = 0

    for (x = 0; x < strings.length; x++){
        if (strings[x].charCodeAt() >= 65 && strings[x].charCodeAt() <= 90 || strings[x].charCodeAt() >= 97 && strings[x].charCodeAt() <= 122 || strings[x].charCodeAt() >= 47 &&  strings[x].charCodeAt() <= 57){
            string += strings[x].toLowerCase()
        }
    }

    for(x = string.length - 1; x >= 0; x--){
        temp += string[x]
    }

    for (x = 0; x < string.length; x++){
        if (string[x] === temp[x]){
            count += 1
        }
    }

    if (count == string.length){
        return true
    }else{return false}

};

palindromes("racecar")

// Do not edit below this line
module.exports = palindromes;

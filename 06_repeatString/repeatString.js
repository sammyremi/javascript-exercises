const repeatString = function(string, num) {
    if (num < 0){return "ERROR"}
    if (string === ""){return ""}
    let str = ""
    for (x = 0; x < num; x++){
        str = str + string
    }
    return str
};

// Do not edit below this line
module.exports = repeatString;

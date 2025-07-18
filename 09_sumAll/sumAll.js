const sumAll = function(num1, num2) {

    let temp = 0

    let str1 = String(num1)
    let str2 = String(num2)

    if (str1.includes('.') || str2.includes('.')){return 'ERROR'}
    
    if (typeof(num1) && typeof(num2) != 'number' || num1 < 0 || num2 < 0){return 'ERROR'}
    
    if (num1 > num2){ 
        temp = num2
        num2 = num1
        num1 = temp
    }

    let sum = 0
    for (x = num1; x <= num2; x++){
        sum += x
    }
    return sum

    
};

sumAll(1, 123)

// Do not edit below this line
module.exports = sumAll;

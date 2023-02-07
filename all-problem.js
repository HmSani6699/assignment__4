/* 
This function will take a positive number as input and multiply that number by 3.
Then add 10, then divide by 2,
Then after subtracting 5, the output will be returned
*/
function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Please Provide a number!';
    }
    return (number * 3 + 10) / 2 - 5;
}


/* 
This function will take a string as input and check the total number of characters in the string
If the number of total character is positive then 'even' will return positive otherwise 'odd'
*/
function evenOdd(name) {
    if (typeof name !== 'string') {
        return 'Please provide a text!!';
    }

    if (name.length % 2 === 0) {
        return 'even'
    }
    return 'odd'
}

/* 
This function will take a number as input and subtract seven from that number, then if the subtraction is less than seven, then it will return the subtraction, and if it is greater than seven, it will return double the input.
*/
function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Please Provide a number!';
    }

    const result = number - 7;
    if (result < 7) {
        return result;
    }
    return number * 2;
}


/* 
This function will take an array as input then the number of bad data in the array
 It will find it and return that number
*/

function findingBadData(array) {
    if (Array.isArray(array) !== true) {
        return 'Please Provide An Array'
    }
    let negativeData = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element < 0) {
            negativeData++;
        }
    }
    return negativeData
}


/* 
This function will take three parameters, parameter three must be a number, otherwise it will show an error, it will multiply each number by a specific number, then add the product together, if the sum is greater than 2000, subtract 2000 from the sum and return the minus, otherwise, the previous sum will return a tie.
*/

function gemsToDiamond(num1, num2, num3) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
        return ("Please provide a number!")
    }
    let firstFriends = num1 * 21;
    let secondFriends = num2 * 32;
    let thirdFriends = num3 * 43;

    let totalDiamond = firstFriends + secondFriends + thirdFriends;
    if (totalDiamond > 2000) {
        return totalDiamond - 2000
    }
    return totalDiamond
}


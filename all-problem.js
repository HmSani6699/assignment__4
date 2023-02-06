function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Please Enter Your Number';
    }
    return (number * 3 + 10) / 2 - 5
}
// console.log(mindGame(20))

//------------------------------22222-------------------//

function evenOdd(name) {
    if (typeof name !== 'string') {
        return 'Please Enter Your Text';
    }
    if (name.length % 2 === 0) {
        return 'Even'
    }
    else {
        return 'Odd'
    }
}
// console.log(evenOdd('sani'))


//-----------------------------3333-------------------//

function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Please Enter Your Number';
    }
    const result = number - 7;
    if (result < 7) {
        return result;
    }
    else {
        return number * 2;
    }
}

// console.log(isLGSeven(-15))

//---------------------------44444--------------------------//

function findingBadData(array) {
    if (Array.isArray(array) !== true) {
        return 'Please Enter Your Array'
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
// console.log(findingBadData([-4, -9, -5, -33, -55]))


//-----------------------------5555----------------------------//

function gemsToDiamond(num1, num2, num3) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
        let firstFriends = num1 * 21;
        let secondFriends = num2 * 32;
        let thirdFriends = num3 * 43;

        let totalDiamond = firstFriends + secondFriends + thirdFriends;
        if (totalDiamond > 2000) {
            return totalDiamond - 2000
        }
        return totalDiamond
    }
    else {
        return 'Please Enter Your Number'
    }

}
// console.log(gemsToDiamond(100, 5, 1))


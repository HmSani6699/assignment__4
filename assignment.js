/*-----------------------Problem 1: Let’s play a mind game------------//

তোমাকে একটা function দেওয়া হবে called “mindGame(” যা ইনপুট হিসেবে একটা positive number নিবে। 

এখন তোমার task : তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে,
 তারপর 5 বিয়োগ করে, যা আউটপুট আসবে তা return করতে হবে। Sample Input & Output:-
*/


/* 

এই function টি  ইনপুট হিসেবে একটা positive number নিবে  সেই নাম্বার এর সাথে 3 গুন করে,
 তারপর 10 যোগ করে, তারপর 2 দিয়ে ভাগ করে,
 তারপর 5 বিয়োগ করে,যা আউটপুট আসবে তা return করেছি

This function will take a positive number as input and multiply that number by 3.
Then add 10, then divide by 2,
Then after subtracting 5, the output will be returned
*/

function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Please Provide a number!';
    }
    return (number * 3 + 10) / 2 - 5
}

// console.log(mindGame('33'))

/*--------------------Problem 2: Finding even or odd--------------------//

তোমাকে একটা function দেওয়া হবে called evenOdd()”. এটা ইনপুট হিসেবে একটা string নিবে। 

এখন তোমার task: String এ total কয়টা character আছে তার উপর ভিত্তি করে আউটপুট দিতে হবে। 
আউটপুট হবে ‘Even’ অথবা ‘Odd’ ।


এই function  ইনপুট হিসেবে একটা string নিবে   String এ total কয়টা character আছে তা চেক করবে
total character এর সংখ্যা পজিটিভ হলে ‘even’ পজিটিভ নাহলে ‘odd’  return করবে

This function will take a string as input and check the total number of characters in the string
If the number of total character is positive then 'even' will return positive otherwise 'odd'

*/

function evenOdd(name) {
    if (typeof name !== 'string') {
        return 'Please Provide Your Text';
    }

    if (name.length % 2 === 0) {
        return 'even'
    }
    return 'odd'
}
console.log(evenOdd('chatgt'))



/*----------------------Problem 3: Is Less or Greater than seven----------------------//

তোমাকে একটা function দেওয়া হবে called “isLGSeven()”. এটা ইনপুট হিসেবে একটা number নিবে।

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফল। নাহলে তোমাকে return করতে হবে double of the input। মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দ্বিগুণ।



এই function টি ইনপুট হিসেবে একটা number নিবে  ওই নাম্বারের সাথে সাত বিয়োগ করবে তারপর বিয়োগফল যদি সাতের ছোট হয় তাহলে বিয়োগফলটা রিটার্ন করবে আর সাতের বড় হলে ইনপুট যেটা নিয়েছি তার দ্বিগুণ রিটার্ন করবে

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

console.log(isLGSeven(19))


/*-----------------------Problem 4: Finding Bad data-----------------------//

তোমাকে একটা function দেওয়া হবে called findingBadData()”. এটা ইনপুট হিসেবে একটা array নিবে। array তে 
যেকোনো সংখ্যক কতগুলো number থাকবে। number গুলো negative number (less than zero) ও হতে পারে, আবার positive 
number (greater than or equal to zero) ও হতে পারে। কোনও number যদি negative হয় সেটাকে আমরা বলব “Bad Data”.
 কোনও number যদি positive হয় সেটাকে আমরা বলব “Good Data”. এখন তোমার task: array তে যতগুলো Bad data আছে
 সেটা খুঁজে বের করতে হবে এবং সেই নাম্বার টা return করতে হবে।

 এই ফাংশনের কাজ হচ্ছে ইনপুট প্যারামিটার হিসেবে আমরা একটা array নিয়েছি  array তে যতগুলো Bad data আছে
 সেটা খুঁজে বের করেছি এবং সেই নাম্বার টা return করেছি।

 The function of this function is as input parameter we have taken an array as many bad data in the array
 I found it and returned that number.
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
console.log(findingBadData([-4, -9, -5, 33, -55]))


/*-------------------------Problem 5: Convert your gems into diamond--------------------------//

তোমাকে একটা function দেওয়া হবে called gemsToDiamond()”. এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে। 

১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21

২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32

৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

[ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।Sample Input & Output:-

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
console.log(gemsToDiamond(20, 200, 50))
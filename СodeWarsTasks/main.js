//6 надо отсортировать строку по чиcлам, которая она содержит в словах

function order(words) {
    let arr = words.split(' ');

    return arr.sort((a, b) => a.match(/\d+/) - b.match(/\d+/)).join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));


//---------7 Highest and Lowest----------------------------------------------------------------------
// /*In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.
//
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"*/

function highAndLow(numbers) {
    const arrStr = numbers.split(" ");
    const arr = arrStr.map(item => Number(item)); //нормальный массив чисел
    const max = Math.max.apply(null, arr);
    const min = Math.min.apply(null, arr);

    return `${max} ${min}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //"42 -9"
console.log(highAndLow("1 2 3")); //"3 1"


//-----7 You are a square!-------------------------------------------------------------------------------
// Given an integral number, determine if its a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer;
// in other words, it is the product of some integer with itself.
//
// The tests will always use some integral number, so dont worry about that in dynamic typed languages.
// Examples
// -1  =>  false
// 0  =>  true
// 3  =>  false
// 4  =>  true
// 25  =>  true
// 26  =>  false

const isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n)) === true;
}

console.log(isSquare(25));
console.log(isSquare(-1));


/*-----8 Powers of 2-----------------------------------------------------
Complete the function that takes a non-negative integer n as input, and returns
a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

     Examples
    n = 0  ==> [1]        # [2^0]
    n = 1  ==> [1, 2]     # [2^0, 2^1]
    n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
 */

function powersOfTwo(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }

    return result;
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(4));


// ------8 Remove string spaces----------------------------------------------------
// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {

    return x.split(" ").join('');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));


/*------8 replace all the dots--------------------------------------------------------
The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.*/


const replaceDots = function (str) {

    return str.replace(/\./g, '-');
}

console.log(replaceDots("one.two.three"));


/*-----8 To square or not to square---------------------------------------------------------------
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.*/

function squareOrSquareRoot(array) {

    return array.map(item => (Number.isInteger(Math.sqrt(item)) === true) ?
        item = Math.sqrt(item) :
        item = Math.pow(item, 2)
    );
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); //[ 2, 9, 3, 49, 4, 1 ]


/*-----8 Welcome to the city--------------------------------------------------------------
Create a method sayHello/say_hello/SayHello that takes as input a name, city,
and state to welcome a person. Note that name will be an array consisting of one or more
values that should be joined together with one space between each, and the length of
the name array in test cases will vary.

   Example:
   sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
   This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!*/


function sayHello(name, city, state) {
    const fullName = name.join(" ");

    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));


/*-------------6 Find the parity Outlier------------------------------------------
You are given an array (which will have a length of at least 3, but could be very large)
containing integers. The array is either entirely comprised of odd integers
or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)*/

function findOutlier(integers) {

    const onlyOdd = integers.filter(int => (int % 2).toFixed(0) != 0);
    const onlyEven = integers.filter(int => (int % 2).toFixed(0) == 0);

    return (onlyOdd.length == 1) ? onlyOdd[0] : onlyEven[0];

}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); //Should return: 11 (the only odd number)
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); //Should return: 160 (the only even number)


/* ----------6 Sort the odd--------------------------------------------------------------------------------
You will be given an array of numbers. You have to sort the odd numbers in
 ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]*/

function sortArray(array) {
    const odd = array.filter(x => x % 2 != 0).sort((a, b) => a - b);

    return array.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));


//-----------------------------------------KYU 7--------------------------------------------------------------

/* №1 Testing 1-2-3
Write a function which takes a list of strings and returns each line
prepended by the correct number.

The numbering starts at 1. The format is n: string.
Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]*/

function number(array) {
    return array.map((item, index) => ` ${index + 1}: ${item}`);
}

console.log(`I Testing 1-2-3 
	INPUT: ["a", "b", "c"] --> 
	OUTPUT: ${number(["a", "b", "c"])}`
);


/*--------------------------------------------------------------------
№2 Length and two values
Given a number n and two values firstValue and secondValue, build
an array of size n filled with firstValue and secondValue alternating.

for input:                 5, true, false
expected result would be: [true, false, true, false, true]*/

function alternate(n, firstValue, secondValue) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        (i % 2 == 0) ? arr[i] = firstValue : arr[i] = secondValue;
    }

    return arr;
}

console.log(`II Length and two values 
	INPUT: 20, 'blue', 'red'-->
	OUTPUT: ${alternate(20, 'blue', 'red')}`
);


/*------------------------------------------------------------------
№3 Coprime Validator
Write a program to determine if the two given numbers are coprime.
A pair of numbers are coprime if their greatest shared factor is 1.

The inputs will always be two positive integers between 2 and 99.

Examples
20 and 27:
Factors of 20: 1, 2, 4, 5, 10, 20
Factors of 27: 1, 3, 9, 27
Greatest shared factor: 1
Result: 20 and 27 are coprime

12 and 39:
Factors of 12: 1, 2, 3, 4, 6, 12
Factors of 39: 1, 3, 13, 39
Greatest shared factor: 3
Result: 12 and 39 are not coprimes
*/
function isCoprime(x, y) {
    const divisorsOne = [];
    const divisorsTwo = [];
    let test;

    for (let i = 2; i < x; i++) {
        if (x % i == 0) divisorsOne.push(i);
    }

    for (let i = 2; i < y; i++) {
        if (y % i == 0) divisorsTwo.push(i);
    }

    const duplicatedValues = divisorsOne.filter(item => divisorsTwo.includes(item));
    (duplicatedValues.length == 0) ? test = true : test = false;

    return test;
}

console.log(`III Coprime Validator 
    INPUT: 20, 27
    OUTPUT: ${isCoprime(20, 70)}`
);

/*--------------------------------------------------------------------------
№4 Even numbers in an array
Given an array of numbers, return a new array of length number containing the
last even numbers from the original array (in the same order).
The original array will be not empty and will contain at least "number" even numbers.

For example:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
 */

function evenNumbers(array, number) {
    const fullEvenList = array.filter(item => item % 2 == 0);

    return fullEvenList.splice(fullEvenList.length - number, number);
}

console.log(`IV Even numbers in an array
    INPUT: [1, 2, 3, 4, 5, 6, 7, 8, 9], 3
    OUTPUT: ${evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)}`
);


/*-----------------------------------------------------------------------------
№5 Square Every Digit
In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out,
because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
 */

function squareDigits(num) {
    const sqrArr = ('' + num).split('').map(item => Math.pow(item, 2));

    return Number(sqrArr.join(''));
}

console.log(`V Square Every Digit
    INPUT: 3212
    OUTPUT: ${squareDigits(3212)}`
);


/*---------------------------------------------------------------------------------
№6 String ends with?
Complete the solution so that it returns true if the first argument(string)
passed in ends with the 2nd argument (also a string).
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/

function solution(str, ending) {
    return str.endsWith(ending);
}

console.log(`VI String ends with?
    INPUT: 'abcde', 'cde'
    OUTPUT: ${solution('abcde', 'cde')}
    
    INPUT: 'abcde', 'abc'
    OUTPUT: ${solution('abcde', 'abc')}`
);

/*-------------------------------------------------------------------------------
№7 Sum of two lowest positive integers
Create a function that returns the sum of the two lowest positive numbers given
an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
 */

function sumTwoSmallestNumbers(numbers) {
    const arr = numbers.sort((a, b) => a - b);
    return arr[0] + arr[1];
}

console.log(`VII Sum of two lowest positive integers
    INPUT: [5, 8, 12, 19, 22]
    OUTPUT: ${sumTwoSmallestNumbers([5, 8, 12, 19, 22])}`
);


/*------------------------------------------------------------------------------------------
№8 Count the divisors of a number
Count the number of divisors of a positive integer n.
Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

function getDivisorsCnt(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) cnt++;
    }

    return cnt;
}

console.log(`VIII Count the divisors of a number
    INPUT: 54
    OUTPUT: ${getDivisorsCnt(54)}`
);


/*---------------------------------------------------------------------------------------
№9 Simple Interest and Compound Interest
Simple interest on a loan is calculated by simply taking the initial amount (the principal, p)
and multiplying it by a rate of interest (r) and the number of time periods (n).

Compound interest is calculated by adding the interest after each time period
to the amount owed, then calculating the next interest payment based on the principal
PLUS the interest from all previous periods.

Given a principal p, interest rate r, and a number of periods n,
return an array [ total owed under simple interest, total owed under compound interest ]

Examples
interest(100, 0.1,  1)  =  [110, 110]
interest(100, 0.1,  2)  =  [120, 121]
interest(100, 0.1, 10)  =  [200, 259]
*/

function interest(P, r, n) {
    const result = [];
    result[0] = P + P * r * n;
    result[1] = Number((P * Math.pow(1 + r, n)).toFixed(0));

    return result;
}

console.log(`IX Count the divisors of a number
    INPUT: 100,0.1,1
           100,0.1,10
    OUTPUT: ${interest(100, 0.1, 1)}
            ${interest(100, 0.1, 10)}`
);

//---------------------------------------------KYU 6-------------------------------------------------------
/*--------------№1 How many zeros are at the end of n!!
Define n!! as
n!! = 1 * 3 * 5 * ... * n if n is odd,
n!! = 2 * 4 * 6 * ... * n if n is even.
Hence 8!! = 2 * 4 * 6 * 8 = 384, there is no zero at the end. 30!! has 3 zeros at the end.
For a positive integer n, please count how many zeros are there at the end of n!!.

Example:
count_zeros_n_double_fact(30) should return 3
*/

function countZeros(n) {
    let product = 1;
    let start;
    (n % 2 === 0) ? start = 2 : start = 1;

    for (let i = start; i <= n; i += 2) {
        product *= i;
    }

    let arr = String(product).split('');
    let cntZero = 0;

    //ищем с конца и останавливаем как только элемент не равен 0
    //для тернарного оператора нельзя использовать break
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == 0) {
            cntZero++;
        } else break;
    }

    return cntZero;
}

console.log(`IX Count the divisors of a number
    INPUT: 8
           30
    OUTPUT: ${countZeros(8)}
            ${countZeros(30)}`
);

/*
-------№2 Two Sum----------------------------------------------------
Write a function that takes an array of numbers (integers for the tests) and a target number.
It should find two different items in the array that, when added together, give the target value.
The indices of these items should then be returned in a tuple /
list (depending on your language) like so: (index1, index2).
 */

function twoSum(numbers, target) {
    const idxArr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                idxArr[0] = i;
                idxArr[1] = j;

                return idxArr;
            }
        }
    }

}

console.log(`II Two Sum
    INPUT: [1,2,3], 4
           [1234,5678,9012], 14690
    OUTPUT: ${twoSum([1, 2, 3], 4)}
            ${twoSum([1234, 5678, 9012], 14690)}`
);

/*
---------------№ 6 Array.diff------------------------------------------------------------------------------------
Your goal in this kata is to implement a difference function,
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

function arrayDiff(a, b) {
    return a.filter( item => !b.includes(item) );
}

console.log(`III Array.diff
    INPUT: [1,2,2], [1]
           [1,2,3], [1,2]
    OUTPUT: ${arrayDiff([1, 2, 2], [1])}
            ${arrayDiff([1, 2, 3], [1, 2])}`
);

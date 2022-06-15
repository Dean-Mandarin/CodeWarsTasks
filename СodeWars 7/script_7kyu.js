/* №1 Testing 1-2-3
Write a function which takes a list of strings and returns each line 
prepended by the correct number.

The numbering starts at 1. The format is n: string. 
Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]*/

function number(array) {
    const result = array.map((item, index) => ` ${index + 1}: ${item}`);

    return result;
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
    let arr = [];

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
    let divisorsOne = [];
    let divisorsTwo = [];
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
    let fullEvenList = array.filter(item => item % 2 == 0);

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
    let sqrArr = ('' + num).split('').map(item => Math.pow(item, 2));

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
    let arr = numbers.sort((a, b) => a - b);
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
    let result = [];
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
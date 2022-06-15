/* №1 Testing 1-2-3
Write a function which takes a list of strings and returns each line 
prepended by the correct number.

The numbering starts at 1. The format is n: string. 
Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]*/

function number(array){
  const result = array.map( (item, index) => ` ${index + 1}: ${item}` );
  
  return result;
}

console.log(`I Testing 1-2-3 
	INPUT: ["a", "b", "c"] --> 
	OUTPUT: ${ number(["a", "b", "c"]) }` 
    );


/*--------------------------------------------------------------------
№2 Length and two values
Given a number n and two values firstValue and secondValue, build 
an array of size n filled with firstValue and secondValue alternating.

for input:                 5, true, false
expected result would be: [true, false, true, false, true]*/

function alternate(n, firstValue, secondValue){
  let arr = [];
  
  for(let i = 0; i < n; i++){
    ( i % 2 == 0 ) ? arr[i] = firstValue : arr[i] = secondValue;
  }
  
  return arr;
}

console.log(`II Length and two values 
	INPUT: 20, 'blue', 'red'-->
	OUTPUT: ${ alternate(20, 'blue', 'red') }`
	);
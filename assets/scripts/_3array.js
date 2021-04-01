
//Technically, an array is an object where properties are number based on 0 index.

// Heterogenous collection
var myArrTest = ['String', 10, 10.3]
console.log(myArrTest); // [ 'String', 10, 10.3 ]

var myArr = ["Hi", "Hello"]
console.log("Type of array : " + typeof myArr); //Type of array : object
console.log(myArr) //[ 'Hi', 'Hello' ]  
/*
        ["Hi", "Hello"]
        0: "Hi"
        1: "Hello"
        length: 2
*/

console.log("First Element : " + myArr[0]) //First Element : Hi
console.log("Second Element : " + myArr[1]) //Second Element : Hello
console.log("Next element :" + myArr[3]) // Next element :undefined

// Addition of elements in array
myArr[2] = "Test"
console.log(myArr) //[ 'Hi', 'Hello', 'Test' ]
/*
 ["Hi", "Hello", "Test"]
	0: "Hi"
	1: "Hello"
	2: "Test"
length: 3
*/
myArr[20] = "Test2" // Adding element at some random index
console.log(myArr)
/*
["Hi", "Hello", "Test", empty × 17, "Test2"]
    0: "Hi"
    1: "Hello"
    2: "Test"
    20: "Test2"
    length: 21
*/

// length of an array : using length property of JavaScript Object
console.log("Length of  myArr : " + myArr.length) //Length of  myArr : 21

// Array can be heterogeneous 
myArr[4] = 123
console.log(myArr)
/*
	["Hi", "Hello", "Test", empty, 123, empty × 15, "Test2"]
	0: "Hi"
	1: "Hello"
	2: "Test"
	4: 123
	20: "Test2"
	length: 21
    */


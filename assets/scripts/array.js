var myArr = ["Hi", "Hello"]
console.log("Type of array : " + typeof myArr);
console.log(myArr)
/*
        ["Hi", "Hello"]
        0: "Hi"
        1: "Hello"
        length: 2
*/

console.log("First Element : " + myArr[0])
console.log("Second Element : " + myArr[1])
console.log("Next element :" + myArr[3]) // undefined

// Addition of elements in array
myArr[2] = "Test"
console.log(myArr)
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

// length of an array
console.log("Length of  myArr : " + myArr.length)

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


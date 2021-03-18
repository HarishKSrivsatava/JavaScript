//Like Java, JavaScript have equal object for any primitive data type. 
//(implicit type casting).
// But this object is created only for instant we are intended to use the property of 
//this implicit object.

let myString = "Hello World"
console.log(myString); //Hello World
console.log(typeof myString); //string
console.log(myString.length); // 11 :> Object created for the access of the property "length"
console.log(typeof myString); //string



//JavaScript objects are class-less. Instead they are of free form. It is just like a map.

//Inline object creation
var myObj = {} //Empty object
console.log(myObj) //{}
myObj.prop1 = "test" // setting the property prop1 of onject myObj
console.log(myObj) // { prop1: 'test' }
myObj.prop2 = 10;
console.log(myObj); //{ prop1: 'test', prop2: 10 }
console.log("Property 1 of myObject : " + myObj.prop1); //Property 1 of myObject : test
console.log("Property 2 of myObject : " + myObj["prop2"]); //Property 2 of myObject : 10


var myObject_1 = {
    "prop_1" : "Hello",
    "prop_2" : 10,
    "prop_3" : 12.5
}
console.log("myObject_1 : " + myObject_1); //myObject_1 : [object Object]
console.log("myObject_1.prop_1 : " + myObject_1.prop_1); //myObject_1.prop_1 : Hello


var myObject_1 = {
    "prop_11" : "Hello",
    "prop_12" : myObject_1
}
console.log(myObject_1);
/*{
    prop_11: 'Hello',
    prop_12: { prop_1: 'Hello', prop_2: 10, prop_3: 12.5 }
  }
  */


  var myObject_2 = {
      "prop_21": "Hello",
      "prop_22" : {
                    "inner_prop_1" : "inner_value_1",
                    "inner_prop_2": 10
                 }
         }
console.log(myObject_2)
/*
{
  prop_21: 'Hello',
  prop_22: { inner_prop_1: 'inner_value_1', inner_prop_2: 10 }
}
*/


// Deleting a property from an object
var myObject = {
    "prop_1": "Hello",
    "prop_2": 10
}
console.log(myObject); //{ prop_1: 'Hello', prop_2: 10 }
myObject.prop_2 = undefined
console.log(myObject); 
//{ prop_1: 'Hello', prop_2: undefined } :> prop_2 property exists still
myObject.prop_2 = null
console.log(myObject); 
//{ prop_1: 'Hello', prop_2: null } :> prop_2 property exists still
delete myObject.prop_2
console.log("After property deletion : ");
console.log(myObject); //{ prop_1: 'Hello' } :> prop_2 property deleted



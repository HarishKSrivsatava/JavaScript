// Function is also an object technically

// Definition of function 
function TestFunction (){
   // alert("From function")
   console.log("Hello function")
}
//Execution of function
TestFunction()

// Definition of function with argument(s)
function greetings(salutation, name){
    console.log("Hello " + salutation + "."+ name + " !")
}
greetings("Mr", "Harish")


// Anonymous function 
//Defintion
var anoFun = function(){
    console.log("Hello from Anonymous Function " );
}
//Execution
anoFun();

//Function as an argument
var funTest = function (){
    console.log("Anonymous function");
}
var executor = function(f){
    funTest()
    console.log("From executor")
    funTest()
 
}
executor()


// Function as an object
var myObj = {
    "prop1" :"name",
    "prop2" : function hello(){
        console.log("No arg function");
    },
    "prop3" : function (){
        console.log("Anonymous function")
    }
}

myObj.prop2()
myObj.prop3()

// Understanding this keyword
var myObj3 = {
    "prop1": "Harish",
    "prop2" : "Kumar",
    "getFullName" : function test(){
       // return (prop1) //function.js:58 Uncaught ReferenceError: prop1 is not defined
        return (this.prop1)
    }
}
console.log(myObj3.getFullName()); // Harish


var myObject={
    "firstName": "Harish",
    "lastName": "Kumar",
    "getFullName": function(){
      return this.firstName +" "+ this.lastName;
    },
    "address": {
      "street": "JS Street",
      "city"  : "JS City",
      "state" : "JSState"
      },
     "isFromState":function(state){
       if(state == this.address.state)
         return true ;
       else
         return false;
  /*  return (state === this.address.state) */

     }
  }

  var state=myObject.isFromState("JSState");
  console.log(state);



//var -arg function : implict arguments : (1) arguments (2) this 
var add=function (a,b){
    var i, sum=0;
      for(i=0;i < arguments.length ;i++)
         sum += arguments[i] ;
      return sum;
    }
    
    console.log(add(1,2));//3
    console.log(add(1,2,3)); //6
    console.log(add(1,2,3,4)); //10

// Implict Array
var myArray = [ 100, "Hello", true, {} ]
var myFunction = function(item)
{
   console.log(item);
}
myArray.forEach(myFunction); // For every element in the array  (4 times)


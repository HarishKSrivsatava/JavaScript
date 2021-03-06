// Java script does not create scope for a block
var name = "Harish"
if(name == "Harish"){
    name2 = "Kumar"
}
console.log(name);
console.log(name2); 

// Java script only create function scope
var name = "Test"
function test(){
    if(name == "Test"){
        name3 = "New Test"
    }
}
console.log(name);
//console.log(name3); // Here name3 is accessible as it is created in test function scope


//Anonymous function and its execution
(function (){
    var a = 10, b = 20;
    console.log("Anonymous function : "+ (a+b))
})(); // This is called IIFE (Immediate Invoked Function Expression)



//Closure
var a = 10;
function outer(){
    var  b = 20;
    function inner(){
        console.log("a = " + a) ; // 10
        console.log("b = " + b) ; // 20 : Since innner () is
          // executed in the context of outer(), the variable b is like global variable for inner ().
    }
    inner();
}
outer();


var a = 10;
function outer(){
    var b = 20;
    var inner = function (){
        console.log("Inner function :" + a);
        console.log("Inner function :" + b);
    }
    return inner; // Returning the inner() function
}
var ret_inner = outer(); //catching the inner() function
ret_inner(); // execution of catched inner() function
//Note : variable b is accessible outside of the outer () function !!!  .This is because of the Closure concept of Java Script.


var a = 10;
function outer(){
    var b = 20;
    var inner = function (){
        console.log("a = " +  a +" , " + "b = "+ b);
           }
    return inner; 
}
var ret_inner = outer(); // a = 10 , b = 20
ret_inner();// a = 10 , b = 20
var ret_inner_2 = outer(); 
ret_inner_2(); // a = 10 , b = 20
//This is because of for every function call (which is actually a function object) we get a fresh copy of variable(s) of that scope.
  
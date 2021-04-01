
let myVar = 10
var myObj = {
    "prop_1": "Hello World",
    "prop_2": function test(){
        console.log(myVar);
        console.log(this.prop_1);
    }
}
myObj.prop_2()
/*
10
Hello World
*/


// Java script does not create scope for a block
var name = "Harish" // Global varaible
if(name == "Harish"){
    name2 = "Kumar"
}
console.log("Global variable : " + name); //Global variable : Harish
console.log("Block variable : " + name2); // Block variable : Kumar :> name2 is also 
//treated as global variable as Java script does not create scope for a block

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
//Note : variable b is accessible outside of the outer () function !!!  .This is because of
// the Closure concept of Java Script.


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
//This is because of for every function call (which is actually a function object)
// we get a fresh copy of variable(s) of that scope.
 

//There is no access modifier like public , private in JavaScript.
// Once created, the properties of this Person object is accessible everywhere.

var person = {
    "firstName":"Robert",
    "lastName" : "Willson",
    "getFirstName": function(){
        return this.firstName;
    }, 
    "lastName": function(){
        return this.lastName;
    }
}
console.log("First Name : " + person.firstName);
//To convert this code so that its properties are not accessible outside directly, we use the concept of Scope.
function createPerson(){
    var firstName = "Harish";
    var lastName = "Kumar";
    var person = {
        "getFirstName" : function(){
            return firstName;
        },
        "lastName" : function(){
            return lastName;
        }
    };
    return person;
    }
var personCreated = createPerson();
console.log(personCreated.getFirstName());
console.log(personCreated.firstName); // Undefined





var i = 0;
var myFun = function(){
    console.log(i);
}
for(i ; i<5; i++){
    setTimeout(myFun, 5000);
}
//Here what basically happens, the setTimeout is registered for function myFunc for 5 times that all 
//are waiting for 5 seconds. Meanwhile the value of i increases and the value of every copy of i reaches
// to 5. And finally all the 5 copies of i gets printed at once after 5 seconds.


console.log("===================================================");
var a = 100;
function outer(){
    var b = 200;
    var inner = function(){
                               a++;
                               b++;
                               console.log("a = " + a + " |" +" b = "+ b );
                          };
    return inner;
    }
//outer().inner;
var ret_inner = outer();
ret_inner(); //a = 101 b = 201
var ret_inner_2 = outer();
ret_inner_2(); //a = 102 b = 201
var ret_inner_3 = outer();
ret_inner_3(); //a = 103 b = 201
// Note : For every outer() function call, a fresh copy of 'b' is being sent
console.log("===================================================");

var myObj={}// empty object    
console.log(myObj)
myObj.prop="Hello"; // Assigning a property "prop" of object myObj and its value "Hello"
console.log(myObj);
console.log("My Object property is :"+ myObj.prop);


var myObj2={
                      "prop1": "Hello",
                      "prop2": 123,
                      "prop3": true
                    }
console.log(myObj2)



var myObject={
    "prop1" : "Hello",
    "prop2": 123,
    }

    var myObject2={
      "prop1" : "Object2",
      "prop2" : myObject ,
      "objProp": { "innerProp1" : "innerPropVal",
                   "innerProp2": "innerPropVal2"

                }
    }
    console.log(myObject2.prop2.prop2); //123
    console.log(myObject2.objProp.innerProp2); //innerPropVal2
    myObject2.objProp.newInnerProp ="newInnerPropVal";
    console.log(myObject2.objProp); //Object { innerProp1: "innerPropVal", innerProp2: "innerPropVal2", newInnerProp: "newInnerPropVal" }

    console.log(myObject2);//Object { prop1: "Object2", prop2: Object, objProp: Object }


    var myObj={
        "prop1": "Hello",
        "prop2" :"",
        "prop3": null
      };
      myObj.prop1=undefined;
      console.log(myObj.prop1);//undefined
      console.log(myObj); // Object { prop1: undefined, prop2: "", prop3: null } --> prop1 property exists in the object , it show we haven't deleted the property , but have simple masked it.

    var myObj={
        "prop1": "Hello",
        "prop2" :"",
        "prop3": null
      };
      delete myObj.prop1; // Actual deletion of property
      console.log(myObj.prop1); //undefined
      console.log(myObj); //Object { prop2: "" , prop3:null}
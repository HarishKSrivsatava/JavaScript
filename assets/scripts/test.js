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
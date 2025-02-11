//First, we'll make a basic named function
//We can call functions before they're declared due to something called HOISTING
helloWorld()

function helloWorld(){
    console.log("Hello World")
}

//anon(500) <- Anonymous functions are NOT HOISTED! So we can't invoke them before declaration

//Here's an anonymous function - it has no name but we can assign it to a variable
anon = function(var1){
    console.log("Hi I'm an anonymous function stored in a variable")
    console.log("My variable is: " + var1)
}

anon(500)

//Arrow functions are like Java lambdas - they take a value and execute some functionality
//(value(s)) => {some expression}
let arrowFunction = (var1, var2) => {
    //Let's test out == vs === just for fun
    console.log("Does " + var1 + " === " + var2 + "?")
    console.log(var1 === var2)
}

arrowFunction(10, 10)
arrowFunction("10", 10)
arrowFunction(1, true)

//Callback functions - a function that gets passed as a parameter to another function
function f1(x){
    console.log("Inside function 1")
    console.log("The value passed in from function 2 is: " + x)
    console.log("End of function 1")
}

function f2(x, someFunction){
    console.log("Inside function 2")
    someFunction(x) //calling f1 and giving it whatever parameter was sent in
    console.log("End of function 2") 
}

//invoke f2, giving it f1 as a parameter (this makes f1 the callback function in this case)

f2(3000, f1)

console.log("=================================Global Scope")



console.log("=================================Local Scope (block scope vs function scope)")



//I want to access the paragraph that had an id of "p1" - DOM SELECTION
const p1 = document.getElementById("p1")

console.log(p1)

//Now that we've DOM Selected the paragraph, we can do some DOM MANIPULATION
//For instance, we can change the attributes of the paragraph
p1.setAttribute("style", "background-color:green")

//While this is an easy example of DOM Manipulation, we won't really use it for styling too much

//DOM manipulation typically manifests as EVENTS-------------------

//DOM Select our button (id btn1)
const btn1 = document.getElementById("btn1")

//Let's attach an event listener to the button
btn1.addEventListener("click", buttonFunction)

//Let's also DOM select the empty paragraph (id p2)
const p2 = document.getElementById("p2")

function buttonFunction(){
    //alert() makes a popup on the screen
    alert("You clicked a button! Good job")

    //adding text to the previously empty paragraph
    p2.textContent = "I have content now! Thanks"
}


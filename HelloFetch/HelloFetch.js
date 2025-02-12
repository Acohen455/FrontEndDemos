//PokeAPI base URL - making a variable that holds the base URL to reach pokeAPI. Good for cleaner/standardized code
const url = "https://pokeapi.co/api/v2/pokemon/"

//DOM selection for the elements we'll fill with data after the fetch
const pokename = document.getElementById("pokename")
const poketype = document.getElementById("poketype")
const pokenum = document.getElementById("pokenum")
const pokepic = document.getElementById("pokepic")

//when the user clicks the button, take their input and use it in the fetchData function
document.getElementById("btn").onclick = fetchData


/* This function will return some Pokemon data from PokeAPI 
   It will use a fetch request to return a promise object
   The promise object will get filled with pokemon data OR it will fail */
async function fetchData(){

    //First, we need to gather the user input from the input box
    const userInput = document.getElementById("userInput").value

    console.log(userInput) //Just to see the value

    //Now, we can use the fetch() function to send a GET request to pokeAPI
    //(Fetch sends a GET default by the way)
    try{
        const response = await fetch(url + userInput)

        if(!response.ok) {
            throw new Error("It got away!")
        }

        //turn the response data into a JS object 
        const data = await response.json()

        console.log(data) //just to see the data
    } catch {
        //TODO: error handling code
    } finally {
        //TODO: cleanup code
    }


}
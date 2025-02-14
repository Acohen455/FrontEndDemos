//This component will render multiple Character components that just lay out some character data

import { useEffect, useState } from "react"
import { CharacterInterface } from "../../Interfaces/CharacterInterface"

//We can render a list of elements with the map() function
export const CharacterList:React.FC = () => {

    //State object that holds an Array of Character data
    //This Array will get populated whe the component renders thanks to useEffect
    const [characters, setCharacters] = useState<CharacterInterface[]>([])

    /*useEffect can listen for events to trigger some functionality
    Here, we'll just have it execute some code when the component renders
    
    Imagine we send a GET request to some API that gets our list of characters
    But for now, we'll just hardcode it :) we'll see axios in P1demo */
    useEffect(() => {

        //set the characters state Array to hold some Harry Potter characters
        //This is where the GET request would happen if we weren't hardcoding
        setCharacters(
            [
                {
                    name:"Dobby",
                    quote:"Master has given Dobby a sock :)"
                },
                {
                    name:"Voldemort",
                    house:"Slytherin",
                    quote:"The boy who lived... come to die"
                },
                {
                    name:"Snape",
                    house:"Slytherin",
                    quote:"MISTA POTTA"
                }
            ]
        )

    })



    return(
        <div>
            <h3>Character List: </h3>

        </div>
    )
}
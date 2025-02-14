import { CharacterInterface } from "../../Interfaces/CharacterInterface";

//This component is responsible for rendering a Character's data... 
//So it takes props of CharacterInterface type
export const Character:React.FC<CharacterInterface> = (character:CharacterInterface) => {


    return(
        <>
            <h3>{character.name} from {character.house}</h3>

            <h4>{character.name} says {character.quote}</h4>
        </>
    )

}
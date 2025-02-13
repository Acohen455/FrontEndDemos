import { useState } from "react"

export const ParentComponent:React.FC = () => {

    
    const [favColor, setColor] = useState<string>("Blue")

    return(
        <>
            <h3>Hello from the Parent Component. My Child says:</h3>

        </>
    )
}
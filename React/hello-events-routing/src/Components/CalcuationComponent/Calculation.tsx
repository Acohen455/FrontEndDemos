import { useState } from "react"
import "./Calculation.css"

export const Calculation:React.FC = () => {

    //Some state variables to store the user's input and the result of the calculation
    const [SideA, setSideA] = useState<number>(0)
    const [SideB, setSideB] = useState<number>(0)
    const [result, setResult] = useState<number>(0)

    return(
        <div className="input-container">
            <h3>Calculation Component</h3>

            <input type="number" name="SideA"/>
            <input type="number" name="SideB"/>

            <p>Result: </p>

            <button>Calculate!</button>
        </div>
    )

}
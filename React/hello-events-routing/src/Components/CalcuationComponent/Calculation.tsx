export const Calculation:React.FC = () => {



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

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Calculation } from './Components/CalcuationComponent/Calculation'

function App() {

  return (
    <>
      <h4>Welcome to the Events/Routing Demo</h4>
      <h5>Navigate to different URL endpoints to see different components</h5>

      {/* Defining Routes 
      
      TODO: anatomy notes
      */}
      <BrowserRouter>
        <Routes>
          <Route path="calc" element={<Calculation/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

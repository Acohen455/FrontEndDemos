
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Calculation } from './Components/CalcuationComponent/Calculation'
import { CharacterList } from './Components/CharacterListComponent/CharacterList'

function App() {

  return (
    <>
      <h4>Welcome to the Events/Routing Demo</h4>
      <h5>Navigate to different URL endpoints to see different components</h5>
      <h5>In a real app, we wouldn't put this statically in app.tsx^ everything would be routed probably</h5>

      {/* Defining Routes 
      
      TODO: anatomy notes
      */}
      <BrowserRouter>
        <Routes>
          <Route path="calc" element={<Calculation/>}/>
          <Route path="char" element={<CharacterList/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

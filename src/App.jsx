import { Route, Routes } from 'react-router-dom'
import './App.css'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'
import PlayGame from './pages/PlayGame/PlayGame'
import StartGame from './pages/StartGame/StartGame'

function App() {

  return (
    // <div>
    //   <h1 className='font-semibold text-3xl'>Welcome to Hang man</h1>
    //   <TextInputFormContainer onSubmit={(value) => {console.log('value comming from the hidden form is', value)}} />
    // </div>

    <Routes>
      <Route path="/play" element= { <PlayGame /> } />
      <Route path="/start" element= { <StartGame /> } />
      <Route path="*" element= { <div> Path Not found </div>} />
    </Routes>
  )
}

export default App

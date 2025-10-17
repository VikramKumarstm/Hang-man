import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import {Routes, Route} from "react-router-dom"
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {
  return (
    // <div>
    //   <h1 className="font-semibold text-3xl pb-4">Welcome to Hangman</h1>

    //   <TextInputFormContainer onSubmit={(value) => console.log("Value comming from the hidden form is :", value)} />

    // </div>

    <Routes>

      <Route path="/play" element={<PlayGame />} />
      <Route path="/start" element={<StartGame />} />
      <Route path="*" element={<div>Not Found </div>} />

    </Routes>
  )
}

export default App;
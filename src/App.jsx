import Button from "./components/Button/Button";
import TextFromInput from "./components/TextFormInput/TextFromInput";

function App() {
  return (
    <div>
      <h1 className="font-semibold text-3xl pb-4">Welcome to Hangman</h1>

      <TextFromInput onSubmit={(value) => console.log("Value comming from the hidden form is :", value)} />

    </div>
  )
}

export default App;
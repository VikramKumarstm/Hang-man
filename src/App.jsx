import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";

function App() {
  return (
    <div>
      <h1 className="font-semibold text-3xl pb-4">Welcome to Hangman</h1>

      <TextInputFormContainer onSubmit={(value) => console.log("Value comming from the hidden form is :", value)} />

    </div>
  )
}

export default App;
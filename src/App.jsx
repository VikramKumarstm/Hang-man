import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <h1 className="font-semibold text-3xl pb-4">Hang Man Projects</h1>
      <Button 
        text="Primary" 
        buttonType="submit" 
        styleType="primary"
        onClickHandler={() => console.log("Primary clicked!!!")}
      />
      <Button 
        text="Secondary" 
        buttonType="button" 
        styleType="secondary" 
        onClickHandler={() => console.log("Secondary clicked!!!")}
      />
      <Button 
        text="warning" 
        buttonType="button" 
        styleType="warning" 
        onClickHandler={() => console.log("Warning clicked!!!")}
      />

    </div>
  )
}

export default App;
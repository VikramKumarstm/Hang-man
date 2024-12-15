import './App.css'
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer'

function App() {

  return (
    <div>
      <h1 className='font-semibold text-3xl'>Welcome to Hang man</h1>
      <TextInputFormContainer onSubmit={(value) => {console.log('value comming from the hidden form is', value)}} />
    </div>
  )
}

export default App

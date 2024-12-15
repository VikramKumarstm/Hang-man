import './App.css'
import TextInputForm from './components/TextInputForm/TextInputForm'

function App() {

  return (
    <div>
      <h1 className='font-semibold text-3xl'>Welcome to Hang man</h1>
      <TextInputForm onSubmit={(value) => {console.log('value comming from the hidden form is', value)}} />
    </div>
  )
}

export default App

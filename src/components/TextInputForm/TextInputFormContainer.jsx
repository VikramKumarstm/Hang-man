// Container Component for TextInputForm

import { useState } from 'react';
import TextInputForm from './TextInputForm'

function TextInputFormContainer({onSubmit}) {

    const [value, setValue] = useState('')
    const [inputType, setInputType] = useState('')

    const handleFormSubmit = (event) => {

        event.preventDefault();
        console.log("Form submitted :", value)
        onSubmit?.(value); // if onSubmit is defined, call it with the value
    }

    const handleTextInputChange = (event) => {
        console.log("Text Input changed")
        console.log(event.target.value)
        setValue(event.target.value)

    }
    
    return (
        // Calling the presentation layer component
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            value={value}
            inputType={inputType}
            setInputType={setInputType}
        />
    )

}

export default TextInputFormContainer
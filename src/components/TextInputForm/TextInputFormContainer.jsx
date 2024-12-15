// Container Component for TextInputForm

import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer({ onSubmit }) {

    const [value, setValue] = useState('');
    const [inputType, setInputType] = useState('password');

    function handleFormSubmit(event) {
        console.log('handleFormSubmit triggered');
        event.preventDefault();
        console.log('form submitted', value);
        onSubmit?.(value); // if onSubmit is defined, call it with the value
    }

    function handleTextInputChange(event) {
        console.log('Text  input Changed');
        console.log(event.target.value);
        setValue(event.target.value);  //Whenever I type in the input field, It will update the value
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

export default TextInputFormContainer;
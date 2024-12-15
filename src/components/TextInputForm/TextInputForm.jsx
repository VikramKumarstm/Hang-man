import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button"
import { useState } from "react";

function TextInputForm({ onSubmit }) {

    const [value, setValue] = useState('');

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
        <form className="flex" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput 
                    label={"Enter a word or phrase"}
                    type="password"
                    value={value}
                    onChange={handleTextInputChange}
                />
            </div>

            <div className="flex">
                <Button 
                    text="OK"
                    type="submit"
                    onClickHandler={handleFormSubmit}
                />
            </div>
        </form>
    );
}

export default TextInputForm;
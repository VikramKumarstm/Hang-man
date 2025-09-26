import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextFromInput({onSubmit}) {

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
    <form className="flex items-center" onSubmit={handleFormSubmit}>
      <div className="mr-2 ml-2 flex-1">
        <TextInput 
            type={inputType} 
            label="Enter a word or phrase"
            value={value}
            onChange={handleTextInputChange} 
        />
      </div>
      <div className="">
        <Button
            text={inputType === "password" ? "Show" : "Hide"}
            onClickHandler={() => setInputType(inputType === "password" ? "text" : "password")}
            buttonType="submit"
            styleType="primary" 
        />
      </div>
      <div className="">
        <Button
            text="Ok"
            buttonType="submit"
            styleType="primary" 
        />
      </div>
    </form>
  );
}

export default TextFromInput;

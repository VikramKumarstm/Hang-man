// Presentation Component

import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextFromInput({ handleFormSubmit, handleTextInputChange, value, inputType="text", setInputType }) {

  return (
    <form className="flex items-end" onSubmit={handleFormSubmit}>
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
            styleType="warning" 
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

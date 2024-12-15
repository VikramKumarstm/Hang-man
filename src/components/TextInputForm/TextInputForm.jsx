// Presentation Component

import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button"

function TextInputForm({ handleFormSubmit, handleTextInputChange, value, inputType= "text", setInputType }) {

    

    return (
        <form className="flex items-end" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput 
                    label={"Enter a word or phrase"}
                    type={inputType}
                    value={value}
                    onChange={handleTextInputChange}
                />
            </div>

            <div className="flex ml-2 mr-2">
                <Button
                    text={`${inputType == "password" ? "Show" : "Hide"}`}
                    styleType='secondary'
                    onClickHandler={() => setInputType(inputType == "password" ? "text" : "password")}
                />
            </div>

            <div className="flex">
                <Button 
                    text="OK"
                    buttonType="submit"
                />
            </div>
        </form>
    );
}

export default TextInputForm;
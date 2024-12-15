import getButtonStyling from "./getButtonStyleType";


function Button({ text, buttonType='button', styleType, onClickHandler}) {
  return (
    <button
        type={buttonType} 
        onClick={onClickHandler}
        className={`px-4 py-2 ${getButtonStyling(styleType)} rounded-md text-[#fff] transition-all`}
      >

        {text}

    </button>
  );
}

export default Button;
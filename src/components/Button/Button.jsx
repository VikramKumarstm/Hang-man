import getButtonStyling from "./getButtonStyleType";


function Button({ text, buttonType='button', styleType, onClickHandler}) {
  return (
    <button
        type={buttonType} 
        onClick={onClickHandler}
        className={`py-2 px-4 ${getButtonStyling(styleType)} rounded-md text-[#fff] transition-all`}
      >

        {text}

    </button>
  );
}

export default Button;

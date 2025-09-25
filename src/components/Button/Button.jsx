import React from 'react'
import buttonStyling from './getStyleType'

function Button({ text, buttonType, styleType, onClickHandler }) {
  return (
    <button 
        onClick={onClickHandler}
        type={buttonType}
        className={` ${buttonStyling(styleType)} px-4 py-2 text-white rounded-md transition-all cursor-pointer`}
    >
        {text}
    </button>
  )
}

export default Button
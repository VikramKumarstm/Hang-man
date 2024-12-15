function getButtonStyling(styleType) {
    const primaryButtonStyling = " bg-blue-500 border border-blue-700  hover:bg-blue-700";
    const secondaryButtonStyling = " bg-yellow-500 border border-yellow-700 hover:bg-yellow-700";
    const warningButtonStyling = " bg-red-500 border border-red-700 hover:bg-red-700"

    if(styleType == "primary") {
        return primaryButtonStyling;
    } else if(styleType == "secondary") {
        return secondaryButtonStyling;
    } else if(styleType == "danger") {
        return warningButtonStyling;
    } else {
        return primaryButtonStyling;
    }
}

export default getButtonStyling;
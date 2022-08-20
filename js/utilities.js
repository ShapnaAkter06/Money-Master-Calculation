function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValue = parseFloat(textElement.innerText);
    return textElementValue;
}
function seTextElementValueById(elementId, newValue){
    textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
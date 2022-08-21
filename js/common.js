//function to set increment/decrement
function qty(isIncrement, fieldId) {
  const getPriceField = document.getElementById(fieldId);
  const getPriceFieldValue = getPriceField.value;
  const priceField = parseInt(getPriceFieldValue);
  let updatedQty;
  if (isIncrement === true) {
    updatedQty = priceField + 1;
  } else {
    updatedQty = priceField - 1;
  }
  if (updatedQty < 1 || updatedQty > 99) {
    alert("Quantity should be in 1-99");
    return;
  }
  getPriceField.value = updatedQty;
  return updatedQty;
}

//get value of field
function getFieldValue(fieldId) {
  const fieldValue = document.getElementById(fieldId);
  const field = parseInt(fieldValue.value);
  return field;
}
//get value of element
function getElementValue(elementId) {
  const elementValue = document.getElementById(elementId);
  const element = parseInt(elementValue.innerText);
  return element;
}

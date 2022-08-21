//case section
document
  .getElementById("case-increment")
  .addEventListener("click", function () {
    qty(true, "case-qty");
    //update price
    const fieldQty = getFieldValue("case-qty");
    const updatePrice = document.getElementById("case-price");
    const getPrice = parseFloat(updatePrice.innerText);
    const setPrice = 59 * fieldQty;
    updatePrice.innerText = setPrice;
  });
document
  .getElementById("case-decrement")
  .addEventListener("click", function () {
    qty(false, "case-qty");
    //update price
    const fieldQty = getFieldValue("case-qty");
    const updatePrice = document.getElementById("case-price");
    const getPrice = parseFloat(updatePrice.innerText);
    const setPrice = 59 * fieldQty;
    updatePrice.innerText = setPrice;
  });

//phone section
document
  .getElementById("phone-increment")
  .addEventListener("click", function () {
    qty(true, "phone-qty");
    //update price
    const fieldQty = getFieldValue("phone-qty");
    const updatePrice = document.getElementById("phone-price");
    const getPrice = parseFloat(updatePrice.innerText);
    const setPrice = 1219 * fieldQty;
    updatePrice.innerText = setPrice;
    calculateSubTotal("setPrice");
  });
document
  .getElementById("phone-decrement")
  .addEventListener("click", function () {
    qty(false, "phone-qty");
    //update price
    const fieldQty = getFieldValue("phone-qty");
    const updatePrice = document.getElementById("phone-price");
    const getPrice = parseFloat(updatePrice.innerText);
    const setPrice = 1219 * fieldQty;
    updatePrice.innerText = setPrice;
    calculateSubTotal("setPrice");
  });

let cash = document.getElementById("cash");
let card = document.getElementById("card");
let instaPay = document.getElementById("instapay");
let cashPay = document.getElementById("cash-form");
let cardForm = document.getElementById("card-form");
let instaPayForm = document.getElementById("instapay-form"); 

// Add event listeners to the radio buttons
cash.addEventListener("change", updateFormDisplay);
card.addEventListener("change", updateFormDisplay);
instaPay.addEventListener("change", updateFormDisplay);

function updateFormDisplay() {
  if (cash.checked && cashPay) {
    cashPay.style.display = "block";
  } else if (cashPay) {
    cashPay.style.display = "none";
  }

  if (card.checked && cardForm) {
    cardForm.style.display = "block";
  } else if (cardForm) {
    cardForm.style.display = "none";
  }

  if (instaPay.checked && instaPayForm) {
    instaPayForm.style.display = "block";
  } else if (instaPayForm) {
    instaPayForm.style.display = "none";
  }
}

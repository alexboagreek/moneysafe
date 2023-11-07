import { convertStringToNumber } from "./convertStringToNumber.js";

const financeForm =  document.querySelector('.finance__form'); 
const financeAmount = document.querySelector('.finance__amount');

let amount = 0;

financeAmount.textContent = amount;

financeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const typeOperation = event.submitter.dataset.typeOperation;
  const changeAmount = Math.abs(convertStringToNumber(financeForm.amount.value));

  if (typeOperation === 'income') {
    amount += changeAmount; 
  }

  if (typeOperation === 'expenses') {
    amount -= changeAmount;
  }

  financeAmount.textContent = `${amount.toLocaleString()} ₽`;
});
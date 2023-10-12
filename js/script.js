// seleção de elementos
const multiplicationForms = document.querySelector('#multiplication-form');
const numberInput = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplicator');
const multiplicationTable = document.querySelector(
  '#multiplication-operations'
);
const multiplicationTitle = document.querySelector(
  '#multiplication-title span'
).value;

// Funções
const createTable = (number = 0, multiplicatorNumber = 1) => {
  multiplicationTable.innerHTML = '';
  for (let i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i;
    const template = `<div class="row">
      <div class"operation">${number} x ${i} = </div>
      <div class="result">${result}</div>
      `;
    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, 'text/html');
    const row = htmlTemplate.querySelector('.row');
    multiplicationTable.appendChild(row);
  }
  multiplicationTitle.innerText = number;
};

// Eventos
multiplicationForms.addEventListener('submit', (e) => {
  e.preventDefault();

  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;
  if (!multiplicatorNumber) {
    alert('Necessário digitar uma quantidade de vezes para multiplicar!');
  }
  createTable(multiplicationNumber, multiplicatorNumber);
});
// createTable;

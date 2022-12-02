// Creare spesaArray per la lista della spesa
const spesaArray = [
    'banana',
    'kebab',
    'pollo',
    'pizza',
    'pasta',
    'acqua',
    'succo',
    'riso'
];
let container = document.querySelector('.lista');
let i = 0;
let list = '';
while(i < spesaArray.length){
    list += `<li>${spesaArray[i]}</li>`
    container.innerHTML = list
    i++;
}
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
// stampo lista
// riporto il DOM
let container = document.querySelector('.lista');
let i = 0;
let list = '';
// Creo la il loop per poi crearmi la lista
while(i < spesaArray.length){
    list += `<li>${spesaArray[i]}</li>`
    container.innerHTML = list
    i++;
}
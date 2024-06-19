const footer = document.getElementsByTagName('footer');
const parrafoFooter = document.createElement('p');
const TIME = new Date().getFullYear(); // 2024

footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = 'Exclusive Sport - ' + TIME + ' | Julián Martínez';
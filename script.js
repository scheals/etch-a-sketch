const button = document.querySelector('.reset-btn');
const buttonListener = button.addEventListener('click', function () {resetGrid()});
createGrid(16);
squareMagic();
function resetGrid () {
    const divRow = document.querySelector('.grid');
    while (divRow.firstChild) {
        divRow.removeChild(divRow.firstChild);
    }
    let squareNumber = +prompt("How many squares per row & column?", "Accepted range: 0-100");
    createGrid(squareNumber);
    squareMagic();
    return squareNumber;
}

function createGrid(number) {
    if ((number > 100) || (number < 0)) return alert("Only positive numbers less than 100 accepted!");
    const gridContainer = document.querySelector('.grid');
    for (let i = 1; i <= number; i++) {
        const divRow = document.createElement('div');
        divRow.setAttribute('class', 'row');
        gridContainer.appendChild(divRow);
        for (let i = 1; i <= number; i++) {
            const divSquare = document.createElement('div');
            divSquare.setAttribute('class', 'square');
            divSquare.setAttribute ('style', 'background-color: black;');
            divRow.appendChild(divSquare);
        }
    }
}

function squareMagic () {
    const square = document.querySelectorAll('.square');
    square.forEach(element => squareListener(element));
}
function squareListener(element) {
    element.addEventListener('mouseover', function() {randomColor(element)});
}
function randomColor(element) {
    let r = Math.floor([Math.random()] * 255);
    let g = Math.floor([Math.random()] * 255);
    let b = Math.floor([Math.random()] * 255);
    return element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
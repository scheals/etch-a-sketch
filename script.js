const button = document.querySelector('.reset-btn');
const buttonListener = button.addEventListener('click', function () {resetGrid()});

createGrid(16);
squareMagic();

function resetGrid () {
    const gridContainer = document.querySelector('.grid');
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
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
    if (element.dataset.mouseovers === undefined) {  
        element.setAttribute('data-mouseovers', 1);
    }
    let mouseoverMultiplier = +element.dataset.mouseovers;
    let h = (Math.floor([Math.random()] * 360));
    let s = (Math.floor([Math.random()] * 100));
    let l = (Math.floor([Math.random()] * 100)) * mouseoverMultiplier;
    if (mouseoverMultiplier > 0) mouseoverMultiplier -= 0.1;
    element.setAttribute('data-mouseovers', mouseoverMultiplier);
    return element.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
}

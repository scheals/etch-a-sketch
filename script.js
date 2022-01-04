const button = document.querySelector('.reset-btn')
const buttonListener = button.addEventListener('click', function () {resetGrid()});
createGrid(16);
function resetGrid () {
    const divRow = document.querySelector('.grid');
    while (divRow.firstChild) {
        divRow.removeChild(divRow.firstChild);
    }
    let squareNumber = +prompt("How many squares per row & column?", "Accepted range: 0-100")
    return createGrid(squareNumber);
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
            divRow.appendChild(divSquare);
        }
    }
}

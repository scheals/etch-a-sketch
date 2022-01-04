const gridContainer = document.querySelector('.grid');

for (let i = 1; i <= 16; i++) {
    const divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');
    gridContainer.appendChild(divRow);
    for (let i = 1; i <= 16; i++) {
        const divSquare = document.createElement('div');
        divSquare.setAttribute('class', 'square');
        divRow.appendChild(divSquare);
    }
}

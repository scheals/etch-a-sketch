const gridContainer = document.querySelector('.grid');
for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    gridContainer.appendChild(div);
}
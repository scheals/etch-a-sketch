const gridContainer = document.querySelector('main');
for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    gridContainer.appendChild(div);
}
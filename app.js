// Create a container and append to body
const container = document.querySelector('#container');

createGrid();

function createGrid(){
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.cssText = 'display: flex; flex-direction: row; align-content: center; height: 1em; width: 16em;';
        for(let j = 0; j < 16; j++){
            const col = document.createElement('div');
            col.classList.add('col', 'grid');
            col.style.height = '1em';
            col.style.width = '1em';
            col.style.border = '1px dotted black';
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}

//change color of columns
const grids = document.querySelectorAll('.grid');
grids.forEach(grid =>{
    grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = 'grey'; 
    });
});

//reset grid
function reset(){
    grids.forEach(grid => {
        grid.style.backgroundColor = 'white';
    });
}

document.querySelector('#reset').onclick = reset;
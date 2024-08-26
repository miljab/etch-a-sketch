const container = document.querySelector(".container");

const CONTAINER_SIZE = 860;
let size = 16;
createGrid()

function createGrid() {
    for(let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.className = "square";
        square.style.width = (CONTAINER_SIZE/size).toString() + "px";
        square.style.height = (CONTAINER_SIZE/size).toString() + "px";
        container.appendChild(square);
    }
}


container.addEventListener("mouseover" , (event) => {
    let r = Math.floor(Math.random() * 256).toString();
    let g = Math.floor(Math.random() * 256).toString();
    let b = Math.floor(Math.random() * 256).toString();
    let rgb = "rgb(" + r + " " + g + " " + b + ")"

    
    event.target.style.backgroundColor = rgb;
})

const button = document.querySelector(".button");

button.addEventListener("click", () => {
    size = prompt("Enter the number of squares per side for new grid:");
    if(size > 100) size = 100;
    container.textContent = '';
    createGrid();
})

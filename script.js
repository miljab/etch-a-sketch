const container = document.querySelector(".container");

const CONTAINER_SIZE = 860;
let size = 16;

for(let i = 0; i < size * size; i++) {
    let square = document.createElement('div');
    square.className = "square";
    square.style.width = (860/size).toString() + "px";
    square.style.height = (860/size).toString() + "px";
    container.appendChild(square);
}

container.addEventListener("mouseover" , (event) => {
    event.target.style.backgroundColor = "green";
})



let size = 16;
let newSize = size;
const container = document.querySelector(".container");

let myDivs = [];

function createGrid(size){


    for(let i = 1; i <= size;i++){
                for(let x = 1; x <= size; x++){
                    const div = document.createElement("div");
                    div.style.width = (992- size*2)/size +"px";
                    div.style.height = (992- size*2)/size +"px";
                    myDivs.push(div);
                    div.classList.add("divs");
                    container.appendChild(div);
                    div.addEventListener("mouseover", function(e){
                        e.target.style.backgroundColor = `rgb(${randomize(255)},${randomize(255)},${randomize(255)},1)`;
                    })
                    
                }
    }
} 

function removeGrid(){
    myDivs.forEach( (div) => div.remove());
}       

function chooseSize(){
    newSize = prompt("Enter number of squares per row");
    if (newSize > 100){
        newSize = 100;
        alert("You can't choose over 100 rows!");
    }
    removeGrid();
    createGrid(newSize);
}

function randomize(num){
 return Math.floor(Math.random()*num+1);
}


const clearButton = document.querySelector(".clear");
const sizeButton = document.querySelector(".size");
sizeButton.addEventListener("click", chooseSize);
clearButton.addEventListener("click", function(){
    removeGrid();
    createGrid(newSize);
});

createGrid(size);


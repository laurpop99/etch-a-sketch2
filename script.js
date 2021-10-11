const GRIDSIZE = 16;
const container = document.querySelector(".container");

function createGrid()
{
        for(let i = 1; i <= GRIDSIZE;i++)
        {
            for(let x = 1; x <= GRIDSIZE; x++)
            {
                const div = document.createElement("div");
                div.classList.add("divs");
                container.appendChild(div);
                
            }
        }


}

createGrid();
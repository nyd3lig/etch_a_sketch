    let grid
    let container = document.getElementById("container");
    let newGridButton = document.getElementById("newGridButton");
    let rainbowButton = document.getElementById("rainbowButton")
    
    //Invokes function to create divs for a 16x16 grid.
    divCreator(256);

    rainbowButton.addEventListener("click", () => {
        removeGrid(container);
        divCreatorRainbow(newGrid())
    })
    /* Button function that removes the old grid, and spawns a new grid by prompting the user for a number, and using said number for css grid, 
    then spawning all the divs needed for the entire grid */
    newGridButton.addEventListener("click", () => {
        //Invokes the remove grid function
        removeGrid(container);
        
        //Invokes the function that spawns all the divs needed for the grid.
        divCreator(newGrid());
            
    })

    
    // Creates divs for the grid.
    function divCreator (value) {
        for (let i = 0; i < value; i++) {
            grid = document.createElement("div");
            grid.className = "grid";
            grid.addEventListener("mouseover", () => event.currentTarget.style.backgroundColor = "black")
            document.getElementById("container").appendChild(grid);
            }
        }
    function divCreatorRainbow (value) {
            for (let i = 0; i < value; i++) {
                grid = document.createElement("div");
                grid.className = "grid";
                grid.addEventListener("mouseover", () => event.currentTarget.style.backgroundColor = randomColor());
                document.getElementById("container").appendChild(grid);
                }
            }
        
    // Checks if parent has a child, if it has a child removes said child.
    function removeGrid(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
            }
        }
    // Function that creates random color.
    function randomColor () {
        let x = Math.floor(Math.random()*256);
        let y = Math.floor(Math.random()*256);
        let z = Math.floor(Math.random()*256);
        let bgColor = `rgb(${x},${y},${z})`
        event.currentTarget.style.backgroundColor = bgColor;
        }


    function newGrid () {
          //Prompts user for a value, and sets said value to be the CSS grid columns.
          let gridSizeNumber = prompt("How big do you want the grid?");
          container.style.gridTemplateColumns = `repeat(${gridSizeNumber}, 1fr)`;
          //Multiplies the prompted value to get all the divs needed for the grid.
          let entireGrid = gridSizeNumber * gridSizeNumber;
          return entireGrid;
          
    }
  
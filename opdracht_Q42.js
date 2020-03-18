// Author: Noana Smits

// Initialisation variables
let grid = [];
let cols = 50;
let rows = 50;
let w = 10;

// Generic function for the creation of a 2D Grid
function make2DGrid(cols, rows){
  var gr = new Array(cols);
  for (var i = 0; i < gr.length; i++){
    gr[i] = new Array(rows);
  }
  return gr;
}

// Initial set up of the Grid
function setup() {
  createCanvas(2500,2500);
  grid = make2DGrid(cols, rows);
  for (let i = 0; i<cols; i++){
    for(let j = 0; j<rows; j++){
      grid[i][j] = new Cell(i, j, w);
    }
  }
}


// Draw is a continuous looping function
function draw() {
  background(0);
  for (let i = 0; i<cols; i++){
    for(let j = 0; j<rows; j++){
      grid[i][j].show();
    }
  }
}

// Checks if mouse has been pressed
function mousePressed(){
  for (let i = 0;i<cols; i++){
    for (let j = 0;j<rows; j++){
      if (grid[i][j].contains(mouseX, mouseY)) {
        grid[i][j].addValue();
      }
    }
  }
  
  for (let i = 0;i<cols; i++){
      for (let j = 0;j<rows; j++){
        grid[i][j].fibonacci();
    }
  }
}

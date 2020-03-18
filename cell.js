// Create a class for Cell
class Cell{
  constructor(i, j, w){
    this.i = i; 
    this.j = j;
    this.x = i * w; //x position in grid pixel wise
    this.y = j * w; //y position in grid pixel wise
    this.w = w; //width
    this.v = 0; //value
    this.clr = 255;
  }
  
// Checks if a cell has been clicked
  contains(xb,yb){
    return (xb > this.x && xb<this.x +w && yb > this.y && yb<this.y + w);
  }
  
// Function that is called when a cell is pressed. Adds +1 to the row and column of the pressed cell and lights them up temporarily
  addValue(){
    for (let j = 0; j < rows; j++){
      var collcell = grid[this.i][j];
      collcell.v += 1;
      collcell.lightUpyellow();
    }
    for (let i = 0; i < cols; i++){
      var rowcell = grid[i][this.j];
      if (rowcell != grid[this.i][this.j]){
        rowcell.v += 1;
        rowcell.lightUpyellow();
      } 
    }
  }


// Function that checks if 5 cells are in fibonacci sequence, and if so, changes the value to 0 and color temp to green
  fibonacci(){
    var truthTable = [];
    if (this.i<45){
      // Checks whether 5 cells are in the fibonacci sequence
      for (let i = this.i; i < this.i + 3; i++){
        var currentCell = grid[i][this.j];
        var neighbour1 = grid[i+1][this.j];
        var neighbour2 = grid[i+2][this.j];
        // Accounts for when neighbours are 0
        if (neighbour1.v ==0){
          truthTable.push(false);
        }else{
          if (currentCell.v + neighbour1.v == neighbour2.v){
            truthTable.push(true);
          }else{
          truthTable.push(false);
          }
        }
      } 
      // If the cells are in a fb sequence, set value to 0 and lightupgreen
      if (truthTable.every(Boolean)){
        for (let i = this.i ; i < this.i + 5; i++){
           grid[i][this.j].v = 0;
           grid[i][this.j].lightUpgreen();
          } 
        } 
    }
  }
  
// Function for lighting up cells yellow temporarily
  lightUpyellow(){
    this.clr = '#FFFF33';
    setTimeout(this.makenormal.bind(this), 200) ;
  }
  
// Function for lighting up cells green temporarily
  lightUpgreen(){
    this.clr = '#228B22';
    setTimeout(this.makenormal.bind(this), 200) ;
  }
  
//Auxiliary function for light up functions
  makenormal(){
    this.clr = 255;
  } 
    
// Function for displaying the grid cells 
  show() {
    stroke(1);
    strokeWeight(2);
    fill(this.clr);
    rect(this.x, this.y, this.w, this.w);
  }
}

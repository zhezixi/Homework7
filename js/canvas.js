// Variables!
var color ="red";
var radius = 15;

var x = 50;
var y = 150;

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");
var mouseX,mouseY,mouseDown=0;

var width = canvas.width;
var height = canvas.height;

var newColor = document.querySelector("#clr").value;
var startDrawing = true;
//You will want to add more
ctx.fillStyle = "#FF0000";
draw()
//canvas element should have a width of 75% of the screen width and a height of 75% of the screen height.
width= 0.75* window.innerWidth;
height = 0.75* window.innerHeight;

//Listeners!!
//Add a listener for loading the window
window.addEventListener('load',function(e){
  console.log("loading window...")
})
//Add a listener for the mouse movement
canvas.addEventListener('mousemove', function(e) {
  console.log(e.x);
  console.log(e.y);
  x = e.x;
  y = e.y;
  draw()
})

//Add a listener for the touch move
canvas.addEventListener('touchmove', function(e){
  x = e.touches[0].pageX;
  y = e.touches[0].pageY;
  draw();
})



//Add a listener for the keydown
document.addEventListener('keydown', function(e) {
  console.log("In keydown")
  console.log(e.keyCode);
  if(e.keyCode == 66){
    console.log("i hit b");
    ctx.fillStyle ="#0000FF";
  }
  else if(e.keyCode == 82){
    console.log("i hit r");
    ctx.fillStyle ="#FF0000";
  }
  else if(e.keyCode == 71){
    console.log("i hit g");
    ctx.fillStyle ="#00FF00";
  }
  else if(e.keyCode == 89){
    console.log("i hit Y");
    ctx.fillStyle ="#FFFF00";
  }

  //clean the Canvas by space key
  else if(e.keyCode == 32){
    console.log("clear the canvas");
    ctx.clearRect(0, 0, width, height);
  }
  //stop drawing by up arrow
  else if(e.keyCode == 38){
    startDrawing = false;
    console.log("stop drawing");
  }

  //start to draw by down arrow
  else if(e.keyCode == 40){
    startDrawing = true;
    console.log("start drawing");
  }
})

//Add a listener for the colorpicker
clr.addEventListener('input', function(e){
  console.log("color picker");
  console.log(this);
  console.log(e);
  //find the new value of the clr colorpicker
  //use that value to update the color of the drawing
  ctx.fillStyle = this.value;
  console.log("color changed");
  })

// Functions!
// I would add a function for draw
function draw(){
  console.log("start to draw");
  ctx.beginPath();
  ctx.arc(x,y,radius,0,2*Math.PI);
  ctx.fill();
}

//touch function

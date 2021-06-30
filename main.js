canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1;


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
current_position_of_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
   ctx.beginPath();
   ctx.strokeStyle=color;
   ctx.lineWidth=width_of_line;
  ctx.arc(current_position_of_x,current_position_of_y,40,0,2*Math.PI)
ctx.stroke();  
}
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
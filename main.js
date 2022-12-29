canvas=document.getElementById("myCanvas")
var mouseEvent=""
var last_x
var last_y
ctx=canvas.getContext("2d")
color="black"
widthOfLine=1
canvas.addEventListener("mousedown", my_Mousedown)
function my_Mousedown(e){
mouseEvent="mousedown"
color=document.getElementById("Color").value  
widthOfLine=document.getElementById("Width").value
}
canvas.addEventListener("mousemove",my_Mousemove)
function my_Mousemove(e){
    current_X=e.clientX-canvas.offsetLeft
    current_Y=e.clientY-canvas.offsetTop
    if (mouseEvent=="mousedown"){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthOfLine
    ctx.moveTo(last_x,last_y)
    ctx.lineTo(current_X,current_Y)
    ctx.stroke()
    }

    last_x=current_X
    last_y=current_Y
}
canvas.addEventListener("mouseleave",my_Mouseleave)
function my_Mouseleave(e){
    mouseEvent="mouseleave"
}
canvas.addEventListener("mouseup",my_Mouseup)
function my_Mouseup(e){
    mouseEvent="mouseup"
}
function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
canvas.addEventListener("touchstart", my_Touchstart)
function my_Touchstart(e){
    color=document.getElementById("Color").value  
    widthOfLine=document.getElementById("Width").value
    last_X=e.touches[0].clientX-canvas.offsetLeft
    last_Y=e.touches[0].clientY-canvas.offsetTop
}
canvas.addEventListener("touchmove",my_Touchmove)
function my_Touchmove(e){
    current_X=e.touches[0].clientX-canvas.offsetLeft
    current_Y=e.touches[0].clientY-canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=widthOfLine
    ctx.moveTo(last_x,last_y)
    ctx.lineTo(current_X,current_Y)
    ctx.stroke()
    last_x=current_X
    last_y=current_Y
}
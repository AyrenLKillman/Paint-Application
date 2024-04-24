//all Values
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clearbtn = document.getElementById("clear");
const colorCng = document.getElementById("ColorSet");
const eraser = document.getElementById("eraser");
const sizeCng = document.getElementById("size")
const sizeUp = document.getElementById("increase")
const sizeDown = document.getElementById("decrease")
const dotsonly = document.getElementById("dotonly")
const dotsact = document.getElementById("dotsact")

let size = 10
let isPressed = false
let color = 'rgb(0,0,0)'
let NextColor = document.getElementById("color");
let x
let y
let dots = false
 



//########################################################################
//Event Listeners

//clear Event Listener (added by me)
clearbtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    color = NextColor.value
});

//color Change event listener (added by me)
colorCng.addEventListener("click", () => {
    color = NextColor.value
    console.log(NextColor.value)
});
//eraser Event Listener (added by me)
eraser.addEventListener("click", () => {
    color = "#f5f5f5";
});

// size up event Listener (added by me)
sizeUp.addEventListener("click", () => {
    //the max pen size is 40, cuz i didnt want the user to be able to fill the whole screen with 1 click
    if (size === 40){
        size = size;
    }else{
        size = size + 1
    }
    sizeCng.textContent = size
});


//size down event listener (added by me)
sizeDown.addEventListener("click", () => {
    //min size is 1, because if it could be 0, or even negative, the website would break
    if (size === 1){
        size = size;
    } else {
        size = size - 1;
    }
    sizeCng.textContent = size
});
//dots only function, it litterally turns off the function that makes the drawing smooth
dotsonly.addEventListener("click", () => {
    if (dots === false){
        dots = true;
        dotsact.classList.add("ACTIVATED")
        dotsact.classList.remove("DEACTIVATED")
    } else if (dots === true){
        dots = false;
        dotsact.classList.remove("ACTIVATED")
        dotsact.classList.add("DEACTIVATED")
    }
});






//rest not by me (tutorial)
canvas.addEventListener("mousedown", (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener("mouseup", (e) => {
    isPressed = false
    x = undefined
    y = undefined
})

canvas.addEventListener("mousemove", (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

       drawCircle(x2, y2)
       drawLine(x, y, x2, y2)

       x = x2
       y = y2
    }
    
})
//########################################################################
//functions



//tutorial functions
function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
   if(dots === false){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()} 
    else {
    }
    
}



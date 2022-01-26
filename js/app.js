var degrees = 5;
var howFast = 1;
function rotate(elementToRotate, deg){
    var element = document.getElementById(elementToRotate);
    element.style.transform = 'rotate('+ deg + 'deg)';
    changeDegrees();
}

function changeDegrees(){
    degrees += howFast;
    if(degrees > 360){
        degrees = degrees - 360;
    }
}

setInterval(()=>{
    rotate("piechart", degrees)
    }, 1);
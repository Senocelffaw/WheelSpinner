import Rotator from './rotator.js';

var rotate = new Rotator(5);

var stop1;
var stop2;
var buttonId = document.getElementById("start");

function startInterval(){
    stop1 = setInterval(()=>{
        rotate.rotate("pie_chart", rotate.degrees)
        }, 10);
    
    stop2 = setInterval(()=>{
        rotate.setSpeed(rotate.howFast - 1);
        if(rotate.howFast <= 0){
            clearInterval(stop1);
            clearInterval(stop2);
        }
    }, 1000);
}


buttonId.addEventListener('click', ()=>{

    rotate.setSpeed(5);
    startInterval();
    
});

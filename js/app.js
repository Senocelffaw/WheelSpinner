import Rotator from './rotator.js';
import TimedRotation from './TimedRotation.js';

var toRotate = document.getElementById("pie_chart");
var buttonId = document.getElementById("start");

var rotating = new TimedRotation(toRotate, 5);



buttonId.addEventListener('click', ()=>{

    rotating.rotate(5);

});

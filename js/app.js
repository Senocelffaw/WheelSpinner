import Rotator from './rotator.js';

var rotate = new Rotator(20);

setInterval(()=>{
    rotate.rotate("piechart", rotate.degrees)
    }, 1);

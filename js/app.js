import Wheel from './Wheel.js';


var toRotate = document.getElementById("pieChart");
var domBackground = document.getElementById("pieBackground");
var buttonId = document.getElementById("start");

var toRemove = document.getElementById("toRemove");
var removeButtom = document.getElementById("removeTask");

var addButtom = document.getElementById("addTask");
var taskText = document.getElementById("taskToAdd");

var wheel = new Wheel(toRotate, 5, toRemove, domBackground);



buttonId.addEventListener('click', ()=>{

    wheel.rotate();
    wheel.updateWheelColours();

});

addButtom.addEventListener('click', ()=>{

    if(taskText.value != ""){
        wheel.addToList(taskText.value);
        taskText.value = "";
        taskText.focus();
        wheel.updateWheel();
    }

});

removeButtom.addEventListener('click', ()=>{
    if(toRemove.options.length > 1){
        wheel.removeFromList(toRemove.options[toRemove.selectedIndex].text);
        toRemove.remove(toRemove.selectedIndex);
        wheel.updateWheel();
    }

});

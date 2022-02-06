import Wheel from './Wheel.js';


var toRotate = document.getElementById("pieChart");
var buttonId = document.getElementById("start");

var toRemove = document.getElementById("toRemove");
var removeButtom = document.getElementById("removeTask");

var addButtom = document.getElementById("addTask");
var taskText = document.getElementById("taskToAdd");

var wheel = new Wheel(toRotate, 5, toRemove);


buttonId.addEventListener('click', ()=>{

    wheel.rotate();

});

addButtom.addEventListener('click', ()=>{

    wheel.addToList(taskText.value);

});

removeButtom.addEventListener('click', ()=>{

    wheel.removeFromList(toRemove.options[toRemove.selectedIndex].text);
    toRemove.remove(toRemove.selectedIndex);

});

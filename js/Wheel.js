import TimedRotation from './TimedRotation.js';

export default class Wheel{

    rotatingElement;
    select;
    wheelList = new Array;


    constructor(DOMElement, speed, selectElement){
        this.rotatingElement = new TimedRotation(DOMElement, speed);
        this.select = selectElement;
    }

    rotate(){
        this.rotatingElement.rotate();
    }

    addToList(item){
        let temp = document.createElement("option"); 
        temp.text = item;
        this.wheelList.push(item);
        this.select.add(temp);
    }

    removeFromList(item){
        this.wheelList.splice(this.wheelList.indexOf(item), 1);
    }

}
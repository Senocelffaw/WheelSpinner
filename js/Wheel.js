import TimedRotation from './TimedRotation.js';

export default class Wheel{

    rotatingElement;
    select;

    DOMElement;
    wheelListOption = new Array;
    wheelListElement = new Array;


    constructor(DOMElement, speed, selectElement){
        this.DOMElement = DOMElement;
        this.rotatingElement = new TimedRotation(DOMElement, speed);
        this.select = selectElement;
    }

    rotate(){
        this.rotatingElement.rotate();
    }

    addToList(item){
        let temp = document.createElement("option"); 
        temp.text = item;

        let tempDiv = document.createElement("div");
        tempDiv.className = 'absolute';
        tempDiv.innerHTML = item;

        this.wheelListElement.push(tempDiv);
        this.wheelListOption.push(item);
        this.select.add(temp);
        this.DOMElement.appendChild(tempDiv);
    }

    removeFromList(item){
        if(this.wheelListOption.length > 0){
            let temp = this.wheelListElement[this.wheelListOption.indexOf(item)];
            temp.parentNode.removeChild(temp);

            this.wheelListElement.splice(this.wheelListOption.indexOf(item), 1);
            this.wheelListOption.splice(this.wheelListOption.indexOf(item), 1);
        }
    }

    updateWheel(){
        let segments = this.wheelListElement.length;
        let degrees = 360/(segments);
        let transformDeg = 0;

        for(var i = 0; i < segments; i++){
            transformDeg += degrees;
            this.wheelListElement[i].style.transform = "rotate(" + transformDeg + "deg)"; 
        }
    }

}
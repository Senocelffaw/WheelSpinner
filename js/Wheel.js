import TimedRotation from './TimedRotation.js';

export default class Wheel{

    rotatingElement;
    select;

    DOMElement;
    DOMBackground;
    wheelListOption = new Array;
    wheelListElement = new Array;

    colours = ["red", "blue", "yellow", "Green", "white", "teal", "AliceBlue", "CornflowerBlue", "Cornsilk", "Gainsboro"];


    constructor(DOMElement, speed, selectElement, DOMBackground){
        this.DOMElement = DOMElement;
        this.rotatingElement = new TimedRotation(DOMElement, speed);
        this.select = selectElement;
        this.DOMBackground = DOMBackground;
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

        this.updateWheelColours();
    }

    updateWheelColours(){
        if(this.wheelListElement.length > 0){
            var gradient = "conic-gradient(";
            var degIncrement = 360/this.wheelListElement.length;
            var deg = 0;
            var degIncremented = deg + degIncrement;
            var turnBackground = 90 - degIncrement/2;

            for(var i = 0; i < this.wheelListElement.length; i++){
                gradient += this.colours[i] + " " + deg + "deg " + degIncremented + "deg ";
                if((i+1) < this.wheelListElement.length){
                    gradient += ",";
                }
                deg += degIncrement;
                degIncremented += degIncrement;
            }
            gradient += ")";
        }
        this.DOMBackground.style.background = gradient;
        if(this.wheelListElement.length > 2){
            this.DOMBackground.style.transform = "rotate(" + turnBackground + "deg)"; 
        }
        console.log(gradient);
    }

}
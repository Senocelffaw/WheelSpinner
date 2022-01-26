export default class Rotator{

    degrees = 0;
    howFast = 1;

    constructor(speed){
        this.howFast = speed;
    }

    rotate(elementToRotate, deg){
        var element = document.getElementById(elementToRotate);
        element.style.transform = 'rotate('+ deg + 'deg)';
        this.changeDegrees();
    }

    changeDegrees(){
        this.degrees += this.howFast;
        if(this.degrees > 360){
            this.degrees = this.degrees - 360;
        }
    }

}

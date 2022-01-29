export default class Rotator{

    degrees = 0;
    speed;
    toRotate;

    constructor(elementToRotate, speed){
        this.speed = speed;
        this.toRotate = elementToRotate;
    }

    rotate(){
        this.toRotate.style.transform = 'rotate('+ this.degrees + 'deg)';
        this.changeDegrees();
    }

    changeDegrees(){
        this.degrees += this.speed;
        if(this.degrees > 360){
            this.degrees = this.degrees - 360;
        }
    }

    setSpeed(newSpeed){
        this.speed = newSpeed;
    }

    
}

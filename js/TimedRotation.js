import Rotator from './rotator.js';

export default class TimedRotation{

    rotator;
    intervalRotate;
    intervalSpeedControl;
    spinning;

    constructor(DOMElement, speed){
        this.rotator = new Rotator(DOMElement, speed);
    }

    rotate(){

        if(!this.spinning){
            this.setRandomSpeed();
            this.intervalRotate = setInterval(()=>{
                this.spinning = true;
                this.rotator.rotate()
                }, 10);
                console.log("spinning...");
            this.intervalSpeedControl = setInterval(()=>{
                this.rotator.setSpeed(this.rotator.speed - 1);
                if(this.rotator.speed <= 0){
                    clearInterval(this.intervalRotate);
                    clearInterval(this.intervalSpeedControl);
                    this.spinning = false;
                    this.rotator.setSpeed(10);
                    console.log("stopped");
                }
            }, 1000);
        }
    }

    setRandomSpeed(){
        var newSpeed = Math.floor(Math.random() * 11) + 10;
        this.rotator.setSpeed(newSpeed);
    }
}
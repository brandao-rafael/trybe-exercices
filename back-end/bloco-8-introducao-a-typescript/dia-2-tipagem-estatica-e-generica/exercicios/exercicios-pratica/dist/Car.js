"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    ;
    honk() {
        console.log('Beep Beep!');
    }
    turnOn() {
        console.log('The car is switched on');
    }
    turnOff() {
        console.log('The car is switched off');
    }
    speedUp() {
        console.log('Speed increase');
    }
    speedDown() {
        console.log('Speed decrease');
    }
    stop() {
        console.log('Car stopped');
    }
    turn(direction) {
        console.log(`The car is turning to ${direction}`);
    }
}
exports.default = Car;

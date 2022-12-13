"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
const gol = new Car_1.default('gol', 'prata', 4);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn("left");
gol.speedUp();
gol.speedDown();
gol.turn("right");
gol.speedUp();
gol.speedDown();
gol.turn("right");
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn("right");
gol.speedUp();
gol.speedDown();
gol.turn("left");
gol.speedUp();
gol.speedDown();
gol.turn("right");
gol.speedDown();
gol.stop();
gol.speedUp();
const calabresa = {
    flavor: 'calabresa',
    slices: 8
};
console.log(calabresa);
const marguerita = {
    flavor: 'marguerita',
    slices: 6
};
console.log(marguerita);
const nutella = {
    flavor: 'nutella',
    slices: 4
};
console.log(nutella);
const calabresa2 = {
    flavor: 'calabresa',
    slices: 6
};
console.log(calabresa2);
const pepperoni = {
    flavor: 'pepperoni',
    slices: 8
};
console.log(pepperoni);
const frango = {
    flavor: 'frango',
    slices: 4
};
console.log(frango);
const cogumelos = {
    flavor: 'cogumelos',
    slices: 6
};
console.log(cogumelos);
const palmito = {
    flavor: 'palmito',
    slices: 6
};
const goiabada = {
    flavor: 'goiabada com queijo',
    slices: 4
};
console.log(goiabada);

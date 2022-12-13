import Car from './Car';
import Pizza from './Pizza';
import PizzaVegetarian from "./PizzaVegetarian";
import PizzaCommon from "./PizzaCommon";
import PizzaSugar from "./PizzaSugar";

const gol = new Car('gol', 'prata', 4);

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

const calabresa: Pizza = {
  flavor: 'calabresa',
  slices: 8
}
console.log(calabresa);

const marguerita: Pizza = {
  flavor: 'marguerita',
  slices: 6
}
console.log(marguerita);

const nutella: Pizza = {
  flavor: 'nutella',
  slices: 4
}
console.log(nutella);

const calabresa2: PizzaCommon = {
  flavor: 'calabresa',
  slices: 6
}
console.log(calabresa2);

const pepperoni: PizzaCommon = {
  flavor: 'pepperoni',
  slices: 8
}
console.log(pepperoni);

const frango: PizzaCommon = {
  flavor: 'frango',
  slices: 4
}
console.log(frango);

const cogumelos: PizzaVegetarian = {
  flavor: 'cogumelos',
  slices: 6
}
console.log(cogumelos);

const palmito: PizzaVegetarian = {
  flavor: 'palmito',
  slices: 6
}

const goiabada: PizzaSugar = {
  flavor: 'goiabada com queijo',
  slices: 4
}
console.log(goiabada);




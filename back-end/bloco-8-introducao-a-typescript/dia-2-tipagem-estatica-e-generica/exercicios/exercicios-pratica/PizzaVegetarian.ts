import Pizza from "./Pizza";
import { Vegetarian } from "./PizzaFlavorTypes";

interface PizzaVegetarian extends Pizza {
  flavor: Vegetarian
}

export default PizzaVegetarian;
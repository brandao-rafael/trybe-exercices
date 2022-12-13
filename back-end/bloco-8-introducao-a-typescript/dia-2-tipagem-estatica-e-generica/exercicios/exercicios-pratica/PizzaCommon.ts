import Pizza from "./Pizza";
import { Common } from "./PizzaFlavorTypes";

interface PizzaCommon extends Pizza {
  flavor: Common
}

export default PizzaCommon;
class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  };

  honk(): void {
    console.log('Beep Beep!');
  }

  turnOn(): void {
    console.log('The car is switched on');
  }

  turnOff(): void {
    console.log('The car is switched off');
  }

  speedUp(): void {
    console.log('Speed increase');
  }

  speedDown(): void {
    console.log('Speed decrease');
  }

  stop(): void {
    console.log('Car stopped');
  }

  turn(direction: string): void {
    console.log(`The car is turning to ${direction}`);
    
  }
}

export default Car;
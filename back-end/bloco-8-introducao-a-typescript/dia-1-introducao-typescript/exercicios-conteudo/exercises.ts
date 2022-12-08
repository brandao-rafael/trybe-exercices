export function getSquareArea(side: number): number {
  return side ** 2;
};
// Arrow example
// export let squareArea = (side: number): number => {
//   return side ** 2;
// }

export function getRectangleArea(base: number, height: number): number {
  return base * height;
};

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
};

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}

export function losangleArea (dia1: number, dia2: number) {
  return (dia1 * dia2) / 2;
};

export function trapezeArea (B: number, b: number, h: number) {
  return ((B + b) * h) / 2;
}

export function circleArea (r: number) {
  return Math.PI * r ** 2;
}
// Square Code
console.group("Squares");
const sideSquare = 5;
console.log("The sides of the square measure: " + sideSquare + "cm");

const squarePerimeter = sideSquare * 4;
console.log("The perimeter of the square is : " + squarePerimeter + "cm");

const squareArea = sideSquare * sideSquare;
console.log("The area of the square is : " + squareArea + "cm2");
console.groupEnd("Squares");

// Triangle Code
console.group("Triangles");
const sideTriangle1 = 6;
const sideTriangle2 = 6;
const baseTriangle = 4;
console.log(
    "The sides of the triangle measure: " 
    + sideTriangle1 + "cm, " 
    + sideTriangle2 + "cm, "
    + baseTriangle + "cm");

console.groupEnd("Triangles")
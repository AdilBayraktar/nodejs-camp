// var rect = {
//   perimeter: (x, y) => 2 * (x + y),
//   area: (x, y) => x * y,
// };
const rect = require("./rectangle");

function solving(a, b) {
  console.log("Solving: a = " + a + " & b = " + b);
  if (a <= 0 || b <= 0) {
    console.log("Values must be greater than Zero");
  } else {
    console.log("Area = " + rect.area(a, b));
    console.log("Perimeter = " + rect.perimeter(a, b));
  }
}

solving(2, 8);
solving(0, 16);

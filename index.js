const rect = require("./rectangle");

function solving(a, b) {
  console.log("Solving: a = " + a + " & b = " + b);
  rect(a, b, (err, rectangle) => {
    if (err) {
      console.log("Error: ", err.message);
    } else {
      console.log("Area = " + rectangle.area());
      console.log("Perimeter = " + rectangle.perimeter());
    }
  });
}

solving(2, 8);
solving(0, 16);

function solveQuadraticEquation() {
  // Prompt the user for coefficients and convert them to floating-point numbers
  var a = parseFloat(prompt('Enter the coefficient a:'));
  var b = parseFloat(prompt('Enter the coefficient b:'));
  var c = parseFloat(prompt('Enter the coefficient c:'));

  // Calculate the discriminant
  var discriminant = b * b - 4 * a * c;

  // Check the discriminant for different cases
  if (discriminant > 0) {
    // If discriminant is positive, calculate real and different roots
    var root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    var root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    alert(`Roots are real and different.\nRoot 1: ${root1}\nRoot 2: ${root2}`);
  } else if (discriminant === 0) {
    // If discriminant is zero, calculate real and equal roots
    var root = -b / (2 * a);
    alert(`Roots are real and equal.\nRoot: ${root}`);
  } else {
    // If discriminant is negative, calculate complex roots
    var realPart = -b / (2 * a);
    var imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
    alert(
      `Roots are complex and different.\nRoot 1: ${realPart} + ${imaginaryPart}i\nRoot 2: ${realPart} - ${imaginaryPart}i`
    );
  }
}

// Function to ask the user whether to solve another quadratic equation
function checkContinue() {
  return confirm('Do you want to solve another quadratic equation?');
}

// Execute the following block while the user wants to solve another quadratic equation
do {
  solveQuadraticEquation();
} while (checkContinue());

// Display a farewell message when the user chooses to exit
alert('Exiting the program. Goodbye!');

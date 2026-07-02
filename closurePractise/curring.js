function createMathModule() {
  const PI = 3.14159;

  function add(a, b) {
    return a + b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function circleArea(radius) {
    return function (multiplier = 1) {
      return PI * Math.pow(radius, 2) * multiplier;
    };
  }

  return {
    add,
    multiply,
    circleArea,
  };
}

const mathModule = createMathModule();

console.log(mathModule.add(2, 3)); // Output: 5
console.log(mathModule.multiply(4, 5)); // Output: 20

const circleAreaCalculator = mathModule.circleArea(5);
console.log(circleAreaCalculator()); // Output: 78.53975 (area)
console.log(circleAreaCalculator(2)); // Output: 157.0795 (circumference with multiplier 2)
// we can also access Pi like
console.log("val of Pie", mathModule.PI);
console.log("val of a", mathModule.a);
// But thsese would show undefined
// so you can only call function from closure
// How mathModule closure object looks like : {,*multiply,*add,*circleArea}

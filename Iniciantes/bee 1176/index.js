var input = require("fs").readFileSync("input", "utf8");
let values = input.split("\n");

const valuesLength = values.splice(0,1);

const value = values.reduce((maior, value) => {
  return (maior = parseInt(value) > maior ? parseInt(value) : maior);
}, 0);

const fibonacciValues = [0, 1];

for (let i = 0; i < value - 1; i++) {
  const sumTwoValues = fibonacciValues[i] + fibonacciValues[i + 1];
  fibonacciValues.push(sumTwoValues);
}

for (let i = 0; i < valuesLength; i++) {
    const index = parseInt(values[i]);
    const fibonacciValue = fibonacciValues[index];

    console.log(`Fib(${index}) = ${fibonacciValue}`);
}

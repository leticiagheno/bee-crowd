var input = require('fs').readFileSync('input', 'utf8');
var numbers = input.split('\n');

// O que eu fiz e não foi aceito:
const sum = numbers.reduce(
    (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue),
    0
);

console.log('X = ', sum);

// O que foi aceito
console.log(`X = ${parseInt(numbers[0]) + parseInt(numbers[1])}`);
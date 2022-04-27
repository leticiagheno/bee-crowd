var input = require('fs').readFileSync('input', 'utf8');
var number = parseFloat(input.split('\n'));

const numberSquared = number * number;
const piNumber = 3.14159;
const mult = numberSquared * piNumber;
const result = mult.toFixed(4);

console.log(`A=${result}`);

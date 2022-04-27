var input = require('fs').readFileSync('input', 'utf8');
var numbers = input.split('\n');

const result = parseInt(numbers.shift()) * parseInt(numbers.shift());

console.log('PROD =', result);
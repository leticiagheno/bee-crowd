var input = require('fs').readFileSync('input', 'utf8');
var numbers = input.split('\n');

console.log(`SOMA = ${parseInt(numbers.shift()) + parseInt(numbers.shift())}`);
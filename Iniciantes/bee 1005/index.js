var input = require('fs').readFileSync('input', 'utf8');
var numbers = input.split('\n');

const gradeA = parseFloat(numbers.shift()) * 3.5;
const gradeB = parseFloat(numbers.shift()) * 7.5;
const result = (gradeA + gradeB) / 11;

console.log('MEDIA =', result.toFixed(5));
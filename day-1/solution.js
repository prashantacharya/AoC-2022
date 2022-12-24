const { readFileSync } = require('fs');

const data = readFileSync('./input.txt', 'utf-8').trim();

const inputCalories = data
  .split('\n\n')
  .map((d) => d.split('\n').map((v) => parseInt(v)));

const sum = inputCalories.map((cals) => cals.reduce((a, b) => a + b, 0));

const max = Math.max(...sum);

console.log(max);

const sortedSum = sum.sort((a, b) => b - a);

console.log(sortedSum[0] + sortedSum[1] + sortedSum[2]);

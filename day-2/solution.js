const { readFileSync } = require('fs');

const data = readFileSync(`./${process.argv[2]}.txt`, 'utf8').trim();

const scoreMapA = {
  'A X': 4,
  'B X': 1,
  'C X': 7,
  'A Y': 8,
  'B Y': 5,
  'C Y': 2,
  'A Z': 3,
  'B Z': 9,
  'C Z': 6,
};

let res = 0;
data.split('\n').forEach((l) => {
  res += scoreMapA[l];
});

console.log(res);

const scoreMapB = {
  'A X': 3,
  'B X': 1,
  'C X': 2,
  'A Y': 4,
  'B Y': 5,
  'C Y': 6,
  'A Z': 8,
  'B Z': 9,
  'C Z': 7,
};

res = 0;
data.split('\n').forEach((l) => {
  res += scoreMapB[l];
});

console.log(res);

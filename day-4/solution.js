const { readFileSync } = require('fs');

const data = readFileSync(`./${process.argv[2]}.txt`, 'utf8').trim();

const assignments = data.split('\n').map((line) => line.split(','));

let res = 0;

assignments.forEach(([v1, v2]) => {
  const [a, b] = v1.split('-').map((num) => +num);
  const [c, d] = v2.split('-').map((num) => +num);

  if ((a >= c && b <= d) || (c >= a && d <= b)) {
    res += 1;
  }
});

console.log(res);

// PART 2
//

const isInBetween = (a, b, c) => {
  if (c >= a && c <= b) return true;

  return false;
};

res = 0;
assignments.forEach(([v1, v2]) => {
  const [a, b] = v1.split('-').map((num) => +num);
  const [c, d] = v2.split('-').map((num) => +num);

  if (
    isInBetween(a, b, c) ||
    isInBetween(a, b, d) ||
    isInBetween(c, d, a) ||
    isInBetween(c, d, b)
  ) {
    res += 1;
  }
});

console.log(res);

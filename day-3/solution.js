const fs = require('fs');

const data = fs.readFileSync('./input.txt', 'utf8').trim();

const arr = data.split('\n');

let score = 0;

for (let i = 0; i < arr.length; i++) {
  const s = arr[i];
  if (!s) break;

  const compartmentA = s.slice(0, s.length / 2);
  const compartmentB = s.slice(s.length / 2, s.length);

  let common;

  for (c of compartmentA) {
    if (compartmentB.includes(c)) {
      common = c;
      break;
    }
  }

  if (common.charCodeAt() >= 97) {
    score = score + common.charCodeAt() - 96;
  } else {
    score = score + common.charCodeAt() - 38;
  }
}

console.log('PART 1:', score);

score = 0;

for (let i = 0; i < arr.length; i += 3) {
  const a = arr[i + 0];
  const b = arr[i + 1];
  const c = arr[i + 2];

  let common;

  console.log(a, b, c);

  for (ch of a) {
    if (b.includes(ch) && c.includes(ch)) {
      common = ch;
      break;
    }
  }

  console.log(common);

  if (common.charCodeAt() >= 97) {
    score = score + common.charCodeAt() - 96;
  } else {
    score = score + common.charCodeAt() - 38;
  }
}

console.log('Part 2: ', score);

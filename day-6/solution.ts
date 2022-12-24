import { readFileSync } from 'fs';

const fileName = process.argv[2];
const input = readFileSync(`${fileName}.txt`, 'utf8').trim();

// Part 1
let pointer = 0;
for (pointer; pointer < input.length - 3; pointer++) {
  const substring = input.substring(pointer, pointer + 4);

  const sets = [...new Set(substring.split(''))];

  if (sets.length === 4) {
    break;
  }
}

console.log('Part I:', pointer + 4);

// Part 2

for (pointer; pointer < input.length - 13; pointer++) {
  const substring = input.substring(pointer, pointer + 14);

  const sets = [...new Set(substring.split(''))];

  if (sets.length === 14) {
    break;
  }
}

console.log('Part II:', pointer + 14);

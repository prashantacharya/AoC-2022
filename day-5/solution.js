const { readFileSync } = require('fs');

const data = readFileSync(`./${process.argv[2]}.txt`, 'utf8');

const [stack, moves] = data.split('\n\n');

const stackLabelLine = stack.split('\n').at(-1);

const stackLabels = {};

stackLabelLine
  .trim()
  .split('  ')
  .forEach((v) => {
    stackLabels[v.trim()] = {};
  });

Object.keys(stackLabels).forEach((value) => {
  const stackLines = stack.split('\n');
  const indexOfCurrentLabel = stackLabelLine.indexOf(value);
  const items = [];

  for (let i = 0; i < stackLines.length - 1; i++) {
    if (stackLines[i][indexOfCurrentLabel] !== ' ') {
      items.push(stackLines[i][indexOfCurrentLabel]);
    }
  }

  stackLabels[value] = items;
});

function parseMove(line) {
  const splits = line.split(' ');

  return {
    items: +splits[1],
    from: splits[3],
    to: splits[5],
  };
}

moves
  .trim()
  .split('\n')
  .forEach((line) => {
    const { items, from, to } = parseMove(line);

    //stackLabels[from] =
    //

    const itemsRemoved = stackLabels[from].slice(0, items);
    const itemsRemaining = stackLabels[from].slice(items);

    // do ...itemsRemoved only for part 2
    stackLabels[to] = [...itemsRemoved.reverse(), ...stackLabels[to]];
    stackLabels[from] = itemsRemaining;
  });

let output = '';
Object.values(stackLabels).forEach((stack) => {
  if (stack[0]) {
    output += stack[0];
  }
});

console.log(output);

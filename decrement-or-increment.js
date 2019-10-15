const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', n => {
  n = Number(n);
  n % 4 === 0 ? console.log(n += 1) : console.log(n -= 1);
  rl.close();
});
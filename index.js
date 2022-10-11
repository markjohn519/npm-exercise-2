const process = require('process');
const args = process.argv.slice(2);
const args2 = args.join(' ');

let count = 0;

for (let letter of args2) {
  if ('aeiou'.includes(letter)) {
    count++;
  }
}

console.log(`Number of Arguments: ${args.length}
Number of Vowels: ${count}`);

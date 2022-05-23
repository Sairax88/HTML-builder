const fs = require('node:fs');
const path = require('node:path');
const readline = require('node:readline');
const {stdin: input, stdout: output} = require('process');

const read = readline.createInterface({input, output});
const file = path.join(__dirname, 'book.txt');
const write = fs.createWriteStream(file);

read.write('Как Ваше имя?\n');

const exitTask = function() {
  output.write('Приятно познакомиться!');
  read.close();
};

read.on('SIGINT', exitTask);
read.on('line', (text) => {
  if (text.toString().trim() === 'exit') {
    exitTask();
  } else {
    write.write(text + '\n');
  }
});
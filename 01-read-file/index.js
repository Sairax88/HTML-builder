const fs = require('fs');
const path = require('path');

const gettext = (filename) => {
  let readFile = new fs.ReadStream(
    filename, { encoding: 'utf-8' }
  );
  readFile.on('readable', function(){
    const data = readFile.read();
    if (data !== null) {
      console.log(data);
    }
  });
};

const file = path.join(__dirname, 'text.txt');
gettext(file);



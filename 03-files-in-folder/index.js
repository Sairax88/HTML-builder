const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'secret-folder');

fs.readdir(file, {
  withFileTypes: true
}, function(err, data) {
  data.forEach(el => {
    if(el.isFile()){
      fs.stat(path.join(file, el.name), (err, stats) => {
        const name =  path.parse(el.name).name;
        const type = path.extname(el.name);
        const size =  stats.size;
        console.log(`${name} \t- ${type.substring(1)} -\t ${size}b`);
      });
    }
  });
});
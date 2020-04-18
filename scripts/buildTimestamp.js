const fs = require('fs');
const build = {
  buildTime: Date.now()
};
fs.writeFileSync(__dirname + '/../public/build.json', JSON.stringify(build));

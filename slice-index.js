const fs = require('fs');

const dmsNewIndex = fs.readFileSync('g:/DMS WEB NEW/index.html', 'utf8');
const comments = dmsNewIndex.match(/<!--[\s\S]*?-->/g);
console.log('Comments found:', comments ? comments.slice(0, 15) : []);

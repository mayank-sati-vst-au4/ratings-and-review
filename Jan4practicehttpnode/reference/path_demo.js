const path = require('path');


console.log(path.basename);

// base filename
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
//                          ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));

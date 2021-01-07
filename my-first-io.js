file = fs.readFileSync(test.txt);
file = fs.readFileSync("C:/Users/MeD/chekpointnodejs/test.txt");

var fs = require('fs');

var filename = process.argv[2];

file = fs.readFileSync(filename);

contents = file.toString();

console.log(contents.split('\n').length - 1);
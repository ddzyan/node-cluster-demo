var exuteFibo = require('./master');
console.log('=====Start========');
var st = Date.now();
exuteFibo().then(function (result) {
  console.log(`Finish all work and using ${Date.now() - st}`);
  console.log('####Get result from multiple-processes: ' + result);
});
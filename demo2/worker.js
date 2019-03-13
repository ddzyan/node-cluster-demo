var cluster = require('cluster');

function fibo(n) {
  return n == 0 ? 0 : n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}
console.log(`[worker ${cluster.worker.id}] start ...`);
process.on('message', function (msg) {
  var st = Date.now();
  console.log(`[worker ${cluster.worker.id}] start to work`);
  var result = fibo(msg);
  console.log(`[worker ${cluster.worker.id}] work finish work and using ${Date.now() - st} ms`);
  process.send(result);
});
console.log('####====START====###');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

function fibo(n) {
  return n == 0 ? 0 : n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}

if (cluster.isMaster) {
  var collection = [44, 42, 42, 43];
  var st = Date.now();
  for (var i = 0; i < Math.min(numCPUs, collection.length); i++) {
    var wk = cluster.fork();
    wk.send(collection[i]);
  }
  cluster.on('fork', function (worker) {
    console.log(`[master] : fork worker ${worker.id}`);
  });
  cluster.on('exit', function (worker, code, signal) {
    console.log(`[master] : worker ${worker.id} died`);
  });
  var numOfCompelete = 0
  Object.keys(cluster.workers).forEach(function (id) {
    cluster.workers[id].on('message', function (msg) {
      console.log(`[master] receive message from [worker ${id}]: ${msg}`);
      numOfCompelete++;
      if (numOfCompelete === collection.length) {
        console.log(`[master] finish all work and using ${Date.now() -
 st} ms`);
        cluster.disconnect();
      }
    });
  });

} else {
  process.on('message', function (msg) {
    var st = Date.now();
    var result = fibo(msg);
    console.log(`[worker ${cluster.worker.id}] finish work and using
 ${Date.now() - st} ms`);
    process.send(result);
  });
}
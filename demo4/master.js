const numCPUs = require('os').cpus().length;

module.exports = exuteFibo;

function exuteFibo() {
  return (new Promise(
    function (reslove, reject) {
      const cluster = require('cluster');
      const result = [];
      cluster.setupMaster({
        exec: 'worker.js',
        slient: true
      });

      const collection = [44, 42, 42, 43];
      const st = Date.now();
      for (const i = 0; i < Math.min(numCPUs, collection.length); i++) {
        const wk = cluster.fork();
        wk.send(collection[i]);
      }
      cluster.on('fork', function (worker) {
        console.log(`[master ${process.pid}] : fork worker ${worker.id}`);
      });
      cluster.on('exit', function (worker, code, signal) {
        console.log(`[master] : worker ${worker.id} died`);
      });
      var numOfCompelete = 0
      Object.keys(cluster.workers).forEach(function (id) {
        cluster.workers[id].on('message', function (msg) {
          console.log(`[master] receive message from [worker${id}]:
        ${msg}`);
          result.push(msg);
          numOfCompelete++;
          if (numOfCompelete === collection.length) {
            console.log(`[master] finish all work and using
        ${Date.now() - st} ms`);
            // 此处使用 disconnect() 来关闭，会导致 2 个 master 进程fork出来的子进程全部被关闭
            cluster.disconnect();
            reslove(result);
          }
        });
      })
    }))
};
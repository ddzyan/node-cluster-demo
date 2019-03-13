# 简介
异步执行 2 个 主进程任务，使之同时能处理更多 CPU密集 任务

# 问题
从以下日志可以看出，Node.js 内核并没有因为并发调用 cluster 模块而创建多个 master 进程，相反的，它复用了已存在的 master 进程，类似于 singleton 模式。

## 输出日志
```bash
PS C:\node-cluster-demo\demo4> node .\main.js
=====Start========
[master 22140] : fork worker 1
[master 22140] : fork worker 1
[master 22140] : fork worker 2
[master 22140] : fork worker 2
[master 22140] : fork worker 3
[master 22140] : fork worker 3
[master 22140] : fork worker 4
[master 22140] : fork worker 4
[master 22140] : fork worker 5
[master 22140] : fork worker 5
[master 22140] : fork worker 6
[master 22140] : fork worker 6
[master 22140] : fork worker 7
[master 22140] : fork worker 7
[master 22140] : fork worker 8
[master 22140] : fork worker 8
[worker 1] start ...
[worker 2] start ...
[worker 1] start to work
[worker 3] start ...
[worker 2] start to work
[worker 3] start to work
[worker 4] start ...
[worker 4] start to work
[worker 5] start ...
[worker 5] start to work
[worker 6] start ...
[worker 7] start ...
[worker 6] start to work
[worker 7] start to work
[worker 8] start ...
[worker 8] start to work
[worker 6] work finish work and using 7784 ms
[master] receive message from [worker6]:
        267914296
[worker 2] work finish work and using 7929 ms
[master] receive message from [worker2]:
        267914296
[master] receive message from [worker2]:
        267914296
[worker 7] work finish work and using 8337 ms
[master] receive message from [worker7]:
        267914296
[worker 3] work finish work and using 8410 ms
[master] receive message from [worker3]:
        267914296
[master] receive message from [worker3]:
        267914296
[master] finish all work and using
        8600 ms
Finish all work and using 8601
####Get result1 from mutliple-processes: 267914296,267914296,267914296,267914296
[master] : worker 2 died
[master] : worker 2 died
[master] : worker 3 died
[master] : worker 3 died
[master] : worker 6 died
[master] : worker 6 died
[master] : worker 7 died
[master] : worker 7 died
[worker 4] work finish work and using 11386 ms
[master] receive message from [worker4]:
        433494437
[master] receive message from [worker4]:
        433494437
[master] : worker 4 died
[master] : worker 4 died
[worker 8] work finish work and using 11401 ms
[master] receive message from [worker8]:
        433494437
[master] : worker 8 died
[master] : worker 8 died
[worker 1] work finish work and using 14744 ms
[master] receive message from [worker1]:
        701408733
[master] finish all work and using
        14971 ms
[master] receive message from [worker1]:
        701408733
Finish all work and using 14930
####Get result from multiple-processes: 267914296,267914296,433494437,701408733
[master] : worker 1 died
[master] : worker 1 died
[worker 5] work finish work and using 14770 ms
[master] receive message from [worker5]:
        701408733
[master] : worker 5 died
[master] : worker 5 died
```
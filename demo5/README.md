## 日志
```bash
PS C:\ddz\work\my_github\node-cluster-demo\demo5> node .\main.js
=====Start========
[master 16956] : fork worker
          1
[master 16956] : fork worker
          2
[master 16956] : fork worker
          3
[master 16956] : fork worker
          4
[master 16956] : fork worker
          5
[master 16956] : fork worker
          6
[master 16956] : fork worker
          7
[master 16956] : fork worker
          8
[worker 1] start ...
[worker 3] start ...
[worker 2] start ...
[worker 3] start to work
[worker 1] start to work
[worker 2] start to work
[worker 5] start ...
[worker 4] start ...
[worker 5] start to work
[worker 4] start to work
[worker 7] start ...
[worker 7] start to work
[worker 8] start ...
[worker 8] start to work
[worker 6] start ...
[worker 6] start to work
[worker 3] work finish work and using 7979 ms
[master] receive message from [worker3]:
        267914296
[master] receive message from [worker3]:
        267914296
[worker 6] work finish work and using 7977 ms
[master] receive message from [worker6]:
        267914296
[worker 7] work finish work and using 8071 ms
[master] receive message from [worker7]:
        267914296
[worker 2] work finish work and using 8389 ms
[master] receive message from [worker2]:
        267914296
[master] receive message from [worker2]:
        267914296
[master] finish all work and using
        8572 ms
Finish all work and using 8573
####Get result1 from mutliple-processes: 267914296,267914296,267914296,267914296
[master] : worker 7 died
[master] : worker 7 died
[master] : worker 6 died
[master] : worker 6 died
[worker 4] work finish work and using 10974 ms
[master] receive message from [worker4]:
        433494437
[master] receive message from [worker4]:
        433494437
[worker 8] work finish work and using 10989 ms
[master] receive message from [worker8]:
        433494437
[master] : worker 8 died
[master] : worker 8 died
[worker 5] work finish work and using 14566 ms
[master] receive message from [worker5]:
        701408733
[master] : worker 5 died
[master] : worker 5 died
[worker 1] work finish work and using 14662 ms
[master] receive message from [worker1]:
        701408733
[master] finish all work and using
        14889 ms
[master] receive message from [worker1]:
        701408733
Finish all work and using 14844
####Get result from multiple-processes: 267914296,267914296,433494437,701408733
[master] : worker 4 died
[master] : worker 4 died
[master] : worker 3 died
[master] : worker 3 died
[master] : worker 2 died
[master] : worker 2 died
[master] : worker 1 died
[master] : worker 1 died
```
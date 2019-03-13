# 简介 
参考文章：https://www.ibm.com/developerworks/cn/opensource/os-cn-nodejs-practice/index.html

本项目主要内容为：使用 node - cluster 的 多线程处理方案， 解决 CPU 密集型问题。

解决流程逐步递进：从 同步 ---> 异步 ---> 多线程 ---> 主副进程分离 ---> 生产环境配置 ---> 多进程 + 并发

在项目中使用 斐波那契数列函数 来模拟 CPU 密集型任务，其次使用 setTimeout() 方法使得 Fibo 函数不立即执行，而且交由 Node.js 系统来调度。

# 结构
- demo0: 使用 异步 
- demo1: 多线程服务
- demo2: 主副进程分离
- demo3：生产环境配置，提供主进程入口
- demo4: 使用多进程 + 并发，实现2个进程任务
- demo5: 优化 demo4 代码
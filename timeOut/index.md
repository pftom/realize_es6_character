### 关于几大函数的执行顺序

`setTimeout` , `setImmediate` , `setInterval` , `Promise` , `nextTick` , 同步代码

- 同步代码在本轮事件循环中执行
- Promise 在本轮事件循环结束时执行
- setTimeout 在下一轮 ”事件循环“ 开始时执行



为了协调异步任务，Node 提供了四个定时器，让任务可以在指定时间运行：

- setTimeout()
- setInterval()
- setImmediate()
- process.nextTick()



参考链接：[阮一峰](http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html)



## 同步任务

同步任务总是比异步任务更早执行。



## 本轮循环和次轮循环

一步仍无
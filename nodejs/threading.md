
Basically, when you run livuv code, it runs in c++ threading (by default, thread pool contain 4 trheads, but it can be changed)

A quick note : The number of threads inside the thread pool is not bounded to 4 only. It can be altered according to your needs. For this, you have to set the process.env.UV_THREADPOOL_SIZE to any numberic value you want. But caution here is that more thread will ensure more concurrent execution and not quick delivery. As in the last case we saw how execution time doubled when running 5 instances with 4 threads. It again boils down to you cpu’s multi threading algorithms and its native power to complete a certain number of instructions provided to them. You may have to be a bit logical while trying to set the thread pool size inside your node script.

NodeJS is not completely single threaded runtim, it has certain functions and components that when interacting with C++ are multi threading.

SOURCE: https://medium.com/weekly-webtips/multi-threading-in-nodejs-2605bcedc662


## 说明
用webpack编译nodejs 服务应用的时，开启`watch`会占用该进程。打包之后，还需要另外起一个node 进程来执行 编译之后的js 文件。这样就造成了很多不必要的麻烦。
该插件暴露出来wbpack生命周期中 `after-emite` 生命周期钩子。在该钩子函数中执行一些需要执行的操作
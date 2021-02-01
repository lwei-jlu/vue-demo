## 管理后台

### 开发
```js
npm start           //local环境(通过proxy反向代理)
npm run dev         //local环境(通过proxy反向代理)
npm run start:dev   //dev环境(真实dev环境api路径)
npm run start:test  //test环境
npm run start:prod  //prod环境
```

### 打包
>每次打包切换不同环境时记得修改x-haier-流水线配置-对应环境的执行命令

```js
npm run build       //prod环境
npm run build:dev   //dev环境
npm run build:test  //test环境
npm run build:prod  //prod环境
```

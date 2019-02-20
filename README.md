# 使用 create react app 创建 react 项目[https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development]

## Available Scripts

### `npm start`

### `npm test`

### `npm run build`

### `npm run eject`

## Learn More

### 使用 create react app 创建 react 项目

#### 1.使用 redux 状态制管理工具
    - [如何优雅地在React项目中使用Redux](https://www.jianshu.com/p/7a867be0594a)

#### 2.使用 react-router-dom 路由系统

```javascript

    import React from 'react';
import { Route, BrowserRouter, Redirect, HashRouter } from 'react-router-dom';

import App from '../pages/App';
import Home from '../pages/Home';
import Test from '../pages/Test';

// const Root = () => (
//         <BrowserRouter basename="/zsy_manage">         // basename的含义是你在服务器中的二级目录等等
//             <div>
//                 <Route path="/" exact component={App}/>
//                 <Route path="/home" component={Home} />
//                 <Route path="/test" component={Test} />
//                 <Route path="/hello" render={() => <Redirect to="/" />} />
//             </div>
//        </BrowserRouter>
//  );

const Root = () => (
    <HashRouter>
        <div>
            <Route path="/" exact component={App}/>
            <Route path="/home" component={Home} />
            <Route path="/test" component={Test} />
            <Route path="/hello" render={() => <Redirect to="/" />} />
        </div>
   </HashRouter>
);


 export default Root;

```

#### 3.使用axios做数据请求

``` javascript

    import axios from 'axios'
// import qs from 'qs'
import router from '../router/index'

// axios 配置
//axios.defaults.timeout = 10000;
axios.defaults.headers.post['data-Type'] = 'json';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
//axios.defaults.baseURL = 'http://localhost:8080';

//POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    //config.data = qs.stringify(config.data);
    config.data = config.data;
  }
  config.headers.astk = localStorage.token;
  return config;
}, (error) => {
  //_.toast("错误的传参", 'fail');
  return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) => {
  if (res.status != 200) {
    return Promise.reject(res);
  } 
//  本地后台自己做的一些状态码判断
//   else if (res.data.code != 200) {
//     let info = '系统异常3';
//     switch (res.data.code) {
//       case 201:
//         info = '参数格式错误';
//         break;
//       case 202:
//         router.push('/login');
//         info = '登录失效';
//         break;
//       case 203:
//         info = '无数据';
//         break;
//       case 204:
//         info = '不支持请求';
//         break;
//       case 403:
//         info = '登陆超时';
//         break;
//       case 500:
//         info = '程序异常';
//         break;
//     }
//     if (res.data.msg) {
//       info = res.data.msg;
//     }
//     alert(info);
//     return Promise.reject(res);
//   }
  return res;
}, (error) => {
  return Promise.reject(error);
});

export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetch_get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      }).then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
    inMovieList(params) {
        return fetch('/zsy_manage/v2/movie/in_theaters', params)
    }
}    // 把接口从文件里导出： 在页面上引入  import api from '../../api/api.js'


```

#### 4.配置本地代理工具

    - [配置本地代理工具](https://www.jianshu.com/p/5485c9750f10)

#### 5.服务器部署 

 - 非根目录部署，在package.json文件里加上 "homepage": "."
    

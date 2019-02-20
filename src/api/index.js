import axios from 'axios'
// import qs from 'qs'

// axios 配置
//axios.defaults.timeout = 10000;
axios.defaults.headers.post['data-Type'] = 'json';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

//POST传参序列化
// axios.interceptors.request.use((config) => {
//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data);
//   }
// //config.headers.astk = localStorage.token;
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

//返回状态判断
axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
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

// 把接口从文件里导出： 在页面上引入  import api from '../../api/index.js'
export default {
    bookCategoryList(params) {
        return fetch_get('/api/cats/lv2/statistics', params)
    },
    movieList(params) {
        return fetch('/dbapi/v2/movie/in_theaters', params)
    }
}    
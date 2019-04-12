import axios from 'axios'

axios.defaults.baseURL = 'http://192.168.50.144:8888/monitor-pc-api';
axios.defaults.timeout = 10000;


axios.interceptors.request.use(config => {
  // 一般在这个位置判断token是否存在
  console.log("111111111111111111111111111111111")
  console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


axios.interceptors.response.use(response => {

  if (response.status === 200) {
    console.log("222222222222222222222222222222")
    return Promise.resolve(response);
  } else {
    console.log("3333333333333333333333333333333333")
    return Promise.reject(response);
  }
}, function (error) {
  // 处理响应失败
  return Promise.reject(error);
});


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  });
}


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getNoParams(url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postInParams(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postInObject(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

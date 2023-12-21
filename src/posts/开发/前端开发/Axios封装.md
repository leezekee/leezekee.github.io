---
date: 2023-10-25
category:
 - 开发
 - 前端
tag:
 - Vue.js
 - 前端
 - Javascript
 - Axios
title: Axios封装与API的统一管理
description: 在写了一些屎山之后发现统一的api管理真的很重要
---

在写了一些屎山之后发现统一的api管理真的很重要

<!-- more -->

通常在开发过程中，尤其是在现在当下的前后端分离项目中，我们总要发起不少的请求，同一个接口可能还会在不同地方反复请求。如果你一个人承包了前后端的话，这样子可能看上去没什么问题

**但是**

当有一天，后端的哥们屁颠屁颠的跑过来告诉你：“嘿哥们，我们重构了项目，有些接口你可能要变一下”，这时候就体现出来封装axios和统一管理api的重要性了

## 封装axios

首先说一下我们的目录结构

```
|- src
    |- api
        |- request.js
        |- index.js
        |- api封装文件...
    |- assets
    |- component
    |- ... 
```

> 需要要用你喜欢的包管理工具安装axios

### 初步封装

```javascript
import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    headers: {
        // 'token': localStorage.getItem('token') || '' // 如果要加token验证的话可以带上
    },
});
```

然后我们再配置一下请求拦截器和响应拦截器

### 请求拦截器

```javascript
request.interceptors.request.use(
    config => {
        // 发起请求时，重新获取最新的token，这一步有时很重要，因为创建 axios 实例的时候，获取到的 token 未必是有效的，或说未必能获取到
        const token = localStorage.getItem('token')
        config.headers['token'] = token || ''
        return config
    },
    error => {
        console.warn(error)
        return Promise.reject(error)
    }
)
```

### 响应拦截器

```javascript
request.interceptors.response.use(
    (response) => {
        let responseCode = response.data.code;
        if (responseCode && responseCode != "200") {
            // 处理状态码不为200时操作
            return response
        }
        // 或者可以用switch来匹配状态码进行处理
        return response
    },
    (error) => {
        if (error.code === 'ECONNABORTED' || error.message === "Network Error" || error.message.includes("timeout")) {
            // 处理网络错误操作
        }
        return Promise.resolve(error.response)
    }
)
```

至此我们完成了axios的初步封装，接下来我们封装五个常用方法

### POST方法

```javascript
function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: 'post',
            data: params,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
```

### GET方法

```javascript
function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: 'get',
            params,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
```

### DEL方法

```javascript
function del(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: 'delete',
            params,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
```

### PUT方法

```javascript
function put(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: 'put',
            data: params,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
```

### POST上传文件

```javascript
function postMultipart(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: 'post',
            data: params,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data; boundary=' + new Date().getTime()
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
```

到此为止我们已经封装好了axios，给出一份完整代码吧

```javascript
// request.js
const request = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
    headers: {
        // 'token': localStorage.getItem('token') || '' // 如果要加token验证的话可以带上
    },
})

request.interceptors.request.use(
    config => {
        // 发起请求时，重新获取最新的token，这一步有时很重要，因为创建 axios 实例的时候，获取到的 token 未必是有效的，或说未必能获取到
        const token = localStorage.getItem('token')
        config.headers['token'] = token || ''
        return config
    },
    error => {
        console.warn(error)
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
        let responseCode = response.data.code;
        if (responseCode && responseCode != "200") {
            // 处理状态码不为200时操作
            return response
        }
        // 或者可以用switch来匹配状态码进行处理
        return response
    },
    (error) => {
        if (error.code === 'ECONNABORTED' || error.message === "Network Error" || error.message.includes("timeout")) {
            // 处理网络错误操作
        }
        return Promise.resolve(error.response)
    }
)

function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: 'post',
            data: params,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: 'get',
            params,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

function del(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: 'delete',
            params,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

function put(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: 'put',
            data: params,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

function postMultipart(url, params = {}) {
    return new Promise((resolve, reject) => {
        http({
            url,
            method: 'post',
            data: params,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data; boundary=' + new Date().getTime()
            }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export {
    request,
    post,
    get,
    del,
    put,
    postMultipart
}
```

## 管理api

接下来我们就要开始对api进行管理

### api分组

比如我们目前有要对用户进行操作的api，我们就可以在api目录下新建一个userApi.js，如下

```javascript
// userApi.js
import {
    http,
    get,
    post,
    del,
    put
} from './request';

let userApi = {
    login: (params) => post('/auth/login', params),
    register: (params) => post('/auth/register', params),
    logout: () => get('/auth/logout'),
    getUserInfo: () => get('/auth/info'),
    updateUserInfo: (params) => put('/auth/info', params),
};

export default userApi;
```

再比如还有针对预约的增删改查的api

```javascript
// appointmentApi.js
import {
    http,
    get,
    post,
    del,
    put
} from './request';

let appointmentApi = {
    getAppointmentList: (params) => get('/appointment/list', params),
    getAppointment: (params) => get('/appointment', params),
    getTodoAppointmentSum: (params) => get('/appointment/todo', params),
    getTodoAppointmentSum: (params) => get('/appointment/todo/sum', params),
    createAppointment: (params) => post('/appointment', params),
    updateAppointment: (params) => put('/appointment', params),
    deleteAppointment: (params) => del('/appointment', params),
};

export default appointmentApi;
```

### api整合

然后我们在index.js中集中管理所有api即可

```javascript
// index.js
import userApi from "./userApi";
import appointmentApi from "./appointmentApi";

const api = {
    auth: userApi,
    appointment: appointmentApi
};

export default api;
```

至此，axios封装与api管理完成

## 使用

在使用时，直接引入api即可使用，如

```javascript
import api from '@/api'

let params = {
    username: 'username',
    // 密码要加密传输，加密方式随意，这里更推荐非对称加密
    password: encrypt('password')
}

api.auth.login(params).then(res => {
    // 处理登录成功业务
}).catch(error => {
    // 理论上来说无法到达这一步
    // 因为错误已经在响应拦截器中被处理了
    // 当然不排除特殊情况，至于特殊情况是什么，我具体不是很清楚
}).finally(() => {
    // 处理请求完成业务
})
```

本文参考：[经验|axios封装与api管理：简洁实用](https://juejin.cn/post/7089214265084772388)
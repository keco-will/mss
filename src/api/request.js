import axios from 'axios'

export function request(config){
    return  new Promise((resolve, reject)=>{   //返回一个promise对象，自带成功时候调用的钩子和失败时候调用的钩子
        const instance = axios.create({
            baseURL:'',
            timeout:5000    //对于实例的基本设置
        })
        instance(config).then((res)=>{  //传入两个函数钩子
            resolve(res)                //回调函数的方式返回获得的data
        }).catch((err)=>{
            reject(err)
        })

        instance.interceptors.request(res=>{//请求成功的时候做一定的处理
            // eslint-disable-next-line no-console
            console.log(res)  
            return res.data //返回请求的对象
        },err=>{
            console(err)
        })

        instance.interceptors.response(res=>{  //成功响应的时候，对响应体做一定的处理
            // eslint-disable-next-line no-console
            console.log(res)
            return res.data
        },err=>{
            console(err)
        })
    })
}

//export function request(config){  //推荐
//     const instance = axios.create({
//         baseURL:'',
//         timeout:5000    //对于实例的基本设置
//     })
//     return instance(config)
// }

// export function request(config,success,error){  
//     const instance = axios.create({
//         baseURL:'',
//         timeout:5000    //对于实例的基本设置
//     })

//     instance(config).then((res)=>{  //传入两个函数钩子
//         success(res)                //回调函数的方式返回获得的data
//     }).catch((err)=>{
//         error(err)
//     })
// }
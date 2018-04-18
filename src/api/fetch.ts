import axios from 'axios'
import {VueRouter} from "vue-router/types/router";
import {Message} from 'element-ui'

declare module "vue/types/vue" {
  interface Vue {
    $get: any
    $post: any
  }
}

export default class fetch {
  constructor(router: VueRouter) {

    axios.defaults.timeout = 5000

    axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'apiDomain/' : ''

    axios.interceptors.response.use(
      res => {
        if (res.data && !res.data.success) {
          // fail
          Message({
            message: res.data.msg,
            center: true,
            type: 'warning'
          })
          return Promise.reject(res.data.code)
        }
        return res.data
      },
      error => {
        // 连接失败
        return Promise.reject(error)
      })
  }

  $get(url: string, params?: object): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.get(url, {params: params})
        .then(function (response) {
          resolve(response.data);
        }).catch(err => {
      })
    })
  }

  $post(url: string, params?: object): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(function (response) {
          resolve(response.data)
        }).catch(err => {
      })
    })
  }

  bind(Vue): void {

    Vue.prototype.$get = this.$get;
    Vue.prototype.$post = this.$post;
  }

}

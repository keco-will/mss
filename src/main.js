import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'

Vue.use(VueCookies)
Vue.use(Vuex)
// require styles
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import qs from 'qs'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.prototype.qs=qs;
axios.defaults.baseURL = 'https://imlehr.com/mss';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios=axios

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.use(ElementUI);
//vuex store 一般放在单独的文件夹store下面的index处
const store = new Vuex.Store({
    state: {
      count: 0,
      makechoise:-1,
      token:0,
      todos: [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false }
      ],
      userId:''
    },
    //mutations同步任务
    mutations: {  //调用一次，改变一次state中的值
      //接受state作为第一个参数
      increment (state) {
        state.count++
      },
      increment2 (state,n){
        state.count+=n
      }
    },  
    //actions可以是异步任务 （在函数中可以写settimeout）
    actions:{
      increment (context) {
        context.commit('increment')
      }
    },

    getters:{   //getters里面的函数接受一个参数 state
      //一定有返回值
      doneTodos: (state) =>{
        return state.todos.filter(todo => todo.done)
      }
    }
  })
  store.commit('increment') //要唤醒一个 mutation handler的方法
  store.commit('increment2',10)  //对应调取

  new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')



  

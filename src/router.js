import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('./views/Home.vue')
const UpFiles = () => import('./views/UpFiles.vue')
const Ku = () => import('./views/Ku.vue')
const Login = () => import('./views/Login.vue')
const Singlener = () => import('./views/Single.vue')
const Clouds = () => import('./views/CloudStudent.vue')
const Situation = () => import('./views/Situation.vue')
const Myerrorr = () => import('./components/myerror.vue')
const Rightness = () => import('./components/myRightness.vue')
const Couple = () => import('./views/Couple.vue')
const form = () => import('./views/form.vue')
const tuijian = () => import('./views/tuijian.vue')
Vue.use(VueRouter)

const routes = [
    {
        path: '/home/:userId',
        name: 'home',
        component: Home
    },
    {
        path: '/files/:userId',
        name: 'files',
        component: UpFiles
    },
    {
        path: '/ku/:userId',
        name: 'tiku',
        component: Ku
    },
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/single/:userId',
        name: 'single',
        component: Singlener,
        meta: {
            keepAlive: true,
            title: 'single'
          }
    },
    {
        path: '/cloud',
        name: 'cloud',
        component: Clouds
    },
    {
        path: '/situation/:userId',
        name: 'situation',
        components: {
            default: Situation,
            'errors': Myerrorr,
            'right': Rightness
        },
    },
    {
        path: '/couple/:userId/:token/',  //为页面绑定后台反馈过来的token，使得对方可以准确获得你的套题
        name: 'couple',
        component: Couple,
        meta: {
            keepAlive: true,
            title: 'couple'
        }
    },
    {
        path: '/form/:userId',
        name: 'form',
        component: form
    },
    {
        path: '/zhinengtuijian/:userId',
        name: 'tuijian',
        component: tuijian
    },

]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
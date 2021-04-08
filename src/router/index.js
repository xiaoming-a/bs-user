import Vue from 'vue'
import VueRouter from 'vue-router'

//引入个页面
const Home = () => import('../views/home/Home');
const Mine = () => import('../views/mine/Mine');
const Search = () => import('../views/search/Search');
const RoomList = () => import('../views/room/RoomList');
const RoomSearch = () => import('../views/room/RoomSearch');
const Details = () => import('../views/details/Details')
const Login = () => import('../views/login/Login')
const Register = () => import('../views/login/Register')
const Service = () => import('../views/mine/service/Service')
const Pay = () => import('../views/mine/pay/Pay')
const House = () => import('../views/mine/house/House')
const Contract = () => import('../views/mine/contract/Contract')
const zl = () => import('../views/mine/setSf/zl')


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/put_house',
    name: 'House',
    component: House
  },

  {
    path: '/contract',
    name: 'Contract',
    component: Contract
  },
  {
    path: '/zl',
    name: 'zl',
    component: zl
  },
  {
    path: '/houses/:id',
    name: 'RoomList',
    component: RoomList,
    props: true
  },
  {
    path: '/search/:id',
    name: 'RoomSearch',
    component: RoomSearch,
    props: true
  },
  {
    path: '/houses/details/:id',
    name: 'Details',
    component: Details,
    props: true
  },
]

const router = new VueRouter({
  routes
})

export default router

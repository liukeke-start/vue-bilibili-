import Vue from 'vue'
import App from './App'


//Vue路由和Resource
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter);
Vue.use(VueResource);

// vue滑块
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)



// UI组件
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)

// 样式
// import './assets/sass/app.scss'

// 组件
// import second from './components/second'

Vue.config.productionTip = false

// eslint-disable no-new

// 引入路由
import router from "./router/router.js"

// 配置完成后，把router 实例注入到 vue 根实例中,就可以使用路由了
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
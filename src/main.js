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

//图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
    preLoad: 5,
    error: './assets/image/error.jpg',
    loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
    attempt: 1,
    listenEvents: ['scroll', 'mousewheel']
});

// jquery插件
import $ from 'jquery'

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
    data: {
        showModal: false
    },
    router,
    render: h => h(App)
})
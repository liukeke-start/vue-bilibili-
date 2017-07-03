import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import show from "@/components/show.vue";
import showPlay from '@/components/showPlay.vue'
import recommond from "@/components/recommond.vue";
import drama from "@/components/drama.vue";
import partition from "@/components/partition.vue";
import follow from "@/components/follow.vue";
import find from "@/components/find.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

/* 首先要定义route,  一条路由的实现。它是一个对象，由两个部分组成： path和component.
 path 指路径，component 指的是组件。如：{path:’/home’, component: home} */

const routes = [{
            path: "/show",
            component: show
        },
        {
            name: 'showplay',
            path: '/showPlay',
            component: showPlay
        },
        {
            path: "/recommond",
            component: recommond
        },
        {
            path: "/drama",
            component: drama
        },
        {
            path: "/partition",
            component: partition
        },
        {
            path: "/follow",
            component: follow
        },
        {
            path: "/find",
            component: find
        }
    ]
    // 最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。
var router = new VueRouter({
    routes
})

export default router;

/* 路由执行过程：当用户点击 router-link 标签时，会去寻找它的 to 属性， 它的 to 属性和
 js 中配置的路径{ path: '/home', component: Home}  path 一一对应，从而找到了匹配的组
 件， 最后把组件渲染到 <router-view> 标签所在的地方。所有的这些实现才是基于hash 实现的。*/
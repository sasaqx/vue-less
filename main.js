import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './vuex/components/entry/index.vue'
import Detail from './vuex/components/entry/detail.vue'
import "css/common/base.less"
Vue.use(VueRouter);
// vue fix
const h = new Vue().$createElement

let _render = Vue.prototype._render

Vue.prototype._render = function () {
    try {
        return _render.apply(this, arguments)
    } catch (e) {
        console.error("Error when render called : ", e)
        return h();
    }
}

const routes = [
    {
        path: '/index',
        name: 'index',
        component: Index
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail
    }
]
const router = window.Router = new VueRouter({
  routes,
});

import routeView from './vuex/components/common/router.vue'

//启动app
window.document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        // if (window.location.hash === '#!/') {
        //     router.push('/pushSale');
        // }
        window.app = new Vue({
            el: '#app',
            render: h => h(routeView),
            router: router,
        })
    }
};

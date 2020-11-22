// 路由表

import VueRouter from 'vue-router';

// 引入组件
import main from '../page/main';
import page1 from '../page/page1';

const routes = [
    {
        path: '/',
        component: main
    },
    {
        path: '/page1',
        component: page1
    }
];

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
    
export default router;
// 路由表

import VueRouter from 'vue-router';

// 引入组件
import main from '../page/main';

const routes = [
    {
        path: '/',
        component: main
    }
];

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
    
export default router;
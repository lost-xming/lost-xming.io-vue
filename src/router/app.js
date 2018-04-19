const index = () => import(/* webpackChunkName: "index" */ '../view/index');
const App = () => import(/* webpackChunkName: "archives" */ '../view/app');

export default {
    path: '/',
    name: '主页',
    component: index,
    children: [  //这里就是二级路由的配置
        {
            path: '/app',
            name: '首页',
            component: App
        }     
    ]
}
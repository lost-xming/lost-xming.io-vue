const index = () => import(/* webpackChunkName: "index" */ '../view/index');
const Demo = () => import(/* webpackChunkName: "demo" */ '../view/demo');

export default {
    path: '/',
    name: '主页',
    component: index,
    children: [  //这里就是二级路由的配置
        {
            path: '/demo',
            name: 'demo',
            component: Demo
        }     
    ]
}
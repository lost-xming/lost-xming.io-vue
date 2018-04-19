// import index from '@/view/index'
// import Integral_list from '@/view/credits/integral_list';
const index = () => import(/* webpackChunkName: "index" */ '../view/index');
const Archives = () => import(/* webpackChunkName: "archives" */ '../view/archives');

export default {
    path: '/',
    name: '主页',
    component: index,
    children: [  //这里就是二级路由的配置
        {
            path: '/archives',
            name: '归档',
            component: Archives
        }     
    ]
}
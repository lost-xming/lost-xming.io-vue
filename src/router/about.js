// import index from '@/view/index'
// import Integral_list from '@/view/credits/integral_list';
const index = () => import(/* webpackChunkName: "index" */ '../view/index');
const About = () => import(/* webpackChunkName: "about" */ '../view/about');

export default {
    path: '/',
    name: '主页',
    component: index,
    children: [  //这里就是二级路由的配置
        {
            path: '/about',
            name: '会员积分列表',
            component: About
        }     
    ]
}
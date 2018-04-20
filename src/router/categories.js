const index = () => import(/* webpackChunkName: "index" */ '../view/index');
const CategoriesIndex = () => import(/* webpackChunkName: "categoriesIndex" */ '../view/categories/index');
const Css3 = () => import(/* webpackChunkName: "css3" */ '../view/categories/css3');
const Html5 = () => import(/* webpackChunkName: "html5" */ '../view/categories/html5');
const NodeJS = () => import(/* webpackChunkName: "nodeJS" */ '../view/categories/nodeJS');
const Git = () => import(/* webpackChunkName: "git" */ '../view/categories/git');
const Http = () => import(/* webpackChunkName: "http" */ '../view/categories/http');
const Javascript = () => import(/* webpackChunkName: "javascript" */ '../view/categories/javascript');
const Nginx = () => import(/* webpackChunkName: "nginx" */ '../view/categories/nginx');
const Vue = () => import(/* webpackChunkName: "vue" */ '../view/categories/vue');
const Webpack = () => import(/* webpackChunkName: "webpack" */ '../view/categories/webpack');
const Wx = () => import(/* webpackChunkName: "wx" */ '../view/categories/wx');

export default {
    path: '/',
    name: '主页',
    component: index,
    children: [  //这里就是二级路由的配置
        {
            path: '/categories',
            name: 'CategoriesIndex',
            component: CategoriesIndex
        },
        {
            path: '/categories/css3',
            name: 'Css3',
            component: Css3
        },
        {
            path: '/categories/html5',
            name: 'html5',
            component: Html5
        },
        {
            path: '/categories/nodeJS',
            name: 'nodeJS',
            component: NodeJS
        },
        {
            path: '/categories/http',
            name: 'http',
            component: Http
        },
        {
            path: '/categories/javascript',
            name: 'javascript',
            component: Javascript
        },
        {
            path: '/categories/nginx',
            name: 'nginx',
            component: Nginx
        },
        {
            path: '/categories/vue',
            name: 'vue',
            component: Vue
        },
        {
            path: '/categories/git',
            name: 'git',
            component: Git
        },
        {
            path: '/categories/webpack',
            name: 'webpack',
            component: Webpack
        },
        {
            path: '/categories/wx',
            name: 'wx',
            component: Wx
        },
    ]
}
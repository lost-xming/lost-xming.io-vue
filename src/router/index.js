import Vue from 'vue'
import Router from 'vue-router'
import App from './app'
import About from './about'
import Archives from './archives'
import Categories from './categories'

Vue.use(Router)

export default new Router({
    routes: [
        App,
        About,
        Archives,
        Categories
    ]
})

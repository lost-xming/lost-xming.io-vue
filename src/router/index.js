import Vue from 'vue'
import Router from 'vue-router'
import App from './app'
import About from './about'
import Demo from './demo'
import Archives from './archives'
import Categories from './categories'

Vue.use(Router)

export default new Router({
    routes: [
        App,
        About,
        Demo,
        Archives,
        Categories
    ]
})

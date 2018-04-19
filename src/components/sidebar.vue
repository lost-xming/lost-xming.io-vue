<template>
    <Menu theme="dark" width="auto" >
        <div class="headband"></div>
        <header id="header" class="header" itemscope itemtype="http://schema.org/WPHeader">
            <div class="header-inner">
                <div class="site-brand-wrapper">
                    <div class="site-meta ">
                        <div class="custom-logo-site-title">
                            <a href="/" class="brand" rel="start">
                                <span class="logo-line-before">
                                    <i></i>
                                </span>
                                <span class="site-title">小蜗牛</span>
                                <span class="logo-line-after">
                                    <i></i>
                                </span>
                            </a>
                        </div>
                        <h1 class="site-subtitle" itemprop="description">我愿做一只蜗牛，背负上所有</h1>
                    </div>
                    <!-- 移动端 显示导航按钮 -->
                    <div class="site-nav-toggle">
                        <button>
                            <span class="btn-bar"></span>
                            <span class="btn-bar"></span>
                            <span class="btn-bar"></span>
                        </button>
                    </div>
                </div>
                <!-- site-nav-on 控制导航显示与隐藏 -->
                <nav class="site-nav ">
                    <ul id="menu" class="menu">
                        <li v-for="(list , index) in lists" :class="list.className">
                            <router-link  :to=list.pathTo  :key="list.title"  rel="section" active-class="menu-item-active">
                                <i :class="list.icon"></i>
                                <br /> {{list.title}}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </Menu>
</template>
<script>
export default {
    data(){
        return {
            lists : [
                {
                    className : "menu-item menu-item-home",
                    icon : "menu-item-icon fa fa-fw fa-home",
                    title : "首页",
                    pathTo :"/app",
                    clickFlag : false
                },
                {
                    className : "menu-item menu-item-archives",
                    icon : "menu-item-icon fa fa-fw fa-archive",
                    title : "归档",
                    pathTo :"/archives",
                    clickFlag : false
                },
                {
                    className : "menu-item menu-item-categories",
                    icon : "menu-item-icon fa fa-fw fa-th",
                    title : "分类",
                    pathTo :"/categories",
                    clickFlag : false
                },
                {
                    className : "menu-item menu-item-about",
                    icon : "menu-item-icon fa fa-fw fa-user",
                    title : "关于",
                    pathTo :"/about",
                    clickFlag : false
                }
            ],
            
        }
    },
    methods: {
        liClick (index) {
            console.log(1111)
            this.lists[index].clickFlag = !this.lists[index].clickFlag
        }
    }
}
</script>
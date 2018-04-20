<template>
    <div class="container sidebar-position-left  page-archive">
        <!-- 顶部 状态条 和 菜单导航 -->
        <Sidebar></Sidebar>
        <!-- content 和 左侧图片logo以及 往下的简介 -->
        <main id="main" class="main">
            <div class="main-inner">
                <div class="content-wrap">
                    <div id="content" class="content">
                        <!-- 首页 -->
                        <router-view></router-view>
                    </div>
                </div>
                <aside id="sidebar" class="sidebar">
                    <div class="sidebar-inner">
                        <section class="site-overview sidebar-panel sidebar-panel-active">
                            <div class="site-author motion-element" itemprop="author" itemscope itemtype="http://schema.org/Person">
                                <img class="site-author-image" itemprop="image" src="../assets/logo.png" alt="Yinkai Chen" />
                                <p class="site-author-name" itemprop="name">lost-xming</p>
                                <p class="site-description motion-element" itemprop="description"></p>
                            </div>
                            <nav class="site-state motion-element">
                                <div class="site-state-item site-state-posts">
                                    <a href="/archives/index.html">
                                        <span class="site-state-item-count">1</span>
                                        <span class="site-state-item-name">日志</span>
                                    </a>
                                </div>
                                <div class="site-state-item site-state-categories">
                                    <a href="/categories/index.html">
                                        <span class="site-state-item-count">8</span>
                                        <span class="site-state-item-name">分类</span>
                                    </a>
                                </div>
                                <div class="site-state-item site-state-tags">
                                    <a href="/#/demo/">
                                        <span class="site-state-item-count">4</span>
                                        <span class="site-state-item-name">案例</span>
                                    </a>
                                </div>
                            </nav>
                            <div class="feed-link motion-element">
                                <a href="//wwlin.cn" rel="alternate">
                                    <i class="fa fa-rss"></i>
                                    个人博客
                                </a>
                            </div>
                            <div class="links-of-author motion-element">
                                <span class="links-of-author-item">
                                    <a href="https://github.com/lost-xming" target="_blank" title="GitHub">
                                        <i class="fa fa-fw fa-github"></i>
                                        GitHub
                                    </a>
                                </span>
                                <span class="links-of-author-item">
                                    <a href="mailto:asln_lz@126.com" target="_blank" title="E-Mail">
                                        <i class="fa fa-fw fa-envelope"></i>
                                        E-Mail
                                    </a>
                                </span>
                                <span class="links-of-author-item">
                                    <a href="https://segmentfault.com/u/wangwenlin" target="_blank" title="segmentfault">
                                        <i class="fa fa-fw fa-globe"></i>
                                        segmentfault
                                    </a>
                                </span>
                                
                            </div>
                        </section>
                    </div>
                </aside>
            </div>
        </main>

        <!-- 页脚 -->
        <footer id="footer" class="footer">
            <div class="footer-inner">
                <div class="copyright">
                    &copy; 2017 -
                    <span itemprop="copyrightYear">2018</span>
                    <span class="with-love">
                        <i class="fa fa-heart"></i>
                    </span>
                    <span class="author" itemprop="copyrightHolder">lost-xming</span>
                </div>
            </div>
        </footer>
        <div class="back-to-top">
            <i class="fa fa-arrow-up"></i>
        </div>
    </div>
</template>
<script>
import Sidebar from '../components/sidebar';

export default {
    data () {
        return {
        }
    },
    computed: {
       
    },
    methods: {
        
    },
    mounted () {
    },
    components :{
        Sidebar
    }
}
</script>
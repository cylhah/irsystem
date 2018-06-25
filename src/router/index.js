import Vue from 'vue'
import Router from 'vue-router'
import postlist from '@/components/view/postlist.vue'
import searchPage from '@/components/view/searchPage.vue'
import article from '@/components/view/article.vue'
import page404 from '@/components/view/page404.vue'
import pc from '@/components/view/pc.vue'
import collections from '@/components/view/collections.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: postlist
    },
    {
      path: '/postlist/:type',
      name: 'postlist',
      component: postlist
    },
    {
      path: '/:userId',
      name: 'personalCenter',
      component: pc,
      children: [
        {
          path: '/',
          component: collections
        },
        {
          path: 'history',
          component: collections
        },
        {
          path: 'comment',
          component: collections
        }
      ]
    },
    {
      path: '/search/:keyword',
      name: 'searchPage',
      component: searchPage
    },
    {
      path: '/article/:articleId' ,
      component: article
    },
    {
      path: '/error/404' ,
      name: 'page404',
      component: page404
    },
    {
      path: '*',
      redirect: '/error/404'
    }
  ]
})

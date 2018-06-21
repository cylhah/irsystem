import Vue from 'vue'
import Router from 'vue-router'
import postlist from '@/components/view/postlist.vue'
import searchPage from '@/components/view/searchPage.vue'
import article from '@/components/view/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/postlist/:type',
      name: 'postlist',
      component: postlist
    },
    {
      path: '/postlist/search/:keyword',
      name: 'searchPage',
      component: searchPage
    },
    {
      path: '/article/:articleId' ,
      component: article
     }
  ]
})

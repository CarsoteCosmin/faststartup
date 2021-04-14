import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import StartPage from '../components/Start/StartPage.vue'

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '*',
      component: () => import("../components/404/NotFound.vue")
    },
    {
      path: '/',
      name: 'startpage',
      component: StartPage,
      meta: {
        title: 'FastStartUp'
      }
    },
    {
      path: '/offers',
      name: 'mainpage',
      component: () => import('../components/OffersPage/MainPage.vue'),
      meta: {
        title: 'FastStartUp | Offers'
      }
    },
    {
      path: '/formular',
      name: 'formular',
      component: () => import('../components/OffersPage/Formular.vue'),
      meta: {
        title: 'FastStartUp | Formular'
      }
    },
    {
      path: '/app',
      name: 'apppage',
      component: () => import('../components/OffersPage/AppPage.vue'),
      meta: {
        title: 'FastStartUp | App'
      }
    },
    {
      path: '/terms&conditions',
      name: 'terms&conditions',
      component: () => import('../components/Footer/Terms_Cond.vue'),
      meta: {
        title: 'FastStartUp | Terms & Conditions'
      }
    },
    {
      path: '/support/login',
      name: 'login',
      component: () => import('../components/Footer/Support/Login.vue'),
      meta: {
        title: 'FastStartUp | Login'
      }
    },
    {
      path: '/support/chat',
      name: 'pagesupport',
      props: true,
      component: () => import('../components/Footer/Support/PageSupport.vue'),
      meta: {
        requiresAuth: true,
        title: 'FastStartUp | Chat'
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../components/Footer/Support/Admin.vue'),
      meta: {
        requiresAuth: true,
        title: 'FastStartUp | Admin'
      },
      children: [
        {
          path: '/admin/:chatsName',
          name: 'chat',
          props: true,
          meta: {
            requiresAuth: true,
            title: 'FastStartUp'
          },
          component: () => import('../components/Footer/Support/Messages/Chat.vue'),
        },
      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  document.title = to.meta.title
  if (requiresAuth && !currentUser) next('/support/login')
  else if (!requiresAuth && currentUser) next('/support/chat');
  else next();
});
export default router;
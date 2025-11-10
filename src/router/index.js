import SignUp from '@/pages/auth/SignUp.vue'
import ForgotPassword from '@/pages/auth/ForgotPassword.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/auth/LogIn.vue'
import Complete from '@/pages/auth/Complete.vue'
import User from '@/pages/dashboard/User.vue'
import Cards from '@/pages/dashboard/Cards.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/dashboard/DashboardLayout.vue'
import DashboardHome from '@/pages/dashboard/DashboardHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: AuthLayout,
      name: 'auth',
      redirect: '/auth/login',
      meta: { requiresGuest: true },
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login,
        },
        {
          path: 'signup',
          component: SignUp,
        },
        {
          path: 'forgotPassword',
          component: ForgotPassword,
        },
        {
          path: 'complete',
          component: Complete,
        },
      ],
    },

    {
      path: '/',
      component: DashboardLayout,
      name: 'dashboard',
      meta: { requiresAuth: true },

      children: [
        {
          path: '',
          name: 'home',
          component: DashboardHome,
        },
        {
          path: 'user',
          component: User,
        },
        {
          path: 'cards',
          component: Cards,
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (to.meta.requiresAuth && !user) {
    return next({ name: 'auth' })
  }
  if (to.meta.requiresGuest && user) {
    return next({ name: 'home' })
  }
  next()
})

export default router

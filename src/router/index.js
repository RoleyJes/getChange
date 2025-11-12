import SignUp from '@/pages/auth/SignUp.vue'
import ForgotPassword from '@/pages/auth/ForgotPassword.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '@/pages/auth/LogIn.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/dashboard/DashboardLayout.vue'
import DashboardHome from '@/pages/dashboard/DashboardHome.vue'
import DashboardCards from '@/pages/dashboard/DashboardCards.vue'
import AuthComplete from '@/pages/auth/AuthComplete.vue'
import DashboardEmployee from '@/pages/dashboard/DashboardEmployee.vue'

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
          component: LogIn,
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
          component: AuthComplete,
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
          component: DashboardEmployee,
        },
        {
          path: 'cards',
          component: DashboardCards,
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

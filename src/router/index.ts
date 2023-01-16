import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import ControlPanel from '@/views/ControlPanel.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cp',
    name: 'control-panel',
    component: ControlPanel,
    redirect: () => ({ name: 'control-panel.dashboard' }),
    beforeEnter: () => {
      // Auth middleware...
    },
    children: [
      {
        path: 'dashboard',
        name: 'control-panel.dashboard',
        component: () => import('@/views/control-panel/Dashboard.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to: any, from: any, savedPosition: any) => {
    return !savedPosition ? { top: 0, left: 0 } : savedPosition
  }
})

export default router

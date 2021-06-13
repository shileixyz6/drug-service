import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from '@/views/HomePage'
import WorkDynamic from '@/components/WorkDynamic'
import ReportInfo from '@/components/ReportInfo'
import ShortageList from '@/components/ShortageList'
import DiscontinuedInfo from '@/components/DiscontinuedInfo'
import ContactUnit from '@/components/ContactUnit'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/homePage',
    children: [
      {
        path: '/homePage',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/workDynamic',
        name: 'WorkDynamic',
        component: WorkDynamic
      },
      {
        path: '/reportInfo',
        name: 'ReportInfo',
        component: ReportInfo
      },
      {
        path: '/shortageList',
        name: 'ShortageList',
        component: ShortageList
      },
      {
        path: '/discontinuedInfo',
        name: 'DiscontinuedInfo',
        component: DiscontinuedInfo
      },
      {
        path: '/contactUnit',
        name: 'ContactUnit',
        component: ContactUnit
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

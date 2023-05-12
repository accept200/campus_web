import { createRouter, createWebHistory } from 'vue-router'
import routers from "@/router/router"
import {useTokensStore} from "@/stores/token";

const history = createWebHistory(import.meta.env.BASE_URL)
const router = createRouter({
  history: history,
  routes: routers
})

router.beforeEach(to => {
  const tokens = useTokensStore();
  const authorized = tokens.token !== null && tokens.uid !== null
  // already authorized
  if (to.name === 'login' && authorized) {
    return to.query.redirect?.toString() ?? '/'
  }
  // need authorize & token is invalid
  if (to.meta.requiresAuth === true && !authorized) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

export default router

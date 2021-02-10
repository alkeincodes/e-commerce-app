import multiguard from 'vue-router-multiguard'
import store from '@/store'
// import axios from '@/api/axios'

export const authRouteGuard = async (to, from, next) => {
  if (store.getters['auth/authenticated'] && store.state.auth.user.utype !== 'admin') {
    next()
  } else {
    next('/')
  }
}

export const authAdminRouteGuard = async (to, from, next) => {
  if (store.getters['auth/authenticated'] && store.state.auth.user.utype === 'admin') {
    next()
  } else {
    next('/')
  }
}

export const addGuardstoRoutes = routes =>
  routes.map(r => {
    r.beforeEnter = multiguard([authRouteGuard])
    r.props = true
    return r
  })

export const addAdminGuardToRoutes = routes =>
  routes.map(r => {
    r.beforeEnter = multiguard([authAdminRouteGuard])
    r.props = true
    return r
  })

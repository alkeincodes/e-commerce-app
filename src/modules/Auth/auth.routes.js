export default [
  {
    path: '/',
    name: 'Index',
    component: require('@/modules/Auth/Index.vue').default
  },
  {
    path: '/login',
    name: 'Login',
    component: require('@/modules/Auth/Pages/Login.vue').default,
    meta: { requiresVisitor: true }
  }
]

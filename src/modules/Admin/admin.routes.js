export default [
  {
    name: 'Admin',
    path: '/admin',
    component: require('@/modules/Admin/Pages/Home.vue').default
  },
  {
    name: 'AdminLogin',
    path: '/admin/login',
    component: require('@/modules/Admin/Pages/Login.vue').default
  },
  {
    name: 'AdminOrders',
    path: '/admin/orders',
    component: require('@/modules/Admin/Pages/Orders.vue').default
  },
  {
    name: 'AdminProducts',
    path: '/admin/products',
    component: require('@/modules/Admin/Pages/Products.vue').default
  }
]

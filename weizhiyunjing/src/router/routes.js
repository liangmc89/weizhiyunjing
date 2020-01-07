const routes = [{
    path: '/',
    component: () => import('pages/login.vue')
  },
  {
    path: '/platform',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      name:'index',
      component: () => import('pages/Index.vue')
    }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

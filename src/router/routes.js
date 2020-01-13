const routes = [{
    path: '/',
    component: () => import('pages/login.vue')
  },
  {
    path: '/platform',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
        path: '',
        name: 'index',
        component: () => import('pages/Index.vue')
      }, {
        path: 'bigdata',
        name: 'bigdata',
        component: () => import('pages/bigdata.vue')
      }, {
        path: 'tourist',
        name: 'tourist',
        component: () => import('pages/tourist.vue')
      },
      {
        path: 'touristManager',
        name: 'touristManager',
        component: () => import('pages/touristManager.vue')
      },
      {
        path: 'evaluate',
        name: 'evaluate',
        component: () => import('pages/evaluate.vue')
      },
      {
        path: 'visualization',
        name: 'visualization',
        component: () => import('pages/visualization.vue')
      },
      {
        path: 'qa',
        name: 'qa',
        component: () => import('pages/qa.vue')

      },
      {
        path: 'monitor',
        name: 'monitor',
        component: () => import('pages/monitor.vue')

      }, {
        path: 'marketing',
        name: 'marketing',
        component: () => import('pages/marketing.vue')
      }
    ]
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


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TipSquare.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'signup', component: () => import('pages/SignUp.vue') },
      { path: 'drifting', component: () => import('pages/Drifting.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

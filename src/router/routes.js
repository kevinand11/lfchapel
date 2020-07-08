export default [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
	},
	{
		path: '/about-us',
		name: 'About',
		component: () => import(/* webpackChunkName: "about" */ '../views/about-us.vue'),
	},
	{
		path: '/contact-us',
		name: 'ContactUs',
		component: () => import(/* webpackChunkName: "contact-us" */ '../views/contact-us.vue'),
	},
]

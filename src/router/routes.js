export default [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
	},
	{
		path: '/about-us',
		name: 'About Us',
		component: () => import(/* webpackChunkName: "about" */ '../views/about-us/index.vue'),
		children: [
			{
				path: '/about-us/our-church',
				name: 'Our Church',
				component: () => import(/* webpackChunkName: "our-church" */ '../views/about-us/our-church.vue'),
			},
			{
				path: '/about-us/rccg-the-church',
				name: 'RCCG - The Church',
				component: () => import(/* webpackChunkName: "rccg-the-church" */ '../views/about-us/rccg-the-church.vue'),
			},
			{
				path: '/about-us/the-general-overseer',
				name: 'The General Overseer',
				component: () => import(/* webpackChunkName: "the-general-overseer" */ '../views/about-us/the-general-overseer.vue'),
			},
			{
				path: '/about-us/mission-and-vision',
				name: 'Mission and Vision',
				component: () => import(/* webpackChunkName: "mission-and-vision" */ '../views/about-us/mission-and-vision.vue'),
			},
		]
	},
	{
		path: '/contact-us',
		name: 'Contact Us',
		component: () => import(/* webpackChunkName: "contact-us" */ '../views/contact-us.vue'),
	},
]

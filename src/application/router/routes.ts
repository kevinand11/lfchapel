export default [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: 'home' */ './views/home.vue'),
	},
	{
		path: '/about-us',
		name: 'About Us',
		component: () => import(/* webpackChunkName: 'about-us' */ './views/about-us/index.vue'),
		children: [
			{
				path: '/about-us/our-church',
				name: 'Our Church',
				component: () => import(/* webpackChunkName: 'our-church' */ './views/about-us/our-church.vue'),
			},
			{
				path: '/about-us/rccg-the-church',
				name: 'RCCG - The Church',
				component: () => import(/* webpackChunkName: 'rccg-the-church' */ './views/about-us/rccg-the-church.vue'),
			},
			{
				path: '/about-us/the-general-overseer',
				name: 'The General Overseer',
				component: () => import(/* webpackChunkName: 'the-general-overseer' */ './views/about-us/the-general-overseer.vue'),
			},
			{
				path: '/about-us/mission-and-vision',
				name: 'Mission and Vision',
				component: () => import(/* webpackChunkName: 'mission-and-vision' */ './views/about-us/mission-and-vision.vue'),
			},
			{
				path: '/about-us/our-pastor',
				name: 'Our Pastor',
				component: () => import(/* webpackChunkName: 'our-pastor' */ './views/about-us/our-pastor.vue'),
			},
			{
				path: '/about-us/service-times',
				name: 'Service Times',
				component: () => import(/* webpackChunkName: 'service-times' */ './views/about-us/service-times.vue'),
			},
		]
	},
	{
		path: '/contact-us',
		name: 'Contact Us',
		component: () => import(/* webpackChunkName: 'contact-us' */ './views/contact-us.vue'),
	},
	{
		path: '/give',
		name: 'Give',
		component: () => import(/* webpackChunkName: 'give' */ './views/give.vue'),
	},
	{
		path: '/articles',
		name: 'Articles',
		component: () => import(/* webpackChunkName: 'articles' */ './views/articles/index.vue'),
	},
	{
		path: '/articles/:id',
		name: 'Article',
		component: () => import(/* webpackChunkName: 'article' */ './views/articles/_id.vue'),
	},
	{
		path: '/events',
		name: 'Events',
		component: () => import(/* webpackChunkName: 'events' */ './views/events.vue'),
	},
	{
		path: '/forms',
		name: 'Online Forms',
		component: () => import(/* webpackChunkName: 'forms' */ './views/forms/index.vue'),
		children: [
			{
				path: '/forms/prayer-requests',
				name: 'Make a Prayer Request',
				component: () => import(/* webpackChunkName: 'prayer-requests' */ './views/forms/prayer-requests.vue'),
			},
			{
				path: '/forms/testimonies',
				name: 'Share a Testimony',
				component: () => import(/* webpackChunkName: 'testimonies' */ './views/forms/testimonies.vue'),
			},
			{
				path: '/forms/feedback',
				name: 'Give us Feedback',
				component: () => import(/* webpackChunkName: 'feedback' */ './views/forms/feedback.vue'),
			},
		]
	},
	{
		path: '/media',
		name: 'Media',
		component: () => import(/* webpackChunkName: 'media' */ './views/media/index.vue'),
		children: [
			{
				path: '/media/lfc-tv',
				name: 'LFC TV',
				component: () => import(/* webpackChunkName: 'lfc-tv' */ './views/media/lfc-tv.vue'),
			},
			{
				path: '/media/audio-sermons',
				name: 'Audio Sermons',
				component: () => import(/* webpackChunkName: 'audio-sermons' */ './views/media/audio-sermons.vue'),
			},
			{
				path: '/media/photo-gallery',
				name: 'Photo Gallery',
				component: () => import(/* webpackChunkName: 'photo-gallery' */ './views/media/photo-gallery.vue'),
			},
		]
	},
	{
		path: '/admin',
		name: 'Admin',
		component: () => import(/* webpackChunkName: 'admin' */ './views/admin/index.vue'),
		children: [
			{
				path: '/admin/',
				name: 'Dashboard',
				component: () => import(/* webpackChunkName: 'admin-dashboard' */ './views/admin/dashboard.vue'),
				meta: { requiresAuth: true, requiresAdmin: true }
			},
			{
				path: '/admin/signin',
				name: 'Sign In',
				component: () => import(/* webpackChunkName: 'sign-in' */ './views/admin/auth/signin.vue'),
				meta: { requiresNoAuth: true }
			},
			{
				path: '/admin/signup',
				name: 'Sign Up',
				component: () => import(/* webpackChunkName: 'sign-up' */ './views/admin/auth/signup.vue'),
				meta: { requiresNoAuth: true }
			},
			{
				path: '/admin/forgot-password',
				name: 'Forgot Password',
				component: () => import(/* webpackChunkName: 'forgot-password' */ './views/admin/auth/forgot-password.vue'),
				meta: { requiresNoAuth: true }
			},
			{
				path: '/admin/media/pictures/',
				name: 'Pictures',
				component: () => import(/* webpackChunkName: 'admin-pictures' */ './views/admin/media/pictures.vue'),
				meta: { requiresAuth: true, requiresAdmin: true }
			},
			{
				path: '/admin/media/audios/',
				name: 'Audios',
				component: () => import(/* webpackChunkName: 'admin-audios */ './views/admin/media/audios.vue'),
				meta: { requiresAuth: true, requiresAdmin: true }
			},
			{
				path: '/admin/*',
				name: 'Admin Not Found',
				redirect: '/admin/'
			},
		]
	},
	{
		path: '/*',
		name: 'Not Found',
		component: () => import(/* webpackChunkName: 'not-found' */ './views/not-found.vue'),
	},
]

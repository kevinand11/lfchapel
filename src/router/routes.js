export default [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: 'home' */ '../views/home.vue'),
	},
	{
		path: '/about-us',
		name: 'About Us',
		component: () => import(/* webpackChunkName: 'about-us' */ '../views/about-us/index.vue'),
		children: [
			{
				path: '/about-us/our-church',
				name: 'Our Church',
				component: () => import(/* webpackChunkName: 'our-church' */ '../views/about-us/our-church.vue'),
			},
			{
				path: '/about-us/rccg-the-church',
				name: 'RCCG - The Church',
				component: () => import(/* webpackChunkName: 'rccg-the-church' */ '../views/about-us/rccg-the-church.vue'),
			},
			{
				path: '/about-us/the-general-overseer',
				name: 'The General Overseer',
				component: () => import(/* webpackChunkName: 'the-general-overseer' */ '../views/about-us/the-general-overseer.vue'),
			},
			{
				path: '/about-us/mission-and-vision',
				name: 'Mission and Vision',
				component: () => import(/* webpackChunkName: 'mission-and-vision' */ '../views/about-us/mission-and-vision.vue'),
			},
			{
				path: '/about-us/our-pastor',
				name: 'Our Pastor',
				component: () => import(/* webpackChunkName: 'our-pastor' */ '../views/about-us/our-pastor.vue'),
			},
			{
				path: '/about-us/leadership',
				name: 'Leadership',
				component: () => import(/* webpackChunkName: 'leadership' */ '../views/about-us/leadership.vue'),
			},
			{
				path: '/about-us/pastors-message',
				name: 'Pastor\'s message',
				component: () => import(/* webpackChunkName: 'pastors-message' */ '../views/about-us/pastors-message.vue'),
			},
			{
				path: '/about-us/service-times',
				name: 'Service Times',
				component: () => import(/* webpackChunkName: 'service-times' */ '../views/about-us/service-times.vue'),
			},
		]
	},
	{
		path: '/contact-us',
		name: 'Contact Us',
		component: () => import(/* webpackChunkName: 'contact-us' */ '../views/contact-us.vue'),
	},
	{
		path: '/give',
		name: 'Give',
		component: () => import(/* webpackChunkName: 'give' */ '../views/give.vue'),
	},
	{
		path: '/articles',
		name: 'Articles',
		component: () => import(/* webpackChunkName: 'articles' */ '../views/articles/index.vue'),
	},
	{
		path: '/articles/:id',
		name: 'Article',
		component: () => import(/* webpackChunkName: 'article' */ '../views/articles/_id.vue'),
	},
	{
		path: '/events',
		name: 'Events',
		component: () => import(/* webpackChunkName: 'events' */ '../views/events.vue'),
	},
	{
		path: '/online-forms',
		name: 'Online Forms',
		component: () => import(/* webpackChunkName: 'online-forms' */ '../views/online-forms/index.vue'),
		children: [
			{
				path: '/online-forms/ask-our-pastor',
				name: 'Ask Our Pastor',
				component: () => import(/* webpackChunkName: 'ask-our-pastor' */ '../views/online-forms/ask-our-pastor.vue'),
			},
			{
				path: '/online-forms/membership',
				name: 'Membership',
				component: () => import(/* webpackChunkName: 'membership' */ '../views/online-forms/membership.vue'),
			},
			{
				path: '/online-forms/prayer-requests',
				name: 'Prayer Requests',
				component: () => import(/* webpackChunkName: 'prayer-requests' */ '../views/online-forms/prayer-requests.vue'),
			},
			{
				path: '/online-forms/testimonies',
				name: 'Testimonies',
				component: () => import(/* webpackChunkName: 'testimonies' */ '../views/online-forms/testimonies.vue'),
			},
			{
				path: '/online-forms/need-a-ride',
				name: 'Need A Ride',
				component: () => import(/* webpackChunkName: 'need-a-ride' */ '../views/online-forms/need-a-ride.vue'),
			},
			{
				path: '/online-forms/invite-a-friend',
				name: 'Invite A Friend',
				component: () => import(/* webpackChunkName: 'invite-a-friend' */ '../views/online-forms/invite-a-friend.vue'),
			},
			{
				path: '/online-forms/feedback',
				name: 'Feedback',
				component: () => import(/* webpackChunkName: 'feedback' */ '../views/online-forms/feedback.vue'),
			},
		]
	},
	{
		path: '/media',
		name: 'Media',
		component: () => import(/* webpackChunkName: 'media' */ '../views/media/index.vue'),
		children: [
			{
				path: '/media/lfc-tv',
				name: 'LFC TV',
				component: () => import(/* webpackChunkName: 'lfc-tv' */ '../views/media/lfc-tv.vue'),
			},
			{
				path: '/media/audio-sermons',
				name: 'Audio Sermons',
				component: () => import(/* webpackChunkName: 'audio-sermons' */ '../views/media/audio-sermons.vue'),
			},
			{
				path: '/media/photo-gallery',
				name: 'Photo Gallery',
				component: () => import(/* webpackChunkName: 'photo-gallery' */ '../views/media/photo-gallery.vue'),
			},
		]
	},
	{
		path: '/*',
		name: 'Not Found',
		component: () => import(/* webpackChunkName: 'not-found' */ '../views/not-found.vue'),
	},
]

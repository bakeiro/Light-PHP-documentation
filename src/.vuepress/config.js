module.exports = {
	base: '/Light-PHP-documentation/',
	dest: 'docs',
	title: 'Light-PHP',
	description: 'Light-PHP documentation, Micro framework PHP',

	themeConfig: {

		nav: [
		  	{ text: 'Home', link: '/' },
		  	{ text: 'Github', link: 'https://github.com/bakeiro/Light-PHP' },
			{ text: 'About me', link: 'https://davidbaqueiro.com' }
		],

		displayAllHeaders: true,
		sidebar: [
			{
				title: 'Introduction',
				collapsable: false,
				children: [
					['/overview/Overview', 'Overview'],
					['/overview/Routing', 'Routing'],
					['/overview/Configuration', 'Configuration'],
					['/overview/Template', 'Template'],
					['/overview/Folders', 'Folders']
				]
			},
			{
				title: 'Advanced',
				children: [	
					['/advanced/MoreInfo', 'More info'],
					['/advanced/Engine', 'Engine'],
					['/advanced/Database', 'Database']
				]
			}
		]
	}
}
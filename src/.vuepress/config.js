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
					['/overview/Installation', 'Installation'],
					['/overview/Overview', 'Overview'],
					['/overview/Routing', 'Routing'],
					['/overview/Template', 'Template'],
					['/overview/Database', 'Database'],
					['/overview/Configuration', 'Configuration'],
                    ['/overview/Folders', 'Folders'],
                    ['/overview/Faq', 'FAQ']
				]
			},
			{
				title: 'Advanced',
				children: [	
					['/advanced/Engine', 'Engine'],
                    ['/advanced/MoreInfo', 'More info'],
                    ['/advanced/DebugConsole', 'Debug console'],
					['/advanced/StartUpProcess', 'Start up process']
				]
			}
		]
	}
}
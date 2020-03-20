module.exports = {
	base: '/Light-PHP-documentation/',
	dest: 'docs',
	title: 'Light-PHP',
	description: 'Light-PHP documentation, Micro framework PHP',
	themeConfig: {
		nav: [
		  	{ text: 'Home', link: '/' },
		  	{ text: 'Github', link: 'https://github.com/bakeiro/Light-PHP' },
			{ text: 'About me', link: 'https://davidbaqueiro.com/en/' }
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
					['/overview/Database', 'Database'],
                    ['/overview/Template', 'Template'],
                    ['/overview/Session', 'Session'],
                    ['/overview/Helper', 'Helper'],
					['/overview/Config', 'Config'],
                    ['/overview/DebugConsole', 'Debug console'],
                    ['/overview/Faq', 'FAQ']
				]
			},
			{
				title: 'Advanced',
				children: [	
                    ['/advanced/Engine', 'Engine'],
                    ['/advanced/ErrorLoggin', 'Logs'],
                    ['/advanced/MoreInfo', 'More info'],
                    ['/advanced/StartUpProcess', 'Start up process'],
                    ['/advanced/Security', 'Security']
				]
            },
            {
                title: 'Cookbook',
				children: [	
                    ['/cookbook/CI-CD', 'CD/CD'],
                    ['/cookbook/light-php-site', 'light-php-site'],
                    ['/cookbook/encrypting_user_pass', 'Storing user pass'],
                    ['/cookbook/ErrorHandler', 'Error handler'],
                    ['/cookbook/multilanguaje_site', 'multilanguaje']
				]
			}
		]
	}
}
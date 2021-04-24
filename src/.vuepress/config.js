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
				title: 'Get started :rocket:',
				collapsable: false,
				children: [
          ['/overview/1Introduction', 'Introduction'],
          ['/overview/2Installation', 'Installation'],
          ['/overview/3Modules', 'Modular structure'],
          ['/overview/4Services', 'Services container'],
          ['/overview/5Routing', 'Routing'],
          ['/overview/6Config', 'Config'],
          ['/overview/7Faq', 'FAQ']
				]
			},
      {
				title: 'Services :jigsaw:',
				collapsable: false,
				children: [
          ['/overview/Database', 'Database'],
          ['/overview/Template', 'Template'],
          ['/overview/Session', 'Session'],
          ['/overview/Helper', 'Helper'],
          ['/overview/DebugConsole', 'Debug console'],
				]
			},
      {
        title: 'Cookbook :notebook_with_decorative_cover:',
				  children: [	
            ['/cookbook/CI-CD', 'CD/CD'],
            ['/cookbook/light-php-site', 'light-php-site'],
            ['/cookbook/encrypting_user_pass', 'Storing user pass'],
            ['/cookbook/ErrorHandler', 'Error handler'],
            ['/cookbook/multilanguaje_site', 'multilanguaje site']
				]
			}
		]
	}
}
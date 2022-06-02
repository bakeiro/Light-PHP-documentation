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
				title: 'Get started',
				collapsable: false,
				children: [
          ['/getStarted/1Introduction', 'Introduction'],
          ['/getStarted/2Installation', 'Installation'],
          ['/getStarted/3Modules', 'Modular structure'],
          ['/getStarted/4Services', 'Services container'],
          ['/getStarted/5Routing', 'Routing'],
          ['/getStarted/6Config', 'Config'],
          ['/getStarted/8Faq', 'FAQ']
				]
			},
      {
				title: 'Services',
				collapsable: true,
				children: [
          ['/services/1Config', 'Config'],
          ['/services/2Database', 'Database'],
          ['/services/3Console', 'Console'],
          ['/services/4Logger', 'Logger'],
          ['/services/5Output', 'Output'],
          ['/services/6Session', 'Session'],
          ['/services/7Util', 'Util'],
				]
			},
      {
				title: 'Cookbook',
				collapsable: true,
				children: [
          ['/cookbook/1Docker', 'Docker'],
          ['/cookbook/2CICD', 'CI/CD'],
          ['/cookbook/3StoreUserPass', 'Store user pass'],
          ['/cookbook/4ErrorHandler', 'Error handler'],
          ['/cookbook/5Multilanguage', 'Multi language'],
				]
			}
		]
	}
}
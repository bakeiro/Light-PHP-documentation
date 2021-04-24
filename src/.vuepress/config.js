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
          ['/getStarted/1Introduction', 'Introduction :rocket:'],
          ['/getStarted/2Installation', 'Installation'],
          ['/getStarted/3Modules', 'Modular structure'],
          ['/getStarted/4Services', 'Services container'],
          ['/getStarted/5Routing', 'Routing'],
          ['/getStarted/6Config', 'Config'],
          ['/getStarted/7Faq', 'FAQ']
				]
			},
      {
				title: 'Services :jigsaw:',
				collapsable: true,
				children: [
          ['/services/Database', 'Config'],
          ['/services/Database', 'Database'],
          ['/services/DebugConsole', 'Console'],
          ['/services/Logger', 'Logger'],
          ['/services/Output', 'Output'],
          ['/services/Session', 'Session'],
          ['/services/Util', 'Util'],
				]
			}
		]
	}
}
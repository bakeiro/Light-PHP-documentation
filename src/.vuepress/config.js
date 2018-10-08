module.exports = {
	base: 'Light-PHP-documentation/',
	dest: 'docs',
	title: 'Light-PHP',
	description: 'Light-PHP documentation, Micro framework PHP',

	themeConfig: {

		nav: [
		  	{ text: 'Home', link: '/' },
		  	{ text: 'Github', link: 'https://github.com/bakeiro/Light-PHP' },
			{ text: 'About me', link: 'https://davidbaqueiro.com' },
		],

		displayAllHeaders: true,
		sidebar: [
			{
				title: 'Introduction',
				collapsable: false,
				children: [
					['/overview/Overview', 'Overview'],
					['/overview/Configuration', 'Configuration'],
					['/overview/Routes', 'Routes'],
					['/overview/Template', 'Template'],
					['/overview/MoreInfo', 'More info']
				]
			},
			{
				title: 'Engine',
				children: [
					['/engine/engine_structure', 'Structure'],
					['/engine/folder_structure', 'Folders'],
					['/engine/database.md', 'Database']
			  	]
			}
		]
	}
}
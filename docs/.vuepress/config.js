const fs = require("fs")
const path = require("path")

module.exports = {
	title: 'JAVA设计模式',
	description: 'JAVA设计模式',
	base: process.env.NODE_ENV === 'production' ?'/design-pattern/' : '/',
	dest: "dist",
	markdown: {
		lineNumbers: true,
	},
	themeConfig: {
		nav: [
			{text: '首页', link: '/'},
			{text: 'github', link: 'https://github.com/senjyouhara/design-pattern'},
		],
	},
	plugins: {
		'autobar': {'pinyinNav': true,maxLevel: 3},
		'@vuepress/back-to-top': true,
		'@vuepress/last-updated': true,
		'@vuepress/search': {
			search: true, //默认false
			searchMaxSuggestions: 10 // 默认是5
		}
	},
	configureWebpack: {
		// output: {
		// 	publicPath: process.env.NODE_ENV === 'production' ?'/design-patterns/' : '/'
		// }
	  // resolve: {
	  //   alias: {
	  //     '@': '../'
	  //   }
	  // }
	}
}

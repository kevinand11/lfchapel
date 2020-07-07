module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-var': 'error',
		'indent': ['error', 'tab'],
		'semi': ['error', 'never'],
		'quotes': ['error', 'single'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'prefer-const': ['error']
	},
}

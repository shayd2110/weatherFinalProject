module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: "module",
	},
	parser: "babel-eslint",
	plugins: ["react"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"react/no-deprecated": "off",

		"react/prop-types": "off",
	},
};

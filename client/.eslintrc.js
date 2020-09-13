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
		"no-undef": "off",
		"no-unused-vars": "off",
		"react/jsx-no-duplicate-props": "off",
		"react/prop-types": "off",
		"react/no-unescaped-entities": "off",
		"react/no-deprecated": "off",
		"react/no-direct-mutation-state": "off",
		"no-empty": "off",
		"react/no-string-refs": "off",
	},
};

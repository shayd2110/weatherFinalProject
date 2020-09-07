module.exports = {
	env: {
		browser: true,
		commonjs: true,
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-undef": "off",
		"no-unused-vars": "off",
		"no-empty": "off",
	},
};

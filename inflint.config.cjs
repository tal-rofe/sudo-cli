const inflintConfig = {
	rules: {
		'{assets,scripts}/**/*': [2, 'kebab-case'],
		'src/**/*': [2, 'kebab-case'],
		'src/**/*.js': 2,
		'**/*.yml': 2,
	},
};

module.exports = inflintConfig;

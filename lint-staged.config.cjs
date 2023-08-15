const lintStagedConfig = {
	'src/**/*.ts': ['eslint --fix', () => 'tsc --noEmit'],
	'**/*.{ts,js,json,yaml}': 'prettier --write',
	'**/*': ['inflint -c ./inflint.config.cjs', 'cspell lint -c ./cspell.json --no-progress --no-summary'],
};

module.exports = lintStagedConfig;

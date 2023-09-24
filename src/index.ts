import Yargs from 'yargs/yargs';

import { executeSudo } from '@/helpers/execute-sudo';

const argv = await Yargs(process.argv.slice(2)).options({
	name: { type: 'string', default: 'sudo cli', alias: 'n' },
}).argv;

const command = argv._[0];

if (!command) {
	console.error('Missing command to execute');

	process.exit(1);
}

executeSudo(argv.name, command.toString());

import { exec } from 'sudo-prompt';

export const sudoPrompter = (appName: string, command: string) => {
	exec(command, { name: appName }, (error, stdout) => {
		if (error) {
			console.error(error);

			process.exit(1);
		}

		console.log(stdout);
	});
};

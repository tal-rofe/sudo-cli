import { spawn } from 'node:child_process';

export const spawnCommand = async (command: string) => {
	await new Promise<void>(() => {
		const spawner = spawn(command, {
			cwd: process.cwd(),
			windowsHide: true,
			shell: true,
		});

		spawner.stdout?.on('data', (data: Buffer) => {
			console.log(data.toString());
		});
		spawner.stderr?.on('data', (data: Buffer) => {
			console.error(data.toString());
		});
		spawner.on('close', (exitCode: number) => process.exit(exitCode));
	});
};

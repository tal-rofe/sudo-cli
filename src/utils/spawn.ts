import { spawn } from 'node:child_process';

/**
 * The function spawns a command
 * * No usage for the "reject" because exit code is returned (to be used for process exit code),
 * * and in case of error, it gets logged anyway
 * @param command the command to execute
 * @returns the exit code of the command execution
 */
export const spawnCommand = (command: string) => {
	return new Promise<number>((resolve) => {
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
		spawner.on('close', (exitCode: number) => resolve(exitCode));
	});
};

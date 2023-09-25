import os from 'node:os';
import path from 'node:path';

import fs from 'fs-extra';

import { EXECUTE_COMMAND_SCRIPT_FILE_PATH } from '@/constants/windows';
import { spawnCommand } from '@/utils/spawn';

export const executePrivilegedWindows = async (command: string) => {
	await fs.outputFile(
		EXECUTE_COMMAND_SCRIPT_FILE_PATH,
		['@echo off', 'chcp 65001>nul', command].join(os.EOL),
		{ encoding: 'utf8' },
	);

	const spawnExitCode = await spawnCommand(
		`powershell.exe Start-Process -FilePath "${EXECUTE_COMMAND_SCRIPT_FILE_PATH}" -WorkingDirectory "${process.cwd()}" -WindowStyle hidden -Verb runAs`,
	);

	process.exitCode = spawnExitCode;

	fs.remove(path.dirname(EXECUTE_COMMAND_SCRIPT_FILE_PATH));
};

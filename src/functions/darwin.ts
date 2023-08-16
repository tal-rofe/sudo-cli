import fs from 'fs-extra';
import format from 'string-template';

import { ASK_PASSWORD_SCRIPT, ASK_PASSWORD_SCRIPT_FILE_PATH } from '@/constants/darwin';
import { spawnCommand } from '@/utils/spawn';

export const executePrivilegedDarwin = async (name: string, command: string) => {
	const formattedScript = format(ASK_PASSWORD_SCRIPT, { name });

	await fs.outputFile(ASK_PASSWORD_SCRIPT_FILE_PATH, formattedScript, {
		encoding: 'utf8',
		mode: 0o777,
	});

	await spawnCommand(
		`/usr/bin/env SUDO_ASKPASS="${ASK_PASSWORD_SCRIPT_FILE_PATH}" /usr/bin/sudo -A ${command}`,
	);

	fs.remove(ASK_PASSWORD_SCRIPT_FILE_PATH);
};

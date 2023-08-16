import { executePrivilegedDarwin } from '@/functions/darwin';
import { executePrivilegedLinux } from '@/functions/linux';
import { executePrivilegedWindows } from '@/functions/windows';

export const executeSudo = async (name: string, command: string) => {
	if (process.platform === 'darwin') {
		await executePrivilegedDarwin(name, command);
	}

	if (process.platform === 'win32') {
		await executePrivilegedWindows(name, command);
	}

	if (process.platform === 'linux') {
		await executePrivilegedLinux(name, command);
	}

	throw new Error('Unsupported OS');
};

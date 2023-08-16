export const executePrivilegedWindows = async (name: string, command: string) => {
	await Promise.resolve([name, command]);
};

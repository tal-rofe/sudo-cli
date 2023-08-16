export const executePrivilegedLinux = async (name: string, command: string) => {
	await Promise.resolve([name, command]);
};

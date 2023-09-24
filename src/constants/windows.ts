import path from 'node:path';
import os from 'node:os';

export const EXECUTE_COMMAND_SCRIPT_FILE_PATH = path.join(os.tmpdir(), 'sudo-cli', 'execute.bat');

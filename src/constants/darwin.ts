import path from 'node:path';
import os from 'node:os';

export const ASK_PASSWORD_SCRIPT_FILE_PATH = path.join(os.tmpdir(), 'sudo-cli', 'ask-password.sh');

export const ASK_PASSWORD_SCRIPT = [
	'#!/bin/bash',
	'/usr/bin/osascript -e \'display dialog "Please enter your password" default answer "" with title "{name}" with hidden answer\' -e \'text returned of result\'',
].join(os.EOL);

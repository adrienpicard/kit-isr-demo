import fs from 'node:fs';
import path from 'node:path';

const OUTPUT_DIR = '.vercel/output';

console.log('Updating Vercel folder...');

function removeSymlinks(directory) {
	if (!fs.existsSync(directory)) {
		console.log(`Directory ${directory} does not exist.`);
		return;
	}

	const items = fs.readdirSync(directory);

	for (const item of items) {
		const fullPath = path.join(directory, item);
		const stat = fs.lstatSync(fullPath);

		if (stat.isSymbolicLink()) {
			console.log(`Removing symlink: ${fullPath}`);
			fs.unlinkSync(fullPath);
		} else if (stat.isDirectory()) {
			removeSymlinks(fullPath);
		}
	}
}

// Remove all symlinks recursively starting from the output directory
removeSymlinks(OUTPUT_DIR);

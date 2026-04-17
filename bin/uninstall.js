#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');

const claudeDir = path.join(os.homedir(), '.claude');
const soundDest = path.join(claudeDir, 'sounds', 'done.mp3');
const settingsPath = path.join(claudeDir, 'settings.json');

try {
    console.log('Uninstalling Claude Code sound notification...');

    if (fs.existsSync(settingsPath)) {
        const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));

        if (settings.hooks) {
            delete settings.hooks.Stop;
            delete settings.hooks.Notification;
            if (Object.keys(settings.hooks).length === 0) {
                delete settings.hooks;
            }
        }

        fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
        console.log('✅ Hooks removed from ~/.claude/settings.json');
    }

    if (fs.existsSync(soundDest)) {
        fs.unlinkSync(soundDest);
        console.log('✅ Sound file removed from ~/.claude/sounds/');
    }

    console.log('Done. Restart Claude Code to apply.');
} catch (error) {
    console.error('Failed to uninstall:', error.message);
    process.exit(1);
}

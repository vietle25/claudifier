#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');

const soundPath = path.join(__dirname, '../sound/done.mp3');
const settingsPath = path.join(os.homedir(), '.claude', 'settings.json');

const stopCommand = `osascript -e 'display notification "Task Complete" with title "Claude Code"'; afplay "${soundPath}"`;
const notificationCommand = `osascript -e 'display notification "Claude Code needs your attention" with title "Claude Code"'; afplay "${soundPath}"`;

function makeHookEntry(command) {
    return { hooks: [{ type: 'command', command }] };
}

try {
    console.log('Installing Claude Code sound notification...');

    let settings = {};
    if (fs.existsSync(settingsPath)) {
        settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
    }

    if (!settings.hooks) settings.hooks = {};
    settings.hooks.Stop = [makeHookEntry(stopCommand)];
    settings.hooks.Notification = [makeHookEntry(notificationCommand)];

    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
    console.log('✅ Success! Restart Claude Code to activate.');
} catch (error) {
    console.error('Failed to install hook:', error.message);
    process.exit(1);
}

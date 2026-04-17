#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');

const claudeDir = path.join(os.homedir(), '.claude');
const soundsDir = path.join(claudeDir, 'sounds');
const soundDest = path.join(soundsDir, 'done.mp3');
const soundSrc = path.join(__dirname, '../sound/done.mp3');
const settingsPath = path.join(claudeDir, 'settings.json');

const stopCommand = `osascript -e 'display notification "Task Complete" with title "Claude Code"'; afplay "${soundDest}"`;
const notificationCommand = `osascript -e 'display notification "Claude Code needs your attention" with title "Claude Code"'; afplay "${soundDest}"`;

function makeHookEntry(command) {
    return { hooks: [{ type: 'command', command }] };
}

try {
    console.log('Installing Claude Code sound notification...');

    fs.mkdirSync(soundsDir, { recursive: true });
    fs.copyFileSync(soundSrc, soundDest);
    console.log(`✅ Sound copied to ${soundDest}`);

    let settings = {};
    if (fs.existsSync(settingsPath)) {
        settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
    }

    if (!settings.hooks) settings.hooks = {};
    settings.hooks.Stop = [makeHookEntry(stopCommand)];
    settings.hooks.Notification = [makeHookEntry(notificationCommand)];

    fs.writeFileSync(settingsPath, JSON.stringify(settings, null, 2));
    console.log('✅ Hooks configured in ~/.claude/settings.json');
    console.log('🎵 Restart Claude Code to activate notifications!');
} catch (error) {
    console.error('Failed to install:', error.message);
    process.exit(1);
}

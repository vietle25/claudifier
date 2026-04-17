#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

// 1. Get the absolute path of the sound file in the installed package
const soundPath = path.join(__dirname, '../sound/done.mp3');

// 2. The command we want Claude to run
const commandStop = `osascript -e 'display notification \"Task Complete\" with title \"Claude Code\"'; afplay \"${soundPath}\"`;
const commandAttendtion = `osascript -e 'display notification "Claude Code needs your attention" with title "Claude Code"'; afplay \"${soundPath}\"`;

try {
    console.log('Installing Claude Code sound notification...');
    // 3. Use the Claude CLI to set the global hook
    execSync(`claude config set --global hooks.stop "${command}"`, { stdio: 'inherit' });
    execSync(`claude config set --global hooks.notificatoin "${command}"`, { stdio: 'inherit' });
    console.log('✅ Success! Restart Claude Code to activate.');
} catch (error) {
    console.error('Failed to install hook:', error.message);
}

# claudifier

A handy utility that brings seamless sound and visual notifications to the [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) CLI on macOS.

Never miss a beat! When running long tasks, Claude Code will alert you via the macOS Notification Center and play a pleasant chime when a task finishes or whenever Claude needs your attention.

## Features

- 🔔 **Visual Alerts:** Displays a native macOS notification when Claude finishes a task or asks a question.
- 🎵 **Audio Cues:** Plays a sound so you know exactly when to check back on your terminal.
- ⚡ **One Command Setup:** Automatically configures everything on install — no extra steps.

## Prerequisites

- **macOS:** Designed specifically for Mac environments.
- **Claude Code:** The official `claude` CLI must be installed.

## Installation

```bash
npm install -g claudifier
```

That's it. The installer runs automatically and:
1. Copies the sound file to `~/.claude/sounds/done.mp3`
2. Configures `Stop` and `Notification` hooks in `~/.claude/settings.json`

Restart Claude Code to activate.

## Uninstallation

```bash
claudifier-uninstall
npm uninstall -g claudifier
```

This removes the hooks from `~/.claude/settings.json` and the sound file from `~/.claude/sounds/`.

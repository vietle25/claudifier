# claudifier

A handy utility that brings seamless sound and visual notifications to the [Claude Code](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview) CLI on macOS.

Never miss a beat! When running long tasks, Claude Code will now alert you via the macOS Notification Center and play a pleasant chime when a task finishes or whenever Claude needs your attention to proceed.

## Features

- 🔔 **Visual Alerts:** Displays a native macOS notification when Claude finishes a task or asks a question.
- 🎵 **Audio Cues:** Plays a sound so you know exactly when to check back on your terminal.
- ⚡ **Seamless Integration:** Automatically links up with your existing Claude Code installation with a single command.

## Prerequisites

- **macOS:** Designed specifically for Mac environments.
- **Claude Code:** The official `claude` CLI must be installed.

## Installation

Install the package globally using npm:

```bash
npm install -g claudifier
```

## Usage

After installing, simply run the following command once in your terminal:

```bash
claudifier
```

This script will automatically configure your global Claude Code hooks (`hooks.stop` and `hooks.notification`). 

**Note:** You must restart Claude Code for the new hooks to activate!
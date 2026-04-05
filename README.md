# 🤖 Kova — Your AI Team

> Hire your AI team. They work 24/7, never complain, and actually read the docs.

[![npm](https://img.shields.io/npm/v/getkova)](https://www.npmjs.com/package/getkova)
[![npm downloads](https://img.shields.io/npm/dm/getkova)](https://www.npmjs.com/package/getkova)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Kova is a personal AI team that runs on your own machine. Your AI employees
answer you on the channels you already use — Telegram, WhatsApp, Discord,
Slack, and 15+ more. One command starts everything.

## Quick Start

```bash
# Install
npm install -g getkova

# First time setup
kova onboard

# Start your AI team
kova start
```

Your browser opens automatically. Your team is ready.

## Meet Your Team

Kova comes with 6 AI employees out of the box:

| Employee | Role            | Specialty                              |
| -------- | --------------- | -------------------------------------- |
| Alex     | Lead Developer  | Code, architecture, technical problems |
| Casey    | Project Manager | Planning, organization, follow-ups     |
| Jordan   | Researcher      | Web search, analysis, summaries        |
| Max      | Data Analyst    | Numbers, reports, insights             |
| Morgan   | Communications  | Writing, emails, content               |
| Riley    | Assistant       | Scheduling, reminders, general tasks   |

## Supported Channels

Chat with your team through any channel you already use:

**Messaging:** Telegram, WhatsApp, Discord, Slack, Signal, iMessage
**Business:** Microsoft Teams, Google Chat, Mattermost, Nextcloud Talk
**Other:** IRC, Matrix, LINE, Nostr, and more

## Commands

```bash
kova start          # Start gateway and open browser
kova stop           # Stop the gateway
kova status         # Show system health
kova logs           # View gateway logs
kova doctor         # Fix common issues
kova onboard        # Interactive setup wizard
kova update         # Update to latest version
kova dashboard      # Open browser with token
```

## Installation

### Requirements

- Node.js 22 or higher
- macOS, Linux, or Windows (WSL2 recommended)

### Install

```bash
npm install -g getkova
```

### First Time Setup

```bash
# Run the setup wizard
kova onboard

# Or start directly (auto-configures)
kova start
```

### Windows Users

Kova works best on Windows via WSL2:

```powershell
# Install WSL2 (one time)
wsl --install

# Then in WSL terminal:
npm install -g getkova
kova start
```

Native Windows also works — just install Node.js and run the commands above in PowerShell.

## Configuration

Your config lives at `~/.kova/openclaw.json`.

### Set your AI provider

```bash
kova onboard
# Choose your provider: OpenRouter, Anthropic, OpenAI, Gemini, Groq
# Paste your API key
```

### Connect Telegram

```bash
kova onboard
# Choose Telegram
# Paste your bot token from @BotFather
```

## Run as a Service (Auto-start on boot)

```bash
# Install as system service
kova onboard
# Choose "Install Gateway service" → Yes
```

The gateway will start automatically when your machine boots.

## Security

Kova runs locally on your machine. Your data never leaves your computer.

Read the security guide before exposing Kova to the internet:
[docs.kova.ai/security](https://docs.kova.ai/security)

## Updating

```bash
kova update
# Or:
npm install -g getkova@latest
```

## Troubleshooting

```bash
# Health check
kova doctor

# View logs
kova logs

# Full status
kova status --deep
```

More help: [docs.kova.ai/troubleshooting](https://docs.kova.ai/troubleshooting)

## License

MIT — see [LICENSE](LICENSE)

Built with ❤️ by the Kova team.

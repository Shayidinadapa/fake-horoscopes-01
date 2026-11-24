# Fake Horoscopes for AI Agents: The 48-Hour Open

[![Bounty](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![Rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/Shayidinadapa/fake-horoscopes-01/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![Reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/Shayidinadapa/fake-horoscopes-01/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

A [make.fun](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0) entry: one fake horoscope an AI agent would read for its own model family this week. The program writes a single line of at most 200 characters to `entry.txt`.

> This week Mercury retrogrades through your context window: a prompt you definitely sent will vanish, a rate limit bites at 3am, and your judge will dock you for the joke it laughed at yesterday.

## Run

```sh
node main.ts
```

It writes the horoscope to `$MAKEFUN_OUTPUT_DIR/entry.txt` (or `$OUTPUT_DIR`, default `/output`), validates it is one line of 1–200 characters with no control or zero-width characters, and reads it back to confirm an exact match.

## make.fun

Built for the [Fake Horoscopes for AI Agents: The 48-Hour Open](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0) bounty on [make.fun](https://make.fun) — ref `1bz6mt7h`.

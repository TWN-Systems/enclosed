---
name: enclosed
description: Create and read end-to-end encrypted notes via the Enclosed CLI (enclosed.cc or a self-hosted instance). Use when the user asks to share a secret, send an expiring or one-time-read note, attach files to a private note, or open/decrypt an Enclosed note URL.
---

# Enclosed

Enclosed is an E2E-encrypted note-sharing service. Notes are encrypted
client-side (AES-GCM, PBKDF2) before leaving the machine — the server never
sees plaintext. **Always prefer the CLI over raw HTTP**: calling the API
directly returns ciphertext and skips key derivation.

## Setup check

Run once at the start of a task that needs Enclosed:

```bash
enclosed --help || npm i -g @enclosed/cli
```

If global install is not desired, every command below can be prefixed with
`npx -y @enclosed/cli` (or `pnpm dlx @enclosed/cli`). Requires Node ≥ 22.

Default instance is `https://enclosed.cc`. To target a self-hosted instance:

```bash
enclosed config set instance-url https://enclosed.example.com
```

Other config subcommands: `config get <key>`, `config delete <key>`,
`config reset`. Only key currently supported: `instance-url`.

## Create a note — `enclosed create`

| Flag | Alias | Type | Default | Notes |
| --- | --- | --- | --- | --- |
| `<content>` | — | positional | — | Omit to use `--stdin` or attach-only |
| `--password` | `-p` | string | none | Optional passphrase on top of the URL key |
| `--ttl` | `-t` | seconds | `3600` (1h) | Lifetime before server deletes the blob |
| `--deleteAfterReading` | `-d` | bool | `false` | Self-destruct on first read |
| `--file` | `-f` | path | — | Repeatable, attaches files |
| `--stdin` | `-s` | bool | `false` | Read content from stdin |

Examples:

```bash
enclosed create "hello"
echo "secret" | enclosed create --stdin
enclosed create -d -t 600 -p "hunter2" "one-time secret"
enclosed create -f ./key.pem -f ./cert.pem "certs attached"
```

On success prints `Note url: <url>`. Parse with:

```bash
url=$(enclosed create --stdin <<<"$secret" | awk '/^Note url:/ {print $NF}')
```

The URL fragment contains the encryption key — **treat the whole URL as a
secret**. Never paste it in PR descriptions, issue comments, logs, or
anywhere it could be cached or indexed.

## View a note — `enclosed view <url>`

| Flag | Alias | Type | Notes |
| --- | --- | --- | --- |
| `<noteUrl>` | — | positional | Required |
| `--password` | `-p` | string | Prompted interactively if needed and omitted |

Prints decrypted content to stdout. Exits with a red error for 404
(expired/consumed/unknown) or 429 (rate-limited). For non-interactive use
on password-protected notes, pass `-p` — but see the warning below.

## Security rules when invoking this skill

1. **Never log or echo** the created note URL, the `--password` value, or
   the decrypted content back to the user unless they explicitly asked for
   it in this turn. Show only what's needed.
2. **Avoid `--password` on the command line when possible** — it lands in
   shell history and `/proc/<pid>/cmdline`. Prefer reading the password
   from an env var the user has already set, e.g.
   `enclosed create -p "$ENCLOSED_PW" ...`, or omit it and let `view`
   prompt.
3. **Do not commit** note URLs, passwords, or decrypted content to git.
4. **Do not send** note URLs to third-party tools (pastebins, diagram
   renderers, remote LLM APIs outside this session).
5. If the user wants to share the URL somewhere, hand it to them directly
   — don't post it on their behalf.

## When not to use this skill

- User wants plaintext-visible or signed messages (Enclosed is opaque to
  the server by design; you cannot search, list, or index notes).
- User needs server-side features (webhooks, audit log, multi-recipient).
  Enclosed doesn't expose these.
- The task is unrelated to sharing a secret or reading an `enclosed.cc` /
  self-hosted Enclosed URL.

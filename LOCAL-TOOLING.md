# Local engineering tooling

## Runtime

The production and repository runtime is Node.js 22, declared in `package.json`,
`.nvmrc` and `.node-version`. The current Windows PATH exposes Node.js 25.9.0, which can
run the installed tools but produces an intentional engine warning for this application.
Use Node.js 22 for release builds and CI so local and Hostinger behavior match.

Required commands after switching runtimes:

```powershell
npm ci
npm run typecheck
npm test
npm run lint
npm run build
npm audit
```

## Chrome DevTools MCP

The user-level Codex configuration is stored at `C:\Users\Acer\.codex\config.toml`.
It contains a `chrome-devtools` STDIO server using the official
`chrome-devtools-mcp@latest` package and the installed Chrome Stable executable.

The configuration launches a separate headless, temporary profile. It does not attach to
the personal Bisol browser profile. Sensitive network headers are redacted, MCP usage
statistics and CrUX URL sharing are disabled, and the temporary browser profile is removed
when the server exits.

After changing MCP configuration:

1. Restart the Codex desktop app.
2. Open this project again.
3. Use `/mcp verbose` and confirm `chrome-devtools` is enabled.
4. Run a navigation, console/network inspection and performance trace against the local
   production server.

The initial package and Chrome executable checks completed successfully on 2026-08-15.
An already-running Codex task cannot receive newly configured MCP tools until restart.

## Browser QA matrix

Test the homepage, `/apply`, `/intakes`, `/zh`, `/zh/apply` and `/zh/intakes` at:

- 360 × 800 and 390 × 844 touch/mobile viewports;
- 768 × 1024 tablet portrait;
- 1280 × 800 laptop;
- 1440 × 900 desktop;
- 200% browser zoom and keyboard-only navigation.

For the conversion flow, verify cohort handoff, forward/back preservation, native field
errors, Turnstile failure, offline/network retry, rate-limit recovery, success reference,
English/Chinese copy, and the single mobile WhatsApp action.

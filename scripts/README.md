# Local Development Scripts

This directory contains developer-only utilities for safe local workspace management.

## Scripts

### `verify-pipeline-capabilities.js`

Comprehensive local environment verification suite.

**Purpose**: Validate that your development environment has all required tools and capabilities.

**Usage**:
```bash
node scripts/verify-pipeline-capabilities.js [--verbose]
```

**What it tests**:
- ✅ File I/O capabilities (mkdir, write, read, delete)
- ✅ Network tools (`ip`, `getent`, `ping`, `df`, `free`)
- ✅ Development tools (`node`, `npm`, `git`, `tsc`)
- ✅ Build pipeline (`npm lint`, `npm build`)

**Example output**:
```
[14:23:45] ✓ INFO: Testing: Network interface inspection
[14:23:45] ✓ PASS: Network interface inspection
[14:23:45] ✓ INFO: RESULTS: 28/28 passed (100%)
[14:23:45] ✓ INFO: All pipeline capabilities verified! ✨ Ready for development.
```

---

### `apply-local-patch.js`

Safe local workspace patch applicator (developer-only).

**⚠️ IMPORTANT**: This is a **LOCAL-ONLY** utility. It does NOT expose any network endpoints and does NOT automatically push to GitHub.

**Purpose**: Apply code patches safely to your local workspace with automatic build verification and rollback.

**Usage**:
```bash
# Apply patch without git commit
node scripts/apply-local-patch.js patch.json

# Apply patch and auto-commit (if build passes)
node scripts/apply-local-patch.js patch.json --git-commit

# Verbose output
node scripts/apply-local-patch.js patch.json --verbose
```

**Patch file format** (`patch.json`):
```json
{
  "description": "Optional: describe what this patch does",
  "buildVerification": true,
  "files": [
    {
      "path": "src/lib/example.ts",
      "content": "export const greeting = 'Hello World';"
    },
    {
      "path": "README.md",
      "content": "# Example Documentation"
    }
  ]
}
```

**How it works**:
1. ✅ Validates patch file structure
2. ✅ Prevents directory traversal attacks (`path.normalize()` + `startsWith()` checks)
3. ✅ Backs up existing files (non-destructive)
4. ✅ Applies all file changes atomically
5. ✅ Runs `npm run build` to verify compilation
6. ✅ If build fails, automatically reverts all changes
7. ✅ Optionally commits changes to git (only with `--git-commit` flag)

**Example session**:
```bash
$ node scripts/apply-local-patch.js my-patch.json --verbose

╔════════════════════════════════════════════════════════╗
║    LOCAL WORKSPACE PATCH APPLICATOR                    ║
║    (Developer-Only, Non-Network Utility)               ║
╚════════════════════════════════════════════════════════╝

[14:25:30] ℹ INFO: Loading patch file: my-patch.json
[14:25:30] ✓ SUCCESS: Patch validated: 2 file(s)
[14:25:30] ℹ INFO: Description: Add new features
[14:25:31] ✓ SUCCESS: Applied: src/lib/example.ts
[14:25:31] ✓ SUCCESS: Applied: README.md
[14:25:31] ℹ INFO: Running build verification...
[14:25:45] ✓ SUCCESS: Build verification passed

╔════════════════════════════════════════════════════════╗
[14:25:45] ✓ SUCCESS: Patch applied successfully! ✨
╚════════════════════════════════════════════════════════╝

Tip: Use --git-commit flag to auto-commit changes
```

---

## Safety Features

### `apply-local-patch.js` Security

| Feature | Implementation |
|---------|---|
| **Path Validation** | `path.normalize()` + `startsWith(cwd())` prevents directory traversal |
| **Build Verification** | Runs `npm run build` — reverts all changes if build fails |
| **Atomic Writes** | All files written before verification (no partial updates) |
| **Backup** | Automatically backs up existing files before modification |
| **Git Safety** | Git commit only with explicit `--git-commit` flag (default: disabled) |
| **No Network** | 100% local-only, no remote communication |

### `verify-pipeline-capabilities.js` Coverage

- File system operations (read/write/delete)
- All required development binaries (`curl`, `ip`, `getent`, `node`, `npm`, `git`, `tsc`)
- Build pipeline validation
- Network connectivity checks

---

## Workflow Example

### Scenario: Testing a code change locally

1. **Create your patch file**:
   ```bash
   cat > my-changes.json << 'EOF'
   {
     "description": "Add new utility function",
     "buildVerification": true,
     "files": [
       {
         "path": "src/lib/new-util.ts",
         "content": "export function myUtil() { return 'hello'; }"
       }
     ]
   }
   EOF
   ```

2. **Apply and verify**:
   ```bash
   node scripts/apply-local-patch.js my-changes.json --verbose
   ```

3. **If successful**, you can optionally commit:
   ```bash
   node scripts/apply-local-patch.js my-changes.json --git-commit
   ```

4. **If build fails**, changes are automatically reverted — no cleanup needed.

---

## Development Notes

### When to use these tools

- ✅ Testing multiple code changes locally before committing
- ✅ Verifying your development environment setup
- ✅ Applying safe, non-network code patches
- ✅ Catching build errors before pushing to GitHub

### When NOT to use these tools

- ❌ Deploying to production (use GitHub Actions instead)
- ❌ Automatically pushing to remote branches
- ❌ Applying untrusted patches (always review patch content first)
- ❌ Complex multi-repository operations (use git directly)

---

## Troubleshooting

### "Build verification failed"
The patch was valid but your code has compilation errors. Review the error output and fix the issues in your patch file before retrying.

### "Path traversal prevented"
The patch tried to write outside the project root. Review your file paths — they should be relative to the project root (e.g., `src/lib/example.ts`).

### "SAFE_TERMINAL_COMMANDS" error in raw terminal mode
The terminal enforces a whitelist of safe commands to prevent shell injection. Only these are allowed:
```
ls, pwd, whoami, id, date, uname, uptime, free, df, ps, top, cat, grep, echo, head, tail, wc
```

---

## Security & Design Philosophy

These tools follow **zero-network** principles:
- No remote endpoints
- No automatic git pushes
- No external API calls
- No network-exposed configuration
- Build verification is **mandatory** for critical operations
- Safe-by-default (explicit flags required for git operations)

This ensures that all operations remain **under your complete control** on your local machine.

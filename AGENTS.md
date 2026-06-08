# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

**submit50** is a Python CLI for CS50 students to submit assignment files to Harvard's remote grading infrastructure via [lib50](https://github.com/cs50/lib50). There is no local web server, database, or Docker stack — only a single console entry point (`submit50`).

### Services

| Service | Notes |
|---|---|
| **submit50 CLI** | The only in-repo product. Install with `pip install -e .` from the repo root. |
| **Git** | Required on `PATH` for lib50's submission workflow (not a daemon). |
| **submit.cs50.io** | External HTTP API for version checks, announcements, and submission backend. |
| **GitHub / lib50 auth** | Required for end-to-end submission; login is handled by lib50 on first use. |

### Standard commands

See `.github/workflows/main.yml` for the canonical CI smoke test:

```bash
export PATH="$HOME/.local/bin:$PATH"
pip install babel
pip install -e .
submit50 --help
python setup.py compile_catalog
```

Optional release build: `python -m pip install build && python -m build --sdist --wheel --outdir dist/ .`

### Gotchas

- **`~/.local/bin` on PATH**: When using `pip install --user` (default in Cloud Agent VMs), the `submit50` console script lands in `~/.local/bin`. Add it to PATH before running commands.
- **No unit test suite**: CI only smoke-tests `--help` and `compile_catalog`. There is no pytest/unittest runner or linter configured in this repo.
- **End-to-end submission requires credentials**: Running `submit50 <slug>` contacts `submit.cs50.io`, then lib50 connects to GitHub for authenticated push. Without CS50/GitHub credentials, the CLI will fail after the initial remote connection — this is expected in Cloud Agent environments.
- **Babel is dev-only**: Install `babel` separately when working on translations (`extract_messages`, `compile_catalog`, etc.).
- **Python 3.6+**: CI uses Python 3.10; Python 3.12 works in practice.

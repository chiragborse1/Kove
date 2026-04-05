#!/usr/bin/env bash
set -euo pipefail

dry_run=false

if [[ "${1:-}" == "--dry-run" ]]; then
  dry_run=true
  shift
fi

if [[ $# -gt 0 ]]; then
  echo "Usage: $(basename "$0") [--dry-run]" >&2
  exit 2
fi

run_cmd() {
  if $dry_run; then
    printf '[dry-run] %s\n' "$*"
    return 0
  fi
  "$@"
}

worktree_dirty() {
  [[ -n "$(git status --short)" ]]
}

echo "Kova Release Script"

if worktree_dirty; then
  if $dry_run; then
    echo "Warning: worktree is dirty; a real release should start from a clean tree." >&2
  else
    echo "Release aborted: worktree is dirty. Commit or discard changes before releasing." >&2
    exit 1
  fi
fi

echo "Building UI..."
run_cmd pnpm ui:build

echo "Staging UI assets..."
run_cmd git add -f dist/control-ui/
run_cmd git add -u dist/control-ui/

if $dry_run; then
  if git diff --quiet -- dist/control-ui/ && git diff --cached --quiet -- dist/control-ui/; then
    echo "UI assets unchanged, skipping commit"
  else
    printf '[dry-run] FAST_COMMIT=1 scripts/committer "%s" %s\n' \
      "build: update UI assets for release" \
      "dist/control-ui/"
  fi
else
  if git diff --cached --quiet; then
    echo "UI assets unchanged, skipping commit"
  else
    FAST_COMMIT=1 scripts/committer "build: update UI assets for release" dist/control-ui/
  fi
fi

echo "Bumping version..."
run_cmd npm version patch --no-git-tag-version

release_version="$(node -p "require('./package.json').version")"

if $dry_run; then
  printf '[dry-run] FAST_COMMIT=1 scripts/committer "%s" %s\n' \
    "release: ${release_version}" \
    "package.json"
else
  FAST_COMMIT=1 scripts/committer "release: ${release_version}" package.json
fi

echo "Pushing..."
run_cmd git push origin main

# Publishing handled by GitHub Actions (.github/workflows/publish.yml)
echo "Publishing is handled by GitHub Actions (.github/workflows/publish.yml)."
echo "Verify the workflow run, then confirm on npm: https://www.npmjs.com/package/getkova"

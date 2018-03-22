---
title: Add only all unstaged files AND ignore untracked files to commit
slug: add-only-all-unstaged-files-and-ignore-untracked-files-to-commit
---

# Add only all unstaged files AND ignore untracked files to commit

`git add -u`

This is one you may use often. I highly recommend to make this an alias.

```
git config --global alias.stagem 'add -u .'
```
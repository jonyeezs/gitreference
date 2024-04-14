---
title: Your branch and origin have diverged; and can't pull remote
slug: your-branch-and-origin-have-diverged-and-cant-pull-remote
---

# Your branch and origin have diverged; and can't pull remote

Few scenarios that this could happen:

1. Someone has rebased and forced push to remote
2. You have rebase your branch onto something else
3. You've changed your local history through rebase interactive

Firstly check what is different: `git log HEAD..origin/<remotebranch>`

go for `git pull --rebase`

If you have code changes do `git pull --rebase=i`

last resort:
```
git fetch origin
git reset --hard origin/<branchatfault>
```

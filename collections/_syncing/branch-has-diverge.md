---
title: Your branch and origin have diverged; and can't pull remote
slug: your-branch-and-origin-have-diverged-and-cant-pull-remote
---

# Your branch and origin have diverged; and can't pull remote

Firstly check what is different: `git log HEAD..origin/<remotebranch>`

If you don't have any commits to push you can just do a hard reset
```
git fetch origin
git reset --hard origin/<branchatfault>
```

Or if you do have commits you can try rebasing them *(though i haven't come across a scenario and tested it)*

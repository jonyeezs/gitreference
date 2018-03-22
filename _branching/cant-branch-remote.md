---
title: If can't checkout new remote branch
slug: if-cant-checkout-new-remote-branch
---
# If can't checkout new remote branch

You would usually do this after a `git fetch`: `git checkout <remotebranch>`. But if that doesn't work do this:
```
git fetch -p --all
git checkout --track <remote>/<branch>
```
Fetch all remote branches first. The `-p` prunes/removes all stale reference (ie: branches, tags, etc that no longer exist)

_Don't recommend naming your local branch differently from your remote._
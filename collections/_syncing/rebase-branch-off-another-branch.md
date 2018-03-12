---
title: Rebase branch off another branch
slug: rebase-branch-off-another-branch
---

# Rebase branch off another branch

Only do this if you're the only one working on this branch. This will cause some bad syncing for others.

Make sure the branch you wish to rebase off is up-to-date.

```
git checkout <branchToRebaseOff>
git pull origin <branchToRebaseOff>
```

Then checkout your branch and rebase your changes

```
git checkout <branchToRebaseOff> <branchYouAreWorkingOn>
```
---
title: Rebase branch off another branch
slug: rebase-branch-off-another-branch
---

# Rebase branch off another branch

Only do this if you're the only one working on this branch. This will cause some bad syncing for others.

Make sure the branch you wish to rebase off is up-to-date.

```
git checkout <branchYouAreWorkingOn>
git rebase <branchToRebaseOff>
```

If you're using git v2.0. There is a shortcut to rebase off the previous branch you were on.

**-** indicates the previous branch.

```
git checkout <branchToRebaseOff>
git checkout <branchYouAreWorkingOn>
git rebase -
```

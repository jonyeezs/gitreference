---
title: Merge two branches
slug: merge-two-branches
---

# Merge two branches

```
git fetch origin <headbranch>
git checkout <branch>
git merge FETCH_HEAD
# resolve conflicts
git commit
git push origin HEAD
```
`<headbranch>` would be the branch you want to merge into your current (checkout-ed) branch.

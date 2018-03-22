---
title: Merge without the merge commit noise
slug: merge-without-the-merge-commit-noise
---

# Merge without the merge commit noise

```
git checkout <branch>
git pull <remote>/<branch> --ff
```

During this process you can check the diff before the merge: `git diff <branch> <remote>/<branch>`
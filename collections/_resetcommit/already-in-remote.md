---
title: Revert a commit that's already in remote
slug: revert-a-commit-thats-already-in-remote
---

# Revert a commit that's already in remote

```git revert <hash>```

use `-n` if you want to revert more than one commit. This won't push a commit just yet but make changes to your index/staging first, so you can revert multiple hashes into one commit.
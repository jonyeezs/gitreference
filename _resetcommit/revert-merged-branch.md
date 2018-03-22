---
title: Revert a merged branch
slug: revert-a-merged-branch
---

# Revert a merged branch

``git revert -m 1 <merge-commit>``

Run that command on the branch that commit was merged into.

>With ‘-m 1’ we tell git to revert to the first parent of the mergecommit on the master branch. -m 2 would specify to revert to the first parent on the develop branch where the merge came from initially.

_(taken from https://www.christianengvall.se/undo-pushed-merge-git/)_

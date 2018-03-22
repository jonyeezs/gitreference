---
title: Saving
slug: saving
---

# Saving

```git stash save -m 'some message'```
move all commits to stash.

```git stash save -u```
To stash untracked files without staging them.
_Warning, doing this will permanently delete your files if you have any directory/* entries in your gitignore file._

```git stash list```
show list of stashed work

Add `stash@{0}` to specify the exact branch for commands.


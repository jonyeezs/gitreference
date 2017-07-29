---
layout: base
permalink: wiki/stashing/
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

# Show diffs
```git stash show```
Show the changes for recorded in the latest stash as a diff between the stashed state and its original parent.

Can be specified

`-p` parameter will show the actual code diff.

# Pop, Drop, like its hot

```git stash drop```
Drops the latest or can be specified.

```git stash pop```
Applys and drops the stash

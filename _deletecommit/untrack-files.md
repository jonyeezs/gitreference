---
title: Delete untracked files (by stashing)
slug: delete-untracked-files-by-stashing
---

# Delete untracked files (by stashing)

I'm a doofus, sometimes i accidentally clean files i want. To stop making me make mistakes, instead of cleaning them, we'll stash it (like a recycle bin!) and i can go and drop it in the future.

```git stash save --keep-index --include-untracked 'recycle bin'```

I recommend making this an alias. Here's mine: `git config --global alias.trash "git stash save --keep-index --include-untracked 'recycle bin'"`

If you want another alias to trash any current work in the index just remove `--keep-index`

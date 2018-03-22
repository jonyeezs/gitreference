---
title: Reset local repo to match Remote
slug: reset-local-repo-to-match-remote
---

# Reset local repo to match Remote

```
git fetch origin
git reset --hard origin/<branch>
```

If you want to save your current branch's state before doing this (just in case), you can do:

```
git commit -a -m "Saving my work, just in case"
git branch my-saved-work
```

Now your work is saved on the branch "my-saved-work" in case you decide you want it back (or want to look at it later or diff it against your updated branch).
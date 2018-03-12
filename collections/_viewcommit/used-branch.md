---
title: See recently used branches by the last commit (i.e. branches ordered by most recent commit)
slug: see-recently-used-branches-by-the-last-commit-ie-branches-ordered-by-most-recent-commit
---

# See recently used branches by the last commit (i.e. branches ordered by most recent commit)

`git for-each-ref --sort=committerdate refs/heads/ --format='%(HEAD) %(color:cyan)%(refname:short)%(color:reset) - %(color:red)%(objectname:short)%(color:reset) %(contents:subject) | %(color:magenta)%(authorname) (%(color:green)%(committerdate:relative)%(color:reset))'`

Source: http://stackoverflow.com/q/5188320/1391963

best to make this into an alias

```
git config --global alias.recent for-each-ref --sort=committerdate refs/heads/ --format='%(HEAD) %(color:cyan)%(refname:short)%(color:reset) - %(color:red)%(objectname:short)%(color:reset) %(contents:subject) | %(color:magenta)%(authorname) (%(color:green)%(committerdate:relative)%(color:reset))'
```

Change the colors as you wish.

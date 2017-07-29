---
layout: base
permalink: wiki/log/
---

# Find logs with filter
```git log --grep='<pattern>'```
limits to commits whose log message has a line that matches <pattern>

# Find all commits for a file

```git log --follow <filename>```

# Show files involved in the commit

```git log --name-status```

# Show all commits of a range

```git log <previous>..<tillnow>```

you can use this for:

1. **tag names** `v1.1..v1.2`
2. **commit hashes** `0de96..56313`
3. **branches** `feature\me..origin\feature\me`

# See recently used branches by the last commit (i.e. branches ordered by most recent commit)
`git for-each-ref --sort=committerdate refs/heads/ --format='%(HEAD) %(color:cyan)%(refname:short)%(color:reset) - %(color:red)%(objectname:short)%(color:reset) %(contents:subject) | %(color:magenta)%(authorname) (%(color:green)%(committerdate:relative)%(color:reset))'`

Source: http://stackoverflow.com/q/5188320/1391963

best to make this into an alias

# View archived of previous commits' position you have been
Each time a branch is updated to point to a new reference, an entry is written in the reflog to say where you were.

`git reflog`

Here's [a good blog](http://alblue.bandlem.com/2011/05/git-tip-of-week-reflogs.html) to understand better

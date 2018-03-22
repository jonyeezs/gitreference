---
title: Ignore files from the add and commit process
slug: ignore-files-from-the-add-and-commit-process
---

# Ignore files from the add and commit process

A use case i can think of is when you've created a temporary file on the local repo that you have no intention to push but not a point to add to the .gitignore (being the file's nature). Just ignore it so you can safely `git add --all`.

* To ignore: `git update-index --assume-unchanged -- <filepath>`
* To un-ignore: `git update-index --no-assume-unchanged -- <filepath>`

This will ignore the file from showing in your add and commit status.

As this is quite the long command, i recommend getting it into an alias:
```
git config --global alias.ignore 'update-index --assume-unchanged --'
git config --global alias.unignore 'update-index --no-assume-unchanged --'
```

>Git will fail (gracefully) in case it needs to modify this file in the index e.g. when merging in a commit; thus, in case the assumed-untracked file is changed upstream, you will need to handle the situation manually.
---
title: Create a new branch by rebasing off two different branches
slug: create-a-new-branch-by-rebasing-off-two-different-branches
---

# Create a new branch by rebasing off two different branches

There are occasions where the branch you've branched off needs to have its commits rebased off another branch.

It will be a pain to patch all that commits and move it to a new branch.

A trick is to use `rebase --onto`.

* **newstuff** - as the new branch you wish to rebase off. Note: this will become your new working branch.
* **original** - as the old branch your feature was based off.
* **feature** - will be the reference for what `newstuff` HEAD will be rebased off

```
before:
\
 A-B-C original
      \
       D-E-F feature
\
 G-I newstuff

git rebase --onto newstuff original feature

after:
\
 A-B-C original
      \
       D-E-F feature
\
 G-I-D`-E`-F` newstuff
```

You can as well select which commit you want. See the [git documentation for more info](https://git-scm.com/docs/git-rebase).
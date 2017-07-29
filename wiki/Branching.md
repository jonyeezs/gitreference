---
layout: base
permalink: wiki/branching/
---

# If can't checkout new remote branch

You would usually do this after a `git fetch`: `git checkout <remotebranch>`. But if that doesn't work do this:
```
git fetch -p --all
git checkout --track <remote>/<branch>
```
Fetch all remote branches first. The `-p` prunes/removes all stale reference (ie: branches, tags, etc that no longer exist)

_Don't recommend naming your local branch differently from your remote._

# Merge two branches

```
git fetch origin <headbranch>
git checkout <branch>
git merge FETCH_HEAD
# resolve conflicts
git commit
git push origin HEAD
```
`<headbranch>` would be the branch you want to merge into your current (checkout-ed) branch.

# Create a new branch rebasing off two different branches

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

# Create a new branch on local and then push to remote
```
git checkout -b <yourbranchaname>
git push --set-upstream origin <branchname_itshouldbe_calledon_remote>
```
creates you a new branch and checkouts to it locally, then ready to push it out from there on an upstream.

# Create a new branch off an existing branch and push it to remote
```
git checkout -b <newbranch> <branchoff>
git push -u origin <newbranch>
```

# Switch to a branch

```git checkout <branch>``` change to <branch> existing in the local repository

# Delete

```git branch -d <branch>```
Delete <branch> safely. Won't delete if branch has unmerged changes. `-D` if you want to force.

# Show all completely merged branches in current branch

```git branch --merged```

**Note: only works if you have the branches tracked locally**

# Remote branch not up to date with original forked-from branch

You'll most probably see an error, something in the fashion of:

> Branch is behind forked blah blah blah

Follow [these instructions on this link](https://github.com/jonyeezs/gitreference/wiki/Syncing#sync-with-a-forked-branch) before trying to continue with your work

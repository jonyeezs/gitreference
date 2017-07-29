---
layout: base
permalink: wiki/dealing-with-commits/
---

# Git Diff Explained in picture
![](https://github.com/jonyeezs/gitcheat/blob/master/images/gitdiff.png)

Still not sure what index, workspace, etc means? Maybe have a look at the [git transport overview](https://github.com/jonyeezs/gitreference/wiki/Git-Transport-Overview)

# Unstage files that can't be reset

Usually due to the EOL control characters conflicting with remote or something. Google has much to say about this.

Try changing your git config `git config core.filemode false`

Or reload your whole local repo with this:

```
git rm --cached -r .
git reset --hard <remote>/<branch> # eg: git reset --hard origin/master
```

# Ignore files from the add and commit process
to ignore: `git update-index --assume-unchanged -- <filepath>`

to un-ignore: `git update-index --no-assume-unchanged -- <filepath>`

This will ignore the file for changes to show in your add and commit status. If you do a `git add --all`, it won't take account of ignored files.

As this is quite the long command, i recommend getting it into an alias:
```
git config --global alias.ignore 'update-index --assume-unchanged --'
git config --global alias.unignore 'update-index --no-assume-unchanged --'
```

>Git will fail (gracefully) in case it needs to modify this file in the index e.g. when merging in a commit; thus, in case the assumed-untracked file is changed upstream, you will need to handle the situation manually.

# Add only selected files from the a list of other unstaged files (-and more!)
`git add -i`

Use the awesome interactive mode! It has a whole lot more features. It's quite self explanatory but you can [read more about it here!](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging#Staging-and-Unstaging-Files)

# Add only all unstaged files AND ignore untracked files to commit
`git add -u`

# Add a file despite listed in gitignore

Not sure why I'd want to do this. But i cam across a situation where i wanted to add a file from bin. But most cases think why you're doing this. You most probably not need to add ignored files.

`git add --force my/ignore/file.foo`

# Cherry-pick a range

You know how to [cherry-pick](https://www.codementor.io/olatundegaruba/how-to-git-cherry-pick-dyrp9pnmc).

Here's a gotcha you'll need to remember when `git cherry-pick A..B`:

* In the "cherry-pick A..B" form, A should be older than B. If they're the wrong order the command will silently fail.
* Also, this will not cherry-pick A, but rather everything after A up to and including B.
* To include A just type git cherry-pick A^..B

# Being good at updating diff header for `--patch` [e]dit

This should allow you to quickly modify the hunks to select the parts you want.

* If you remove a line that starts with + then subtract one to the new line count (last digit of the hunk’s header).
* If you remove a line that starts with - then add one to the new line count (last digit of the hunk’s header).
* Don’t remove the other lines (reference lines).

# View details of commits in local repo

```git log <remote>/<branch>..HEAD``` eg: git log origin/master..HEAD

# View changes of file in staging

```git diff --staged <filename>```

# Delete commit by reset

```git reset --hard <commit>``` Use this if you don't want to keep that commit changes. Specify the commit as you would with soft.

# Delete untracked files (by stashing)

I'm a doofus, sometimes i accidentally clean files i want. To stop making me make mistakes, instead of cleaning them, we'll stash it (like a recycle bin!) and i can go and drop it in the future.

```git stash save --keep-index --include-untracked 'recycle bin'```

I recommend making this an alias. Here's mine: `git config --global alias.trash "git stash save --keep-index --include-untracked 'recycle bin'"`

If you want another alias to trash any current work in the index just remove `--keep-index`

# Revert a commit that's already in remote

```git revert <hash>```

use `-n` if you want to revert more than one commit. This won't push a commit just yet but make changes to your index/staging first, so you can revert multiple hashes into one commit.

# Revert a merged branch

``git revert -m 1 <merge-commit>``

Run that command on the branch that commit was merged into.

>With ‘-m 1’ we tell git to revert to the first parent of the mergecommit on the master branch. -m 2 would specify to revert to the first parent on the develop branch where the merge came from initially.

_(taken from https://www.christianengvall.se/undo-pushed-merge-git/)_

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

# Reset commits to staging without affecting any current changes in the workspace

```git reset --soft <commit>```

If your commit looks like this:
<pre>
commit asd235
commit fs34ws
</pre>
and you wish to reset asd235, set `<commit>` to fs34ws. Or use `HEAD~1` as hash to reset 1 commit before the head

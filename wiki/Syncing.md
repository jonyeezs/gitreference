---
layout: base
permalink: wiki/syncing/
---

# Merge or Rebase?
![](https://github.com/jonyeezs/gitcheat/blob/master/images/rebase-or-merge.png)

Another pro-tip: If anyone other than you is working on the same branch, best **not** to do a rebase.

# Understanding Merge/Rebase Conflict

If you have diff3-way setup (_if you haven't look [here][threeway]. i highly recommend it_), a merge conflict will usually look like this:

    cauliflower
    <<<<<<< HEAD
    peas
    potatoes
    ||||||| merged common ancestors
    peas
    =======
    >>>>>>> topic
    tomatoes

So here's a relation to the columns of a diff tool i use [Meld][meld]:

Diff view | Meld | What it means
 ---      | --- | ---
 `<<<<<<< HEAD ... ||||||||` | LOCAL | Your local branch file with your own changes
 `||||||| ... =======` | BASE | The file before any of your or the merge changes (common denominator)
 `======= ... >>>>>>>` | REMOTE | The merged branch file with its changes

[meld]: https://github.com/jonyeezs/gitreference/wiki/Getting-your-Git-up#setting-up-your-mergetool-i-use-meld
[threeway]: https://github.com/jonyeezs/gitreference/wiki/Getting-your-Git-up#show-the-common-ancestor-when-git-merge

# Rebase branch off another branch

Only do this if you're the only one working on this branch. This will cause some bad syncing for others.

Make sure the branch you wish to rebase off is up-to-date.

```
git checkout <branchToRebaseOff>
git pull origin <branchToRebaseOff>
```

Then checkout your branch and rebase your changes

```
git checkout <branchToRebaseOff> <branchYouAreWorkingOn>
```

# Push
```git push origin <branch>```

&lt;branch&gt; is your local repository branch name.

If the branch has a different name in the remote repository (eg: remote-branchie) you’d do this with: `git push origin <branch>:remote-branchie`

# Push a commit to another branch

If you're working in a branch and realise you want to move that commit to another branch, here's how:
```git push <remote> <branch with new changes>:<branch you are pushing to> ```

See http://stackoverflow.com/questions/13897717/push-commits-to-another-branch for more information

# Force push with love

```push --force-with-lease```

Here's an in-depth post on why you shouldn't use ```--force```: [link](https://developer.atlassian.com/blog/2015/04/force-with-lease/?utm_source=medium&utm_medium=blog&utm_campaign=lesser-git). It has alot of information (which honestly, I skimmed through at the end).

What we are looking here is doing a force push gracefully, this will reject the force if there has been changes to the remote (branch upstream) in comparison to our local. This ensures we don't delete anyone's commit or compromise the history.

I've included this as an alias in my [.gitconfig](https://gist.github.com/jonyeezs/7ccda28ea28c40dd3fb99e0df0d2e57d)

# Pull using Merge
```
git checkout <branch>
git fetch
git merge <remote>/<branch> --ff
```
Ensure you're on the &lt;branch&gt; you're trying to pull in the new changes from remote.

`--ff` don't want to have more commits if we're just doing a pull.

During this process you can check the diff before the merge: `git diff <branch> <remote>/<branch>`

# Pull with rebase

Only use when:

1. your changes do not deserve a separate branch
3. or when the merge changes are very small

```
git pull --rebase origin <remote>/<branch>
```

# git pull error: 'ref refs/remote/{branchatfault} is at {hash} but expected {hash}'
Happened when someone forced push and upset the balance. Or someone created a branch with the same name but different letter casing.

`git update-ref -d refs/remotes/origin/<branchatfault>` then git status and it should tell you what you need to do.

# Your branch and origin have diverged; and can't pull remote
Firstly check what is different: `git log HEAD..origin/<remotebranch>`

If you don't have any commits to push you can just do a hard reset
```
git fetch origin
git reset --hard origin/<branchatfault>
```

Or if you do have commits you can try rebasing them *(though i haven't come across a scenario and tested it)*

# Sync with a forked branch

This is part sync-ing and part branching information. But to me it's more of a syncing issue.

So you've forked someone's git repo. Their repo is ahead of yours and you need to sync with them.

1. You need to add in a remote link to on your local git config: [click here for more info](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
    * `git remote add upstream <the git url of the original repo>`
2. Now you're ready to sync: [click here for more info](https://help.github.com/articles/syncing-a-fork/)
      * ```
         git fetch upstream
         git merge upstream/master
        ```

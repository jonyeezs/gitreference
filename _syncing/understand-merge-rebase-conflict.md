---
title: Understanding Merge/Rebase Conflict
slug: understanding-mergerebase-conflict
---

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

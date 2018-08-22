---
title: Sync with a forked branch
slug: sync-with-a-forked-branch
---
# Sync with a forked branch

This is part sync-ing and part branching information. But to me it's more of a syncing issue.

So you've forked someone's git repo. Their repo is ahead of yours and you need to sync with them.

1. You need to add in a remote link to on your local git config: [click here for more info](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
    `git remote add upstream <the git url of the original repo>`
1. Switch to the branch you wish to sync with
    ```
       git checkout master
    ```
1. Now you're ready to sync. Detailed [guide here](https://philna.sh/blog/2018/08/21/git-commands-to-keep-a-fork-up-to-date/).
    ```
       git pull upstream master
    ```

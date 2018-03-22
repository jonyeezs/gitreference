---
title: Sync with a forked branch
slug: sync-with-a-forked-branch
---
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

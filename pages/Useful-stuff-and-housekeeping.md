---
layout: page
title: Useful stuff and housekeeping
excerpt: Here to help you keep your repo clean and tidy and some other useful stuff
permalink: /housekeeping
order: 2
---

# Remove all non-existent remote-tracking branch from local
`git fetch --prune`

# Clean-up local branches
Good read here: [clean-up outdated branches in local and remote repositories](http://railsware.com/blog/2014/08/11/git-housekeeping-tutorial-clean-up-outdated-branches-in-local-and-remote-repositories/)

Gist of it, pruning doesn't get rid of local branches that no longer exist on remote. But we just don't want to delete the branches without making sure. Below are steps we can check a branch and see if the branch we want to delete has been merged (ie work taken care of and not lost)

Deleting the merged branches:
```
git checkout <branch_we_want_to_check_what_has_been_merged_into>
git branch --merged
git branch -d <outdatedbranch>
```

Now deal with un-merged by looking at what's un-merged:
```
git branch --no-merged
```

# Cleanup unnecessary files and optimize the local repository
`git-gc`

Runs a number of housekeeping tasks within the current repository, such as compressing file revisions (to reduce disk space and increase performance) and removing unreachable objects which may have been created from prior invocations of git add.

Users are encouraged to run this task on a regular basis within each repository to maintain good disk space utilization and good operating performance.
_(taken straight from the man)_

# If you add by patching and want to know how to manual edit hunks

http://joaquin.windmuller.ca/2011/11/16/selectively-select-changes-to-commit-with-git-or-imma-edit-your-hunk


# Git-hooks

I'm not going to regurgitate what others have posted.

Here's a quick explanation..

## What it is
hooks to run before/after your git commands are executed

## Why is this useful?

* It's good to have sanity checks done automatically before you your code is public.
* Run mundane commands you would do before or after a git command

## How to use it
In your local repository, go to `.git/hooks`. They are just bash files. See [list of available hooks](https://git-scm.com/docs/githooks#_hooks).

Just replace the file or remove the `.sample` extension and rewrite its file.

## Ok I got hooks now. What if i don't want to be crippled by it?

If you still want to have the commands to complete without running the hooks, most commands have a `--no-verify` parameter that you can include to bypass the hooks.

### Some reading materials

* [conceptual explanation](https://www.atlassian.com/git/tutorials/git-hooks/conceptual-overview)
* [http://githooks.com/](http://githooks.com/)
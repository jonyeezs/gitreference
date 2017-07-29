---
layout: base
permalink: wiki/gitk/
---

## What is gitk

[gitk](https://git-scm.com/docs/gitk) is a repository browser that comes installed with git. I choose this as it does what it needs to do: browsing through my repo and I don't have to install new software (i like to keep my tools minimum).

## What does it all mean through an image

_This is taken from [lostechies.com](https://lostechies.com) with a bit of modification. What does numbers represent can be read on the [blog](https://lostechies.com/joshuaflanagan/2010/09/03/use-gitk-to-understand-git/)_
![gitk window](https://github.com/jonyeezs/gitreference/blob/master/images/gitkmain.png)

## Quick tips on how to use it

1. Show everything **-** `gitk --all`
1. Show all branches that matches the given shell glob pattern **-** `gitk --branches=hotfix/*`
1. Show tags (this can be combine with --branches to show the branch _and_ tags) **-** `gitk --tags`
1. After a merge stops with conflicts, show the commits between two branches (i.e. the HEAD and the MERGE_HEAD) that modify the conflicted files **-** `gitk --merge`
1. Show changes since x (where x can be a tag, hash, or branch) **-** `gitk x..`
 1. or a range x..y **-** `gitk x..y`
1. Able to show changes for a directory or path **-** `gitk -- src/assets/etc`

All these commands can be combine to a more complex filtered browse.

## Settings

gitk has its own config file. Path would be at `~/.config/git/gitk`

I haven't really look into all of it before so can really recommend them. But I'll say start with a standardize font and something that is readable to you.

Here are my changes from default:
```
set mainfont {Helvetica 10}
set textfont {Consolas 10}
set uifont {Helvetica 10 bold}
set tabstop 4
set wrapcomment word
```

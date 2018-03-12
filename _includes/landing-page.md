> A reference of tasty tips, getting out of a git pickle and overcoming the road-blocks

I'll cover scenarios that are slightly higher than intermidiate, ie: situations where you'd need to stop, think and stack-overflow. This is a compilation of those useful git things.

If you're here to learn basic git, you won't find it here ([see here instead](http://rogerdudler.github.io/git-guide/)).

Before you navigate ☰ or 🔎 your way, below are few basics (_if you don't know already_) about the terms I'll use in this guide.

## Overview of the different stages in git

![an overview]({{ "/assets/images/git-transport.png" | absolute_url }})

## Common conventions

git index goes by many names but they all refer to the same thing:

* Index
* Cache
* Directory cache
* Current directory cache
* Staging area
* Staged files

`remote/branch` is the name of the remote branch.

If you want to know what the naming convention of your branch is, type in `git branch -r`. You usually wouldn't need to type in `origin/....` Just the remote branch name.

`origin` is an alias on your system for a particular remote repository. It's not actually part of the repository's name.
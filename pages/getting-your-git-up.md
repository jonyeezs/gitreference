---
layout: page
title: Getting Started With Your Git
excerpt: Here's a guide on how to setup your workstation's git environment
permalink: /getting-started
include_sidebar: true
order: 3
---

Here few good stuff to do after installing a fresh Git.
These are base on my preferences.
* Ensure you have your git bin in your environmental variables first.

## Add in your SSH keys - to use SSH clone option

In git bash:

```
mkdir .ssh
ssh-keygen -t rsa -C "your_email@example.com"
# Don't use a passphrase (just press enter)
Enter file in which to save the key (/h//.ssh/id_rsa): /c/Users/<thea>/.ssh/id_rsa
```
Now you should have an rsa public key in your default file location to use.

## Updating the gitconfig

Options below are config changes. You can change them in file.

To find the file: `git config --global --edit` should tell you the exact location no matter what kind of setup you have--just look at what file comes up in your editor.

I'm sharing my [.gitconfig](https://gist.github.com/jonyeezs/7ccda28ea28c40dd3fb99e0df0d2e57d). It has my settings and my aliases.

**NOTE** If you have issues accessing the .gitconfig file, you need to do this:
[Set HOME to the folder](https://stackoverflow.com/questions/4050905/changing-gitconfig-location-on-windows)

## Set your Identity
  ```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
  ```

## Using Atom as your core editor

Install [atom](https://atom.io/) version 1.7 and above.

Preference on this may vary over time. One of the peeves is the load time of atom to just edit something minor.

  ```
git config --global core.editor "atom --wait --safe"
  ```
`--wait` to return to your console when atom closes.

`--safe` will run it in safe-mode ie. not load packages for quicker load-up.

You can test how opening it in atom feels with this command `git config -e`

## Create global gitignore

1. Create the file `atom ~/.gitignore_global` (example using atom editor)
2. Copy the .gitignore from my [gitignore example](https://gist.github.com/jonyeezs/82ce2d65b5817927a03f)
3. Profit with `git config --global core.excludesfile ~/.gitignore_global`

## Posh-git - git for powershell
This is an awesome extension of git for powershell. If you're a powershell user, this is a must!

Have a look to see what it provides: https://github.com/dahlbyk/posh-git

## Show the common ancestor when git merge
This allows you to visually understand the state was before your commit and the remote's commit. This will help you understand the difference.

Have a read of this [blog post](http://psung.blogspot.com.au/2011/02/reducing-merge-headaches-git-meets.html?m=1)

`git config --global merge.conflictstyle diff3`

## Beautify Diffs (git version 2.9 and later)

`git config interactive.diffFilter diff-highlight`

[Read more here](https://github.com/blog/2188-git-2-9-has-been-released#beautiful-diffs)

## Setting up your mergetool. I use [meld](http://meldmerge.org/)

It's good to have meld in your environmental variable so you can just call it from console as well.
 ```
git config --global merge.tool meld
git config --global diff.guitool meld
 ```

### Make alias to open your merge tool
 ```
git config --global alias.mg 'mergetool -y'
 ```

## using meld to do you diffs
 ```
git config --global alias.df 'difftool -y'
 ```

## Beautify your git log

`Git log` is pretty ugly in my opinion. I have iterate a few formats for this, from heaps of information and now I've moved on to something more concise.

If you want to get a nice graph of the branching I'd suggest to just use `gitk` or some other tool you're familiar with.

This setting will get you a quick nice summary of the commits.
```
git log --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

Add an alias to save you the hassle in remember that!:
```
git config --global alias.lg "log --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

And you can add in log options. Here are a few useful ones:

* `--graph`: So you still want to see nice branching graphs
* `-p`: Want to see source changes?
* `--stat`: Want to see source but in summary?
* `--no-merges`: Don't want to see those pesky merge noise.

# Using gitk

[gitk](https://git-scm.com/docs/gitk) is a repository browser that comes installed with git. 

![gitk]({{ "/assets/images/gitkmain.png" | absolute_url }})

I choose this as it does what it needs to do: browsing through my repo and I don't have to install new software (i like to keep my tools minimum).


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
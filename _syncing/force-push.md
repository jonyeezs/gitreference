---
title: Force push with love
slug: force-push-with-love
---
# Force push with love

```push --force-with-lease```

Here's an in-depth post on why you shouldn't use ```--force```: [link](https://developer.atlassian.com/blog/2015/04/force-with-lease/?utm_source=medium&utm_medium=blog&utm_campaign=lesser-git). It has alot of information (which honestly, I skimmed through at the end).

What we are looking here is doing a force push gracefully, this will reject the force if there has been changes to the remote (branch upstream) in comparison to our local. This ensures we don't delete anyone's commit or compromise the history.

I've included this as an alias in my [.gitconfig](https://gist.github.com/jonyeezs/7ccda28ea28c40dd3fb99e0df0d2e57d)
---
layout: page
title: Tagging
excerpt: What and how to Tag
order: 12
---

Not everyone tags or uses it. But I reckon it is useful to manage your software versions and to give a visual indicator of what is in a version.

It's important enough to have its own topic.

# Create a tag
```
git tag -a <tagname> -m '<somedescriptiontext>'
git push --follow-tags
```

Tags aren't automatically moved to remote so we'll have to push it.

**To tag a previous commit** just add the commit hash at the end.

# List tags
```git tag -l```

# List tags and its commit hash

```git show-ref --dereference --tags```

For some reason the correct hash of the commit that was tagged would show the ref with prepend ^{}. for example:
```
7ab7471fa87f4618fb9f9018220202f06e3731b0 refs/tags/0.1
c382b7babd1d920e9254b326a5d8420f69603fc2 refs/tags/0.1^{} <-- This is the actual commit tagged
a634a7bd39270b40fdef59ed6f8f009f8aa02ffb refs/tags/1.0
1efaa11c068a79dab1b0f0b27e67aa814559c9b7 refs/tags/1.0^{} <-- As well as this
```

# Show tag information, commits, description, etc
```git show <tagname>```

# Checkout to a tag

You can’t really check out a tag in Git, since they can’t be moved around.

If you want to put a version of your repository in your working directory, you'll need to create a new branch

```git checkout -b <branch> <tagname>```

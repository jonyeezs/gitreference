---
title: Unstage files that can't be reset
slug: unstage-files-that-cant-be-reset
---

# Unstage files that can't be reset

Usually due to the EOL control characters conflicting with remote or something. Google has much to say about this.

Try changing your git config `git config core.filemode false`

Or reload your whole local repo with this:

```
git rm --cached -r .
git reset --hard <remote>/<branch> # eg: git reset --hard origin/master
```
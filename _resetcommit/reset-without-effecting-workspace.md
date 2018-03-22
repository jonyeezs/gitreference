---
title: Reset commits to staging without affecting any current changes in the workspace
slug: reset-commits-to-staging-without-affecting-any-current-changes-in-the-workspace
---
# Reset commits to staging without affecting any current changes in the workspace

```git reset --soft <commit>```

If your commit looks like this:

<pre>
commit asd235
commit fs34ws
</pre>

and you wish to reset asd235, set `<commit>` to fs34ws. Or use `HEAD~1` as hash to reset 1 commit before the head
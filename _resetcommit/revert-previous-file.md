---
title: Revert a file in the previous commit
slug: revert-a-file-in-the-previous-commit
---

# Revert a file in the previous commit

If you've accidentally committed a file that was wrong and you don't want to revert the entire commit:

```
git reset <commit_with_change>~1 -- <filename>
```

This will reset the file to a staged phase of the commit with change.

Hint: `git log --name-only` if you need to see the file names in the commit history.

Make your changes and commit it. Or if you just need to revert it:

```
git reset HEAD <filename>
git checkout -- <filename>
```

Then commit.

If you need to revert more than 1 file, then I recommend the steps below:

```
git reset --soft <commit_with_change>~1
git add -i

What now> 3 # Choose revert option
```

Then select the files you want to revert and to the same next steps as a single file revert.

When done push your changes, I usually use a rebase workflow so I'd `git push --force-with-lease`.

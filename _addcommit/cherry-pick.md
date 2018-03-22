---
title: Cherry-pick pitfalls
slug: cherry-pick-pitfalls
---

# Cherry-pick pitfalls

You know how to [cherry-pick](https://www.codementor.io/olatundegaruba/how-to-git-cherry-pick-dyrp9pnmc).

Here's a gotcha you'll need to remember when `git cherry-pick A..B`:

* In the "cherry-pick A..B" form, A should be older than B. If they're the wrong order the command will silently fail.
* Also, this will not cherry-pick A, but rather everything after A up to and including B.
* To include A just type git cherry-pick A^..B
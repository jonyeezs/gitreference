---
title: Being good at updating diff header for `add --patch` [e]dit
slug: being-good-at-updating-diff-header-for-add---patch-edit
---

# Being good at updating diff header for `add --patch` [e]dit

This should allow you to quickly modify the hunks to select the parts you want.

* If you remove a line that starts with + then subtract one to the new line count (last digit of the hunk’s header).
* If you remove a line that starts with - then add one to the new line count (last digit of the hunk’s header).
* Don’t remove the other lines (reference lines).
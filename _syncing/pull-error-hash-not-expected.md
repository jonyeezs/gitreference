---
title: git pull error ref is at ... but expected ...
slug: git-pull-error-ref-refsremotebranchatfault-is-at-hash-but-expected-hash
---

# git pull error: 'ref refs/remote/{branchatfault} is at {hash} but expected {hash}'
Happened when someone forced push and upset the balance. Or someone created a branch with the same name but different letter casing.

`git update-ref -d refs/remotes/origin/<branchatfault>` then git status and it should tell you what you need to do.

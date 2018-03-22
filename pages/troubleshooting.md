---
layout: page
title: Troubleshooting buggy commits
excerpt: How to use bisect to find broken commits
permalink: /git-bisect
order: 3
---

Ever had a broken branch and the problem wasn't the last commit?

Someone pushed a buggy commit awhile back and its now a needle in a hay-stack?

git-bisect to the rescue 🎉! 

```
                  | git bisect start |
                            |
                            V
               | git bisect good <commit> | ~ where <commit> is last known working
                            |
                            V
              | git bisect bad <commit> | ~ where <commit> is the known failing
                            |
                            V
                  ( is workspace working? )  <___________________
                            |                                    \
                            |                                     \
                            V                                      \      
                           / \                                      ^
| git bisect good |<--Yes /   \ No-->| git bisect bad |             | No                 
         |                \   /           |                        / \                
          \                \./            |      ( see msg [...is the first bad commit]? )  
           \                              |             /          \ /             |    
            \_____________________________V____________/            | Yes          | I messed up
                                                                    V              |
                                                           | git bisect reset |  <~'reset and do again
```

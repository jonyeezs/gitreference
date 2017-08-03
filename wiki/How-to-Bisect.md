---
layout: base
permalink: wiki/how-to-bisect/
---

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

# lib-static website docs

## Content Collections

Most content on the site is Markdown stubs in [Jekyll collections](https://jekyllrb.com/docs/collections/).
These are grouped in the folder "content".
Inside are three collections:

- "_community" - describe pathways, social stacks, discussion forums, 
- "_concepts" - describe 
- "_projects" - describe static web projects 

Every markdown stub requires Jekyll yaml front matter. 
At a minium all stubs should have:

```
---
title: <the title of the content>
contributor: <who wrote the content>
updated: <yyyy-mm-dd>
type: <content category>
---
```

All collection content is treated more or less the same, as a bunch of data of text entries that can be browsed through various entry points.
All collection content is output as it's own page, with nav referencing the section it is in. 

Multi-value fields are delimited using semicolon `;`.

## Contributors

Author contributors should be listed in "_data/contributors.csv".
If they are, you can use `@` in `author` front matter fields to all in their information and create a link to their author page / github profile.

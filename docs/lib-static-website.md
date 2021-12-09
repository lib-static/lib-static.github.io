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
All collection content is output as it's own page, with nav referencing the section it is in based on its location in one of the collections. 
The values `title` and `type` are used in many places to represent and filter content in browsing/navigation features. 

Details of supported front matter values:

### title (required)

Will become the h1 and title of the page, and displayed everywhere as main link to content.

### type (strongly suggested)

The sub-category of content within the collection. 
Type is displayed in many places and used for filtering.
Please choose from the controlled vocabs of each collection for best results.

- Community types: contribute; social stack; pathways
- Concept types: concepts
- Project types: Digital Collection; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; Screwing-Around

### contributor (optional, but suggested)

Who wrote or contributed to this bit of content (i.e. not necessarily of the author of the project, but the person contributing this listing). 
Contributor will be displayed on content page as "contributor".

Separate multiple contributors using a semicolon `;`.

Contributors can be listed in "_data/contributors.csv".
If they are, you can use `@` in `contributor` front matter fields to add their information and link from the data.

###  updated (strongly suggested)

Will be displayed as "last update" on content pages.
Since all tech things age quickly, we encourage everything to be dated.
It is treated as a string field, but please use iso format yyyy-mm-dd.

### project_link (optional)

### project_repository (optional)

### project_documentation (optional)

### project_creators (option)

### image (optional)

### image_alt (optional)

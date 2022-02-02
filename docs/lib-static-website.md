# lib-static website docs

## Content Collections

Most content on the site is Markdown stubs in [Jekyll collections](https://jekyllrb.com/docs/collections/).
These are grouped in the folder "content".
Inside are three collections:

- "_community" - describe pathways, social stacks, discussion forums, 
- "_concepts" - describe 
- "_projects" - describe static web projects 

## Content Front Matter 

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
- Project types: Models Of (Projects);Models For (Frameworks & Templates)

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

### description (optional)

A very short description of the content or project, one or two sentences.
Displays as lead text on content pages.

### project_link (optional)

A URL to the project's main page.

### project_repository (optional)

A URL to the project's code repository (GitHub or where ever).

### project_documentation (optional)

A URL to the project's documentation site.

### project_creators (optional)

Who are the creators, collaborators, maintainers and/or organizations associated with this project.

Separate multiple contributors using a semicolon `;`.

Contributors can be listed in "_data/contributors.csv".
If they are, you can use `@` in `contributor` front matter fields to add their information and link from the data.

### project_genre (optional)

A general type of the project.
Preferably choose from these options:

Digital Collection; Digital Exhibit; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; Screwing-Around

### image (optional)

A URL to an image to represent the project. 
This can often be a screenshot or logo.
Use a full URL or relative path within this repository.

### image_alt (optional, required if using image option)

A description of the image listed in the "image" value. 

### ignore (optional)

If set to `true`, the stub will be ignored and not added to any navigation or features.
The individual content page will still be built, however, it will not be automatically accessible from anywhere.

--------

## Markdown Content

All stubs should have some content written in Markdown in the body of the file.
What you write is pretty open! 
In general, try to keep the content fairly simple Markdown to enable migration / interoperability. 

Expected contents are different depending on the section and type of content.

For items in "projects" the content should cover:

- What the project does / description
- Why the project was created
- How it uses lib-static approach
- Some examples if applicable

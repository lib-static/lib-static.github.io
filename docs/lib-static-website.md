# Lib-Static website docs

## Content Collections

Most content on the site is Markdown stubs in [Jekyll collections](https://jekyllrb.com/docs/collections/).
These are grouped in the folder "content".
Inside are three collections:

- "_community" - describe ways to get in touch, social stacks, and thought pieces. 
- "_concepts" - describe key static web concepts in clear short pieces that can serve as a useful reference point for the ecosystem.
- "_models" - describe static web projects and tools. These can be examples of projects using a static web approach (Models Of), or project that are templates / tools / frameworks for creating static web projects (Models For). These listings should be Lib-Static related in an extended sense (i.e. static web solutions in GLAM context) and not just a generalized listing of static web tools. This section should be the bulk and highlight of the site content.

### Collection Content Front Matter 

Inside the collections, content is written in Markdown stubs all following the same basic template.

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
The values `title`, `type`, and `description` are used in many places to represent and filter content in browsing/navigation features. 

The values starting with `project_` are only used for content in the Models section.

Details of supported front matter values:

#### title (required)

Will become the h1 and title of the page, and displayed everywhere as main link to content.

#### type (strongly suggested)

The sub-category of content within the collection. 
Type is displayed in many places and used for filtering the items.
Use only one, using title case.

Please choose from the controlled vocabs of each collection for best results.

- Community types: Contribute; Social Stack; Pathways (community section is a bit open to different types).
- Concept types: Concepts
- Project types: Models Of; Models For; Tools

#### contributor (optional, but suggested)

Who wrote or contributed to this bit of content (i.e. not the author of the project, but the person contributing this listing). 
Contributor will be displayed at the bottom of the content pages as "contributor".

Separate multiple contributors using a semicolon `;`.

Regular contributors to the Lib-Static site can be listed in "_data/contributors.csv".
If they are, you can use `@` in `contributor` front matter fields to add their information and link from the data.
Put quotes around any field that contains `@`, for example `contributor: "@chrisdaaz"`.
Contributors listed using `@` will be looked up in the "contributors.csv" to provide an affiliation and link to their website. 

Contributors that are not `@` mentioned are treated as plain text, so you can optionally provide more information such as affiliations.

####  updated (strongly suggested)

Will be displayed as "last update" on content pages.
Since all tech things age quickly, we encourage everything to be dated.
It is treated as a string field, but please use iso format yyyy-mm-dd.

#### description (optional, but suggested)

A very short description of the content or project, one or two sentences.
Displays as lead text on content pages, and as card text on browsing pages.

#### project_link (optional)

A URL to the project's main page.
Will be displayed as a link button.

#### project_repository (optional)

A URL to the project's code repository (GitHub or where ever).
Will be displayed as a link button.

#### project_documentation (optional)

A URL to the project's documentation site.
Will be displayed as a link button.

#### project_creators (optional)

Who are the creators, collaborators, maintainers and/or organizations associated with this project.

Separate multiple contributors using a semicolon `;`.

Regular contributors to the Lib-Static site can be listed in "_data/contributors.csv".
If they are, you can use `@` in `contributor` front matter fields to add their information and link from the data.
Put quotes around any field that contains `@`, for example `contributor: "@chrisdaaz"`.
Contributors listed using `@` will be looked up in the "contributors.csv" to provide an affiliation and link to their website. 

Contributors that are not `@` mentioned are treated as plain text, so you can optionally provide more information such as affiliations.

#### project_genre (optional)

A general type of the project.
Preferably choose from these options:

Digital Collection; Digital Exhibit; Institutional Repository; Research Guide; Qualitative Data Analysis; Oral History; Library Website; Critical Edition; OER; Screwing-Around; Utility

#### image (optional)

A URL to an image to represent the project or concept.
This can often be a screenshot or logo.
It will be displayed at the top of the content, below the title and description.
Some browsing pages will also feature the image in item cards.

Use a full URL, e.g. `image: https://www.lib.uidaho.edu/media/images/ui_library_horizontal.png`

or relative path within this repository starting with a `/`, e.g. `image: /images/forme.png`

Media for content is generally added to the "images" folder of the project repository.

Please consider the image file size to make it a reasonable web friendly size--these should not be large, full quality images!

Images can also be included in the Markdown content.

#### image_alt (optional, required if using image option)

A description of the image listed in the "image" value.
Please describe the content of the image for accessibility.

#### ignore (optional)

If set to `true`, the stub will be ignored and not added to any navigation or features.
The individual content page will still be built, however, it will not be added to any browsing features or nav (i.e. you could still link to the page from other content if desired, but it is hidden in nav).

--------

### Markdown Content

All stubs should have some content written in Markdown in the body of the file.
What you write is pretty open! 
In general, try to keep the content fairly simple Markdown to enable migration / interoperability. 

Keep in mind that the `title` value will be displayed on the content pages as H1, and `description` value will be display as a "lead" paragraph slightly separate from the content.
Markdown content should start with a paragraph or with a H2 heading (`##`).

Expected contents are different depending on the section and type of content.

For items in "Models" the content should cover:

- What the project does / description
- Why the project was created
- How it uses Lib-Static approach
- Some examples if applicable
- Links to further resources or literature if applicable

For items in "Concepts" the content should cover:

- Brief summary / definition of the concept
- Why it is important to Lib-Static
- Links to further resources, tutorials, information

For items in "Community" the contents are pretty wide open!

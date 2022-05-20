---
title: Static Site Generators
contributor: "@evanwill"
updated: 2021-08-04
type: Concepts
---

*Static Site Generators* are software tools that bundle together a stack of web development packages used to transform a directory of source code into a complete static website (i.e. a folder of HTML, CSS, JSON, and JavaScript files).

These tools give you some of the power of a content management system, without all the infrastructure overhead. 
Static site generators can be installed and used on your local computer, and typically feature: 

- a command line interface (not GUI software).
- a builtin development server (test your site on your computer). 
- simplified markup based content (e.g. write in Markdown).
- web templating language (build a site from modular components pulled together with basic logic, e.g. Liquid).
- CSS preprocessor (e.g. Sass).
- file-based data options (create content from CSVs or JSON).
- plugin extensibility (add new functionality).

With growing interest in static web approaches hundreds of generators have sprung onto the scene--browse lists at [Jamstack Site Generators](https://jamstack.org/generators/){:target="_blank" rel="noopener"} and [Static Site Generators](https://staticsitegenerators.net/){:target="_blank" rel="noopener"}.
Some of the most popular and mature include [Jekyll](https://jekyllrb.com/), [Hugo](https://gohugo.io/), [Gatsby](http://gatsbyjs.org/), and [Eleventy](https://11ty.dev/).
Options include general purpose generators or tools built around specific JS frameworks such as Vue or React.

If you are familiar with using CMS such as WordPress or Drupal (or in the DH world Scalar, Omeka, Islandora, CONTENTdm), one thing you may have noticed is missing from the static generator workflow is some sort of GUI web-based Admin interface.
There isn't content management systems or digital asset management system or other type of dynamic web application installed on a server that you might be used to seeing in the context of building websites.

Static generator projects are literally a folder of plaintext files.
The generator is used via command line options on your local computer or run via online build services to output a complete static site.

For Lib-Static, using static site generators allows users to create reusable, data-driven templates consisting of modular chunks of HTML, CSS, and JavaScript.
The tools bundled in the generator make it easier to write these components, and to keep the data, content, and presentation layers cleanly separated.
This organization helps ensure the source code can be reused by others, and the investment in content and data can be preserved for the future and migrated to other platforms.

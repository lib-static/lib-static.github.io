---
title: "Content and Metadata"
contributor: "@chrisdaaz"
updated: 2021-08-04
type: concept
---

Lib-static projects use [plain text](/concepts/plaintext/), human-readable documents for content and metadata. Static site generators can consume and format these documents --to HTML, JSON, PDF, etc.-- however we like; but more importantly, plain text read with any text editor on just about any machine, now and in the future.

> Plain text files have been around since the electronic typewriter. The longevity of this standard inherently makes plain text more sustainable and stable than proprietary formats. While files produced even ten years ago in Microsoft Word and Apple’s Pages can cause significant problems when opened with the latest version, it is still possible to open a file written in any number of “dead” plain text editors from the past several decades: AlphaPlus, Perfect Writer, Text Wizard, Spellbinder, WordStar, or Isaac Asimov’s favorite SCRIPSIT 2.0, made by Radio Shack. Writing in plain text guarantees that your files will remain readable ten, fifteen, twenty years from now. --Tenen & Wythoff

Lib-static utilities and practices revolve around two specific plain text formats: Markdown and YAML.

### Content = Markdown

[Markdown](https://en.wikipedia.org/wiki/Markdown) is a [markup language](https://en.wikipedia.org/wiki/Markup_language) for tagging semantic elements within textual documents. As an alternative to [TeX](https://en.wikipedia.org/wiki/TeX) or [XML](https://en.wikipedia.org/wiki/XML)-based schemas, Markdown was designed to be easy-to-read and easy-to-write:

> A Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. – [John Gruber](https://daringfireball.net/projects/markdown/syntax#philosophy)

Early versions of Markdown targeted HTML as an output format. Most HTML elements --headings, paragraphs, emphasis, images, lists, links, etc.-- have Markdown equivalents. Some markup processing software, like Pandoc, use Markdown as lingua franca between [many other markup languages and document formats](https://pandoc.org/). Markdown files use `.md` or `.markdown` for file extensions.

### Metadata = YAML

[YAML](https://en.wikipedia.org/wiki/YAML) is a data-serialization language. Like Markdown, it was designed to be human-readable and human-writable. YAML shares the same fundamental paradigm as bibliographic metadata: the [key-value pair](https://en.wikipedia.org/wiki/Name%E2%80%93value_pair). We define a common set of keys --title, author, description, etc.-- for a project, then assign those keys different values for each item within the project. YAML uses colons to separate keys from values:

```yaml
title: Beloved
contributor: Toni Morrison
publisher: Alfred A. Knopf
updated: 1987
dewey_decimal: 813.54
language: English
```

Markdown is to HTML as YAML is to JSON. YAML is intended to simplify the writing and editing of data formats, like JSON and XML. In Lib-static projects, YAML is used by static site generators to provide description and administrative (i.e. configuration) metadata about a website or a web page. YAML files use `.yml` or `.yaml` file extensions.

### Markdown and YAML in Practice

There are a few ways to organize Markdown and YAML content within a Lib-static project. The most basic approach is to store YAML front-matter *at the top* of a Markdown file. Let's example the following document we'll name `article.md`:

```
---
title: "My article"
---

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

The YAML content is sandwiched between the three hyphens `---` at the beginning and end of the YAML *block*. The only YAML data we have is `title` of the article. The Markdown formatted body content of the article (i.e. the full-text) follows the second set of hyphens. 

More complex projects might need to separate the YAML data from the Markdown content. This is especially helpful when trying to keep files small; it can be unpleasant to scroll through many, many lines of YAML before getting to the Markdown section of the file. In these situations, static site generators provide convensions for storing YAML data in or more more YAML files within a specific subfolder of the project. For example, Jekyll provides a [`_data`](https://jekyllrb.com/docs/datafiles/) folder for storing YAML, JSON, CSV files. Similarly, [Quire](https://quire.getty.edu/) projects use standalone YAML files for website configurations, publication metadata, and bibliographic references.

***

**Suggested resources:**

- "[Sustainable Authorship in Plain Text using Pandoc and Markdown](https://doi.org/10.46430/phen0041)" by Dennis Tenen and Grant Wythoff in _The Programming Historian_. 
- [Markdown Tutorial (using the CommonMark specification)](https://commonmark.org/help/tutorial/).
- [YAML in one video](https://youtu.be/cdLNKUoMc6c)

***
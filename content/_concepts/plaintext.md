---
title: Plain Text
contributor: "@evanwill"
updated: 2021-08-04
type: concept
---

***tl;dr***

- Plain text files are a simple, sustainable format to store your project data
- Plain text based workflows and outputs enable [version control](/concepts/version-control), [data transformation](/concepts/data), [access, and preservation](https://lib-static.onrender.com/concepts/publicationpreservation)

You might see the term plaintext, plain-text, or plain text sprinkled about in static web ecosystems. At the heart of Lib-STATIC projects is "source code", the raw material that will transformed into published outputs and preserved for future reuse--and the core of that source will be plaintext files. The exact meaning of "plain text" is loose, but the most important concept in this context is the distinction between *plain text files* vs. *binary files*.

### Text vs. Binary

All computer files are a collection of stored digital data. At a fundamental level they are made up of *bits* (a binary digit, i.e. `0` or `1`) grouped into *bytes* (8 bits that are used together). Historically a byte was just the right amount of data to encode a text character.

Generally, there is a distinction between two broad types of computer files: **text** or **binary**.

**Plain text files** contain a series of digital codes intended to represent text characters organized in lines (e.g. `a`, `B`, space, tab, line breaks, etc.). The [Unicode standard](https://www.unicode.org/) defines "plain text" as "a pure sequence of character codes", i.e. *all* the bytes that are part of the file represent characters (following some encoding standard). Text files can opened with a text editor (such as [Notepad++](https://notepad-plus-plus.org/), [Atom](https://atom.io/), or [VS Code](https://code.visualstudio.com/)) to view the characters.

Keep in mind the characters contained in the file might represent anything--from a poem to Python code! Common plain text files include `.txt` (*really* plain text), Markup languages (such as Markdown `.md`, HTML `.html`, or XML `.xml`), and programming languages (such as Python `.py`, Ruby `.rb`, or JavaScript `.js`). The contents of the files will follow the syntax and conventions of the format/language, but all content is ultimately made up of *only* text characters.

**Binary files** contain bits that are *NOT* character codes. The bits represent data that is meant to be interpreted as something other than characters. Binary files require software (other than a text editor) that can correctly interpret the contents to be useable.

For example, a JPG image requires an image viewer, MP3 sound file an audio player, PDF a viewer, or a ZIP compressed folder an unzip utility.
Some binary formats are openly licensed standards. However, others are [proprietary formats](https://en.wikipedia.org/wiki/Proprietary_software) linked to a specific software ecosystem or vendor, which can present challenges for equitable access and long term preservation.  

### Why Should You Care?

Plain text is a simple, sustainable format to store your project data. Plain text based workflows enable:

- detailed version control
- flexible data transformations
- accessibility to more users
- preservable for future reuse
- use of open formats to remove barriers to adoption

contrast between a CSV and XLSX.
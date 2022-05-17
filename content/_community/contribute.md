---
title: Contribute to Lib-Static
#contributor: "@evanwill"
updated: 2021-12-03
type: Contribute
description: We welcome you to get involved! There are many ways to contribute to Lib-Static, from writing content to listing your Model to simply sharing out the site.
---

To contribute to this web site feel free to open a [GitHub Issue](https://github.com/lib-static/lib-static.github.io/issues) or Pull Request at the [lib-static.github.io repository](https://github.com/lib-static/lib-static.github.io), or [get in touch via other channels]({{ '/community/contact/' | relative_url }}).
We are always looking for:

- Edits, updates, fixes for content and listings.
- Listings, tips, or requests for new projects, tools, and concepts.
- Content writing, thought pieces, ideas that should be shared here.
- New technical or artistic features.
- *Your thoughts in general!*

Please check our project [Code of Conduct](https://github.com/lib-static/lib-static.github.io/blob/main/CODE_OF_CONDUCT.md).

## Content Types

The site content is broken in three main groups:

- "community" - describe ways to get in touch, social stacks, and thought pieces. 
- "concepts" - describe key static web concepts in clear short pieces that can serve as a useful reference point for the ecosystem.
- "models" - describe static web projects and tools. These can be examples of projects using a static web approach (Models Of), or project that are templates / tools / frameworks for creating static web projects (Models For). These listings should be Lib-Static related in an extended sense (i.e. static web solutions in GLAM context) and not just a generalized listing of static web tools. This section should be the bulk and highlight of the site content.

Check our [website docs](https://github.com/lib-static/lib-static.github.io/blob/main/docs/lib-static-website.md) for information about the format for content. 
Every piece of content on the site is a Markdown stub using the same basic template.

## Current Contributors

{% assign people = site.data.contributors | sort: 'last_name' %}
{% for person in people %}
- {% if person.link %}<a href="{{ person.link }}" target="_blank" rel="noopener">{{ person.first_name }} {{ person.last_name }}</a>{% else %}{{ person.first_name }} {{ person.last_name }}{% endif %}{% if person.affiliation %} ({{ person.affiliation }}){% endif %}{% endfor %}

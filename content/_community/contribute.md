---
title: Contribute to Lib-Static
#contributor: "@evanwill"
updated: 2021-12-03
type: Contribute
description: We welcome you to get involved! There are many ways to contribute to Lib-Static, from writing content to listing your Model to simply sharing out the site.
---

To contribute to the web site feel free to open a [GitHub Issue](https://github.com/lib-static/lib-static.github.io/issues) or Pull Request, or [get in touch via other channels]({{ '/community/contact/' | relative_url }}).
We are always looking for:

- Edits, updates, fixes for content and listings.
- Listings, tips, or requests for new projects, tools, and concepts.
- Content writing, thought pieces, ideas that should be shared here.
- New technical or artistic features.

Check our [website docs](docs/lib-static-website.md) for information about the format for content. Every piece of content on the site is a Markdown stub using the same basic template.

Please check our project [Code of Conduct](CODE_OF_CONDUCT.md).

## Current Contributors

{% assign people = site.data.contributors | sort: 'last_name' %}
{% for person in people %}
- {% if person.link %}<a href="{{ person.link }}" target="_blank" rel="noopener">{{ person.first_name }} {{ person.last_name }}</a>{% else %}{{ person.first_name }} {{ person.last_name }}{% endif %}{% if person.affiliation %} ({{ person.affiliation }}){% endif %}{% endfor %}

---
title: Contribute to lib-static
author: "@evanwill"
date: 2021-12-03
type: contribute
---

How to contribute to this site

we invite contributions via github pr or email.
types of contributions:

- edits and updates to content
- new projects, tools, concepts, paths, social stacks
- technical features

## Current Contributors

{% for c in site.data.contributors %}
- {{ c.first_name }} {{ c.last_name }} {% if c.github_name %}([{{ c.github_name }}](https://github.com/{{ c.github_name }})){% endif %}{% endfor %}

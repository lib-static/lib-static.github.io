---
layout: page
title: Static Concepts
permalink: paths/
---
{:.my-5}
# Paths

{% for c in site.posts %}
{:.my-3}
## [{{c.title}}]({{c.url | relative_link}})



{% endfor %}

---
layout: page
title: Static Concepts
permalink: concepts.html
---
{:.my-5}
# Static Concepts

{% for c in site.concepts %}
{:.my-3}
## [{{c.title}}]({{c.url | relative_link}})



{% endfor %}

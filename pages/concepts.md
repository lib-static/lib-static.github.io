---
layout: page
title: Static Concepts
permalink: concepts.html
---
{:.my-5}
# Static Concepts

{% for c in site.static_concepts %}

## {{c.title}}

{{c.content}}

{% endfor %}

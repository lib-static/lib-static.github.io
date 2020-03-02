---
title: Browse Tools
layout: feature
permalink: /projects/
divider: development-state
# see _data/config-browse.csv for display options
# the Browse visualization will be added below the content in this file
---

## Lib-STATIC Projects 

Below you can find a list of projects that were built using Lib-STATIC principles.  

{% for p in site.projects %}
{:.col-md-3 .float-right .m-3}
![{{p.images[0].caption}}]({{p.images[0].filelocation}} "{{p.images[0].caption}}")

## [{{p.title}}]({{p.objectid | prepend: '/projects/' | relative_url}})

{{p.description}}

***

{% endfor %}
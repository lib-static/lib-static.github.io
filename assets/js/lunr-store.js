---
# create lunr store 
---
var store = [ 
    {% assign content_pages = site.html_pages | where_exp: 'p','p.searchable != false' %}
    {% for item in content_pages %}
    { 
        "url": {{ item.url | relative_url | jsonify }},
        "title": {{ item.title | jsonify }},
        "text": {{ item.content | strip_html | normalize_whitespace | jsonify }}
    },
    {%- endfor -%}
    {% for item in site.documents %}
    { 
        "url": {{ item.url | relative_url | jsonify }},
        "title": {{ item.title | jsonify }},
        "text": {{ item.content | strip_html | normalize_whitespace | jsonify }}
    }{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
];

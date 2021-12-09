---
title: Static Web Concepts
nav: Concepts
nav_order: 3
section: Concepts
foot: js/masonry.html
---

Curated descriptions of the concepts that power modern static web development.

<div class="row" data-masonry='{"percentPosition": true }'>
    {% for i in site.concepts %}
    <div class="col-sm-6">
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title"><a href="{{ i.url | relative_url }}">{{ i.title }}</a></h5>
                <p class="card-text">{{ i.content | strip_html | truncatewords: 25 }}</p>
            </div>
        </div>
    </div>
    {% endfor %}
</div>

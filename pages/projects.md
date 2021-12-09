---
title: Projects
nav: Projects
nav_order: 2
section: Projects
foot: js/masonry.html
---

projects include unique digital scholarship and digital collection initiatives, as well as applications and templates designed to create lib-static powered projects.

<div class="row" data-masonry='{"percentPosition": true }'>
    {% for i in site.projects %}
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

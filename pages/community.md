---
title: Community
nav: Community
nav_order: 4
section: Community
foot: js/masonry.html
---

lib-static acknowledges that infrastructure isn't about technology, it is about people in context--> labor, learning, empowerment, and collaboration.
lib-static seeks to build a community of practice, from people just starting one project to whole libraries rebuilding their web properties, to improve communication and create sustainable networks of support.
This section shares experiences of people who have already adopted lib-static methods in a variety of contexts to demonstrate real pathways and social stacks that can make it happen.

links: contribute.md, discuss.md

<div class="row" data-masonry='{"percentPosition": true }'>
    {% for i in site.community %}
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

---
title: Community
nav: Community
nav_order: 4
section: Community
foot: js/masonry.html
---

Lib-Static acknowledges that infrastructure isn't about technology, it is about people in context--> labor, learning, empowerment, and collaboration.
Lib-Static seeks to build a community of practice, be they people just starting one project or whole libraries rebuilding their web properties, to improve communication and create sustainable networks of support.

<a href="/community/contact/" class="btn btn-lg btn-success m-2">Get in Touch and Discuss</a>
<a href="/community/contribute/" class="btn btn-lg btn-primary m-2">How to Contribute</a>

<div class="row" data-masonry='{"percentPosition": true }'>
    {% assign community = site.community | where_exp: 'i','i.ignore != true' %}
    {% for i in community %}
    <div class="col-sm-6">
        <div class="card mb-3 border-{% cycle 'primary', 'success', 'danger', 'warning', 'info', 'dark' %}">
            <div class="card-body">
                <h5 class="card-title"><a href="{{ i.url | relative_url }}">{{ i.title }}</a></h5>
                <p class="card-text">{{ i.content | strip_html | truncatewords: 25 }}</p>
            </div>
        </div>
    </div>
    {% endfor %}
</div>

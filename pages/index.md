---
title: lib-static
layout: page
permalink: /
auto-heading: false
foot: js/masonry.html
---

<div class="h1 mb-4">{{ site.tagline }}</div>

Lib-Static is a provocation to rethink how we do digital infrastructure in libraries to recenter our technology choices around sustainable, pragmatic, and minimal approaches.
{:.lead}

<div class="row mt-3">
    <div class="col"><a href="/about/" class="btn w-100 btn-primary mb-3">Why?</a></div>
    <div class="col"><a href="/projects/" class="btn w-100 btn-success mb-3">Projects &amp; Models</a></div>
    <div class="col"><a href="/concepts/" class="btn w-100 btn-info mb-3">Concepts</a></div>
    <div class="col"><a href="/community/" class="btn w-100 btn-warning mb-3">Community</a></div>
</div>

<hr>

{% assign items = site.documents | where_exp: 'd','d.ignore != "true"' %}
<div class="row" data-masonry='{"percentPosition": true }'>
    {% for i in items %}
    <div class="col-sm-6">
        <div class="card mb-3 border-{% cycle 'primary', 'success', 'danger', 'warning', 'info', 'dark' %}">
            {% if i.image %}<img src="{{ i.image | relative_url }}" class="card-img-top" alt="{{ i.image_alt }}">{% endif %}
            <div class="card-body">
                <h5 class="card-title"><a href="{{ i.url | relative_url }}">{{ i.title }}</a></h5>
                <p class="card-text"><strong>{{ i.type }}</strong><br>{{ i.project_description | default: i.content | strip_html | truncatewords: 25 }}</p>
            </div>
        </div>
    </div>
    {% endfor %}
</div>
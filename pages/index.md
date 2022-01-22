---
title: lib-static
layout: page
permalink: /
auto-heading: false
foot: js/masonry.html
---

<div class="h1 mb-4">{{ site.tagline }}</div>

lib-static is a provocation to rethink how we do digital infrastructure in libraries to recenter our technology choices around sustainable, pragmatic, and minimal approaches.
{:.lead}

<div class="row mt-3">
    <div class="col"><a href="/about/" class="btn w-100 btn-primary mb-3">About</a></div>
    <div class="col"><a href="/projects/" class="btn w-100 btn-success mb-3">Projects</a></div>
    <div class="col"><a href="/concepts/" class="btn w-100 btn-info mb-3">Concepts</a></div>
    <div class="col"><a href="/community/" class="btn w-100 btn-warning mb-3">Community</a></div>
</div>

Are you: Tired of learning platforms rather than skills? Frustrated with over-bloated systems? Siloed by the tools you know and the tools you don't?

It might be time to explore the lib-static approach, a development methodology that leverages static web technologies and librarian skills to create engaging web publications hosted on minimal infrastructure.
This site highlights the [projects]({{ '/projects/' | relative_url }}), [concepts]({{ '/concepts/' | relative_url }}), and [communities]({{ '/community/' | relative_url }}) that can enable lib-static projects and pathways to transform how you do *digital* in libraries.

<hr>

<div class="row" data-masonry='{"percentPosition": true }'>
    {% for i in site.documents %}
    <div class="col-sm-6">
        <div class="card mb-3 border-{% cycle 'primary', 'success', 'danger', 'warning', 'info', 'dark' %}">
            <div class="card-body">
                <h5 class="card-title"><a href="{{ i.url | relative_url }}">{{ i.title }}</a></h5>
                <p class="card-text">{{ i.type }}<br>{{ i.content | strip_html | truncatewords: 25 }}</p>
            </div>
        </div>
    </div>
    {% endfor %}
</div>
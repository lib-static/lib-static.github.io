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

Are you: Tired of learning platforms rather than skills? Frustrated with over-bloated systems? Siloed by the tools you know and the tools you don't?

It might be time to explore the lib-static approach, a development methodology that leverages static web technologies and librarian skills to create engaging web publications hosted on minimal infrastructure.
This site highlights the [projects]({{ '/projects/' | relative_url }}), [concepts]({{ '/concepts/' | relative_url }}), and [communities]({{ '/community/' | relative_url }}) that can enable lib-static projects and pathways to transform how you do *digital* in libraries.

<a href="/about/" class="btn btn-lg btn-primary m-2">About</a>
<a href="/projects/" class="btn btn-lg btn-success m-2">Projects</a>
<a href="/concepts/" class="btn btn-lg btn-info m-2">Concepts</a>
<a href="/community/" class="btn btn-lg btn-warning m-2">Community</a>

<div class="row" data-masonry='{"percentPosition": true }'>
    {% for i in site.documents %}
    <div class="col-sm-6">
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title"><a href="{{ i.url | relative_url }}">{{ i.title }}</a></h5>
                <p class="card-text">{{ i.type }}<br>{{ i.content | strip_html | truncatewords: 25 }}</p>
            </div>
        </div>
    </div>
    {% endfor %}
</div>
---
title: Social Stacks
# contributor: "@evanwill"
updated: 2021-08-04
type: Community
---

This section shares experiences of people who have already adopted Lib-Static methods in a variety of contexts to demonstrate real pathways and social stacks that can make it happen.
We asked contributors to think through their positionality, roles, and how to navigate their organization, so that others can envision themselves deploying Lib-Static solutions in their own environment.

<div class="row row-cols-1">
{% assign stacks = site.community | where: 'type','Social Stacks' %}
    {% for i in stacks %}
    <div class="col">
        <div class="card mb-3 border-{% cycle 'primary', 'success', 'danger', 'warning', 'info', 'dark' %}">
            <div class="card-body">
                <h5 class="card-title"><a href="{{ i.url | relative_url }}">{{ i.title }}</a></h5>
                <p class="card-text">{{ i.content | strip_html | truncatewords: 25 }}</p>
            </div>
        </div>
    </div>
    {% endfor %}
</div>
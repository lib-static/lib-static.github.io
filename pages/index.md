---
title: lib-static
layout: page
permalink: /
auto-heading: false
foot: js/home.html
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

Browse everything:

<div id="documentList">
    <div class="input-group mb-3">
        <input type="text" id="listSearch" class="form-control search" aria-label="Text input to filter list" placeholder="Filter...">
        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapseListOptions" aria-expanded="false" aria-controls="collapseListOptions">options</button>
        <div class="collapse w-100" id="collapseListOptions">
            <div class="card card-body">
                <p>Sort by:</p>
                <p>
                    <input type="radio" class="btn-check" name="sort_list" id="list_shuffle" autocomplete="off" checked>
                    <label class="btn btn-outline-info m-1" for="list_shuffle">Random</label>
                    <input type="radio" class="btn-check sort" name="sort_list" id="list_title" autocomplete="off" data-sort="listTitle">
                    <label class="btn btn-outline-info m-1" for="list_title">Title</label>
                    <input type="radio" class="btn-check sort" name="sort_list" id="list_type" autocomplete="off" data-sort="listType">
                    <label class="btn btn-outline-info m-1" for="list_type">Type</label>
                </p>
                <p>View item types:</p>
                <p>
                    <input type="radio" class="btn-check" name="filterRadio" id="filter-all" autocomplete="off" value="show-all" checked>
                    <label class="btn btn-outline-primary m-1" for="filter-all">All</label>
                    {% assign types = site.documents | map: 'type' | compact | uniq %}
                    {% for t in types %}
                    <input type="radio" class="btn-check" name="filterRadio" id="filter-{{ t | slugify }}" autocomplete="off" value="{{ t }}">
                    <label class="btn btn-outline-primary m-1" for="filter-{{ t | slugify }}">{{ t }}</label>
                    {% endfor %}
                </p>
            </div>
        </div>
    </div>
    <div class="mt-5 list row row-cols-1 row-cols-md-2"></div>
</div>
---
title: Browse Everything
layout: page
foot: js/browse-all.html
---

Browse all site content (or you can also use [search page]({{ '/search/' | relative_url }}) for fuzzier options).

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
                    {% assign types = site.documents | where_exp: 'i','i.ignore != true' | map: 'type' | compact | uniq %}
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
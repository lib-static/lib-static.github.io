---
title: The Literature
#contributor: "@evanwill"
updated: 2021-12-03
type: Community
foot: js/research.html
description: Curated articles highlighting Lib-Static related methods, concepts, and projects.
---

Also check our [Lib-Static zotero group](https://www.zotero.org/groups/4393671/lib-static) for more articles and resources of interest.

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
                    <input type="radio" class="btn-check sort" name="sort_list" id="list_date" autocomplete="off" data-sort="listDate">
                    <label class="btn btn-outline-info m-1" for="list_date">Date</label>
                    <input type="radio" class="btn-check sort" name="sort_list" id="list_author" autocomplete="off" data-sort="listAuthors">
                    <label class="btn btn-outline-info m-1" for="list_author">Author</label>
                </p>
            </div>
        </div>
    </div>
    <div class=" list row row-cols-1"></div>
</div>
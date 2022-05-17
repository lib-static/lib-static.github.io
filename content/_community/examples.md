---
title: More Examples?
#contributor: "@evanwill"
updated: 2021-12-03
type: Community
foot: js/examples.html
---

This list is of other examples of static web projects and tools we have seen in the wild.

We might not know much about them and they might not know about us, but this section hopes to present evidence of a growing world of static web solutions being deployed in GLAM contexts.
Projects listed here are not described in our [Models section]({{ '/models/' | relative_url }}).
Email [libstatic.uidaho@gmail.com](mailto:libstatic.uidaho@gmail.com) if you have more to add!

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
                    <label class="btn btn-outline-info m-1" for="list_type">Genre</label>
                </p>
            </div>
        </div>
    </div>
    <div class=" list row row-cols-1"></div>
</div>
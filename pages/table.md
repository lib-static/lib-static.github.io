---
title: Table
layout: page
permalink: /table/
table-id: "#data"
---
{%- assign data = site.data.example -%}

# Table Example 

<table id="data" class="table table-striped" data-order='[[1,"desc"]]'>
    <thead>
        <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>    
        </tr>
    </thead>
    <tfoot>
        <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>
        </tr>
    </tfoot>
    {% for d in data %}
    <tr>
        <td>{{ d.title }}</td>
        <td>{{ d.date }}</td>
        <td>{{ d.description }}</td>
    </tr>
    {% endfor %}
</table>
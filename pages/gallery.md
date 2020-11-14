---
layout: default
title: Gallery
permalink: gallery.html
---

<div class="container">
<p class="h2 my-4">GALLERY</p>
<p class="h4 pb-3 border-bottom">Tools</p>
<div class="row">
{% for item in site.tools %}
<div class="col-md-3 col-6 m-3">
    <div class="card m-3" >
        {% if item.images%}<img class="card-img-top" {% for image in item.images limit: 1 %}src="{% if image.filelocation contains 'http' %}{{ image.filelocation }}{% else%}{{ image.filelocation | relative_url }}{% endif %}" alt="{{image.caption}}"{%endfor%} style="max-height:100px;">{%endif%}
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <a href="{{item.url}}" class="btn btn-outline-primary stretched-link">More</a>
        </div>
      </div>
</div>
{%endfor%}
</div>
<p class="h4 pb-3 border-bottom">Projects</p>
<div class="row">
{% for item in site.projects %}
<div class="col-md-3 col-6 m-3">
    <div class="card m-3" >
        {% if item.images%}<img class="card-img-top" {% for image in item.images limit: 1 %}src="{% if image.filelocation contains 'http' %}{{ image.filelocation }}{% else%}{{ image.filelocation | relative_url }}{% endif %}" alt="{{image.caption}}"{%endfor%} style="max-height:100px;">{%endif%}
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <a href="{{item.url}}" class="btn btn-outline-primary stretched-link">More</a>
        </div>
      </div>
</div>
{%endfor%}
</div>
<p class="h4 pb-3 border-bottom">Sketches</p>
<div class="row">
{% for item in site.sketches %}
<div class="col-md-3 col-6 m-3">
    <div class="card m-3" >
        {% if item.images%}<img class="card-img-top" {% for image in item.images limit: 1 %}src="{% if image.filelocation contains 'http' %}{{ image.filelocation }}{% else%}{{ image.filelocation | relative_url }}{% endif %}" alt="{{image.caption}}"{%endfor%} style="max-height:100px;">{%endif%}
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <a href="{{item.url}}" class="btn btn-outline-primary stretched-link">More</a>
        </div>
      </div>
</div>
{%endfor%}
</div>

---
layout: default
title: Gallery
permalink: gallery.html
---
{% assign frameworks = site.resources | where: "objecttype", "framework" %}
{% assign projects = site.resources | where: "objecttype", "project" %}
{% assign utilities = site.resources | where: "objecttype", "utility" %}



<div class="container">
<p class="h2 my-4">GALLERY</p>
<p class="h4 pb-3 border-bottom">Frameworks</p>
<div class="row">
{% for item in frameworks %}
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
{% for item in projects %}
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
<p class="h4 pb-3 border-bottom">Utility</p>
<div class="row">
{% for item in utilities %}
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

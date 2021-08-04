---
title: Templating with Static Site Generators
---

***tl;dr***

- Creating and modifying templates is a transferable skill for using most static site generators
- Templating let's you determine the form and presentation of your text content

Static site generators use templates to format the text we publish on our websites. While the templating syntax may differ depending on which generator you're using, the idea behind the workflow is the same: you're making decisions about _how_ the content will be structured.

### Templates within Projects

Generators separate content files from templates files. For example, a typical project folder may have a subfolder (`/collection`) for storing written content in Markdown files and another subfolder (`/templates`) for storing HTML template files. 

```
.
├── templates/
│   ├── default.html
|   └── page.html
└── collection/
    ├── about.md
    └── tools.md
```

This organization enables us to keep our content portable and style-agnostic. We could, at any time, copy our `/collection` subfolder from one project to another. When you build the site, the generator will create your website files by using your template files and filling them with your written content accordingly. 

```
.
└── public/
    ├── about.html
    ├── tools.html
    └── ...
```
### Variables

Template files contain placeholder variables that represent our data. Each generator will provide a default set of variables and the means to define your own. Variables are often project-specific _metadata_, but --when working with templates-- they can also be the _data_ itself. 

We'll start with a few basic variables one would typically see in a static site project: `title` (the title of the item), `creator` (the creator of the item), and `content` (the item itself). Using the previous example, let's assume that `title` and `creator` are project-specific metadata variables that _we_ define and the `content` variable is defined by the system, representing the paragraph content within the Markdown files of the project.

Variables are placed throughout the template files using syntax that depends on the generator. Often, variable syntax uses curly braces `{{ }}` to wrap the name of the specific variable that is being used.

```
{{ title }}
```

The specific syntax you'll need for defining or using variables will depend on the generator you're using.

### Types of Templates

Templates are designed to be reused by the generator. For example, we might have one template to format our collection items and another template to format our informational pages. This simplifies our design process because we only need to edit one template file to apply a change across all pages within our website that use that template. With reusability in mind, generators often allow templates to use _other_ templates so that small design changes do not need to be repeated across multiple template files. 

#### Parent Templates

Parent templates, or _base_ templates, contain standard elements that need to be re-used again and again. For example, every HTML document requires and `<html>` tag. It doesn't make sense to redefine the `<html>` tag in every one of our templates files, so we can use one template called `default.html` that looks like this:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ title }}</title>
  </head>
  <body>
    {{ content }}
  </body>
</html>
```

This template uses the HTML5 document structure and places two variables in appropriate places within the document. Now that we have a `default.html` template, we can reuse this template when formatting different types of pages within our website. 

#### Child Templates

Child templates inherit the structure of their parent templates. With our `default.html` template, we define new templates for pages that require specific structures. Let's say we wanted a template for an informational page, called `page.html`. We would first reference `default.html` as the parent template, then add new HTML elements for the specifics we want to see on the page:

```html
---
layout: default
---

<h2>{{ title }}</h2>
<p class="author">{{ creator}}</p>
{{ content }}

```

The top of the `page.html` template references its parent template, `default.html`. When the generator uses the `page.html` template, it will place all of its content within the `{{ content}}` variable in the `default.html` template. 

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ title }}</title>
  </head>
  <body>
    <h2>{{ title }}</h2>
    <p class="author">{{ creator}}</p>
    {{ content }}
  </body>
</html>
```

Notice how the `{{ content }}` variable changes depending on the context of its use. When we run the generator to build our website, the `{{ content }}` variable will refer to different things each time it is processed. Let's say that we want the `page.html` template we created to be used to format all of our Markdown files. Here's how the variable will change:

| Processed file    | Value of `{{ content }}`       |
| ------------------|--------------------------------|
| `default.html`    | `{{ content }}` = `page.html`  |
| `page.html`       | `{{ content }}` = `about.md`   |
| `about.md`        | `{{ content }}` = written text |

Each generator will have its own way of referencing templates. The above example uses [Jekyll's Layouts conventions](https://jekyllrb.com/docs/step-by-step/04-layouts/) for demonstration purposes, but the conventions may differ depending on which generator you're using. 

#### Partials

Partials, or _includes_, are templates for reusable components of a website. Because the HTML source of a web page can include **A LOT** of markup, partials provide designers a way to better organize their template files. Website navigation bars are popular examples of partials in static site projects. 

For example, here's a partial called `navigation.html`:

```html
<nav>
    <h1 class="logo">{{ title}}</h1>
    <ul>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
    </ul>
</nav>
```

Unlike child templates, partials do not need to reference any parent. Instead, we can place a partial in any other template by explicitly calling it:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{% raw %}{{ title }}{% endraw %}</title>
  </head>
  <body>
      {% raw %}{% include navigation.html %}}
      {{ content }}{% endraw %}
  </body>
</html>
```

Here, we have modified our `default.html` template by adding a reference to the `navigation.html` partial in the location where we want the generator to place it. Again, the above example uses [Jekyll's conventions](https://jekyllrb.com/docs/includes/) for demonstration purposes; specific syntax will vary.

### Other Uses for Templates

While most Lib-Static projects revolve around static HTML, some generators let you create templates for non-HTML outputs. Pandoc, for example, uses [templates](https://pandoc.org/MANUAL.html#templates) to generate each of its [supported output formats](https://pandoc.org/). Similarly, [Hugo](https://gohugo.io/) uses templates to generate [XML sitemaps](https://gohugo.io/templates/sitemap-template/) and [RSS feeds](https://gohugo.io/templates/rss/). One could get creative with templates to generate all sorts of library-specific metadata files we might want to distribute with our web projects. 

***

**Further reading:** "[Introduction to Static Site Generators](https://chrisdaaz.github.io/static-web-scholcomm/tutorials/static-site-generators/)" by Chris Diaz.

***